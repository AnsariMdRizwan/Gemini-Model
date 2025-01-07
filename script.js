import { GoogleGenerativeAI,  
     } from "@google/generative-ai";


const chatinput = document.querySelector("#chat-input")
const sendbutton = document.querySelector("#send-btn");
const themebutton = document.querySelector("#theme-btn");
const deleteButton = document.querySelector("#delete-btn");
const chatcontainer = document.querySelector(".chat-container");



let userText = null;
const initialheight = chatinput.scrollHeight;
const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;




const loaddatafromstorage = () => {
    const themecolor = localStorage.getItem("theme-color");

    document.body.classList.toggle("light-mode", themecolor === "light_mode");

    themebutton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";

    const defaulttext = `<div class="default-text">
        <h1>Chat-Gpt Clone </h1></br>
         <h1>🤖</h1>
        <p>Start a conservation and explore the power of the Ai<br> World's Most powerful tool...</p>
    </div>`
    chatcontainer.innerHTML = localStorage.getItem("all-chats") || defaulttext

    chatcontainer.scrollTo(0, chatcontainer.scrollHeight)
}

loaddatafromstorage();

const getchatResponse = async (incomingchatdiv) => {
    try {
        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
        });

        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 81920,
            responseMimeType: "text/plain",
        };

        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(userText);

        // Replace typing animation with the response text
        const responseText = result.response.text();
        console.log(responseText);

        incomingchatdiv.innerHTML = `
            <div class="chat-content">
                <div class="chat-details">
                    <img src="images/chat-bot.png" alt="">
                    <p>${responseText}</p>
                </div>
                <span onclick="copyResponse(this)" class="material-symbols-outlined">content_copy</span>
            </div>`;
        
        // Scroll to the bottom of the chat container
       
        localStorage.setItem("all-chats", chatcontainer.innerHTML);
    } catch (error) {
        console.error("Error in getchatResponse:", error);

        // Show an error message in place of the typing animation
        incomingchatdiv.innerHTML = `
            <div class="chat-content">
                <div class="chat-details">
                    <img src="images/chat-bot.png" alt="">
                    <p>Sorry, something went wrong. Please try again.</p>
                </div>
            </div>`;
    }
};





window.copyResponse = (copyBtn) => {
    const responseTextElement = copyBtn.parentElement.querySelector("p");
    navigator.clipboard.writeText(responseTextElement.textContent);
    copyBtn.textContent = "✔️";
    setTimeout(() => (copyBtn.textContent = "content_copy"), 1000);
};


const createElement = (html, classname) => {
    const chatdiv = document.createElement("div");
    chatdiv.classList.add("chat", classname);
    chatdiv.innerHTML = html;
    return chatdiv;
}

const showTypingAnimation = () => {
    const html =`<div class="chat-content">
    <div class="chat-details">
    <img src="images/chat-bot.png" alt="">
    <div class="typing-animation">
    <div class="typing-dot" style="--delay:0.2s"></div>
    <div class="typing-dot" style="--delay:0.3s"></div>
    <div class="typing-dot" style="--delay:0.4s"></div>
    </div>
    </div>
    <span  onclick="copyResponse(this)" class="material-symbols-outlined">content_copy</span>
    </div>`
    const incomingchatdiv = createElement(html, "incoming");
    chatcontainer.appendChild(incomingchatdiv);
    chatcontainer.scrollTo(0, chatcontainer.scrollHeight)
    getchatResponse(incomingchatdiv);
}

const handleoutgoingchat = () => {
    userText = chatinput.value.trim();
    if (!userText) return;
    chatinput.value = ""
    chatinput.style.height = `${initialHeight}px`
    const html = `<div class="chat-content">
                <div class="chat-details">
                    <img src="images/user.png" alt="">
                    <p></p>
                </div>
            </div>`;
    const outgoingchatdiv = createElement(html, "outgoing");
    outgoingchatdiv.querySelector("p").textContent = userText;
    chatcontainer.appendChild(outgoingchatdiv);
    document.querySelector(".default-text")?.remove();
    chatcontainer.scrollTo(0, chatcontainer.scrollHeight)
    setTimeout(showTypingAnimation, 500);
}

themebutton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode")
    localStorage.setItem("theme-color", themebutton.innerText)
    themebutton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
});

deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete the chats?")) {
        localStorage.removeItem("all-chats");
        loaddatafromstorage();
    }
})

const initialHeight = chatinput.scrollHeight;

chatinput.addEventListener("input", () => {
    chatinput.style.height = `${initialHeight}px`
    chatinput.style.height = `${chatinput.scrollHeight}px`
})

chatinput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleoutgoingchat();
    }
})

sendbutton.addEventListener("click", handleoutgoingchat);


