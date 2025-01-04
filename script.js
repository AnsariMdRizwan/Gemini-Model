
const chatinput = document.querySelector("#chat-input")
const sendbutton = document.querySelector("#send-btn");
const themebutton = document.querySelector("#theme-btn");
const deleteButton = document.querySelector("#delete-btn");
const chatcontainer = document.querySelector(".chat-container");



let userText = null;
const initialheight = chatinput.scrollHeight;

const loaddatafromstorage = () => {
    const themecolor = localStorage.getItem("theme-color");

    document.body.classList.toggle("light-mode", themecolor === "light_mode");

    themebutton.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";

    const defaulttext = `<div class="default-text">
        <h1>Chat-Gpt Clone</h1>
        <p>Start a conservation and explore the power of the Ai<br> World's Most powerful tool</p>
    </div>`
    chatcontainer.innerHTML = localStorage.getItem("all-chats") || defaulttext

    chatcontainer.scrollTo(0, chatcontainer.scrollHeight)
}

loaddatafromstorage();

const getchatResponse = async (incomingchatdiv) => {
    const API_KEY = import.meta.env.API_KEY

    const API_URL = "https://api.openai.com/v1/completions";
    const pElement = document.createElement("p");
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-instruct",
            prompt: userText,
            max_tokens: 2048,
            temperature: 0.2,
            n: 1,
            stop: null
        })
    }
    try {
        const response = await (await fetch(API_URL, requestOptions)).json();
        pElement.textContent = response.choices[0].text.trim();
    } catch (error) {
        pElement.classList.add("error");
        pElement.textContent = "Oops! something went wrong while retrieving the response. Please try again."
    }
    incomingchatdiv.querySelector(".typing-animation").remove();
    incomingchatdiv.querySelector(".chat-details").appendChild(pElement);
    chatcontainer.scrollTo(0, chatcontainer.scrollHeight);
    localStorage.setItem("all-chats", chatcontainer.innerHTML);
}

const copyResponse = (copyBtn) => {
    const responseTextElement = copyBtn.parentElement.querySelector("p");
    navigator.clipboard.writeText(responseTextElement.textContent);
    copyBtn.textContent = "done"
    setTimeout(() => copyBtn.textContent = "content_copy", 1000)
}

const createElement = (html, classname) => {
    const chatdiv = document.createElement("div");
    chatdiv.classList.add("chat", classname);
    chatdiv.innerHTML = html;
    return chatdiv;
}

const showTypingAnimation = () => {
    const html = `<div class="chat-content">
    <div class="chat-details">
    <img src="images/chat-bot.png" alt="">
    <div class="typing-animation">
    <div class="typing-dot" style="--delay:0.2s"></div>
    <div class="typing-dot" style="--delay:0.3s"></div>
    <div class="typing-dot" style="--delay:0.4s"></div>
    </div>
    </div>
    <span  onclick="copyResponse(this)" class="material-symbols-outlined">content_copy</span>
    </div>`;
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


