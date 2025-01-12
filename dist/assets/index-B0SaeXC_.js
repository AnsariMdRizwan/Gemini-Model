(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var M;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(M||(M={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(L||(L={}));var x;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(x||(x={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=["user","model","function","system"];var G;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(G||(G={}));var H;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(H||(H={}));var U;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(U||(U={}));var F;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(F||(F={}));var R;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(R||(R={}));var $;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})($||($={}));var j;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(j||(j={}));var K;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(K||(K={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class O extends f{constructor(e,n){super(e),this.response=n}}class J extends f{constructor(e,n,s,o){super(e),this.status=n,this.statusText=s,this.errorDetails=o}}class C extends f{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="https://generativelanguage.googleapis.com",ot="v1beta",st="0.21.0",it="genai-js";var v;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(v||(v={}));class at{constructor(e,n,s,o,i){this.model=e,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var e,n;const s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||ot;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||nt}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function rt(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${it}/${st}`),e.join(" ")}async function ct(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",rt(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new C(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new C(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new C(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function lt(t,e,n,s,o,i){const a=new at(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},ht(i)),{method:"POST",headers:await ct(a),body:o})}}async function A(t,e,n,s,o,i={},a=fetch){const{url:r,fetchOptions:l}=await lt(t,e,n,s,o,i);return dt(r,l,a)}async function dt(t,e,n=fetch){let s;try{s=await n(t,e)}catch(o){ut(o,t)}return s.ok||await ft(s,t),s}function ut(t,e){let n=t;throw t instanceof J||t instanceof C||(n=new f(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function ft(t,e){let n="",s;try{const o=await t.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new J(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,s)}function ht(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new O(`${p(t)}`,t);return gt(t)}else if(t.promptFeedback)throw new O(`Text not available. ${p(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new O(`${p(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),q(t)[0]}else if(t.promptFeedback)throw new O(`Function call not available. ${p(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),T(t.candidates[0]))throw new O(`${p(t)}`,t);return q(t)}else if(t.promptFeedback)throw new O(`Function call not available. ${p(t)}`,t)},t}function gt(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function q(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const Et=[R.RECITATION,R.SAFETY,R.LANGUAGE];function T(t){return!!t.finishReason&&Et.includes(t.finishReason)}function p(t){var e,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];T(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function I(t){return this instanceof I?(this.v=t,this):new I(t)}function pt(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,e||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(d){s[d]&&(o[d]=function(c){return new Promise(function(u,y){i.push([d,c,u,y])>1||r(d,c)})})}function r(d,c){try{l(s[d](c))}catch(u){m(i[0][3],u)}}function l(d){d.value instanceof I?Promise.resolve(d.value.v).then(h,_):m(i[0][2],d)}function h(d){r("next",d)}function _(d){r("throw",d)}function m(d,c){d(c),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ct(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=mt(e),[s,o]=n.tee();return{stream:_t(s),response:vt(o)}}async function vt(t){const e=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return b(yt(e));e.push(o)}}function _t(t){return pt(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield I(n.read());if(o)break;yield yield I(b(s))}})}function mt(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return e.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new f("Failed to parse stream"));return}s.close();return}o+=a;let l=o.match(k),h;for(;l;){try{h=JSON.parse(l[1])}catch{s.error(new f(`Error parsing JSON response: "${l[1]}"`));return}s.enqueue(h),o=o.substring(l[0].length),l=o.match(k)}return i()})}}})}function yt(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].groundingMetadata=o.groundingMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[i].content.parts.push(a)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t,e,n,s){const o=await A(e,v.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s);return Ct(o)}async function X(t,e,n,s){const i=await(await A(e,v.GENERATE_CONTENT,t,!1,JSON.stringify(n),s)).json();return{response:b(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function S(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return Ot(e)}function Ot(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new f("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new f("No content is provided for sending chat message.");return s?e:n}function Rt(t,e){var n;let s={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=t.generateContentRequest!=null;if(t.contents){if(o)throw new C("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{const i=S(t);s.contents=[i]}return{generateContentRequest:s}}function Y(t){let e;return t.contents?e=t:e={contents:[S(t)]},t.systemInstruction&&(e.systemInstruction=Q(t.systemInstruction)),e}function It(t){return typeof t=="string"||Array.isArray(t)?{content:S(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],St={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function At(t){let e=!1;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new f(`First content should be with role 'user', got ${s}`);if(!D.includes(s))throw new f(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(D)}`);if(!Array.isArray(o))throw new f("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new f("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const l of B)l in r&&(i[l]+=1);const a=St[s];for(const r of B)if(!a.includes(r)&&i[r]>0)throw new f(`Content with role '${s}' can't contain '${r}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P="SILENT_ERROR";class Tt{constructor(e,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(At(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var s,o,i,a,r,l;await this._sendPromise;const h=S(e),_={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},m=Object.assign(Object.assign({},this._requestOptions),n);let d;return this._sendPromise=this._sendPromise.then(()=>X(this._apiKey,this.model,_,m)).then(c=>{var u;if(c.response.candidates&&c.response.candidates.length>0){this._history.push(h);const y=Object.assign({parts:[],role:"model"},(u=c.response.candidates)===null||u===void 0?void 0:u[0].content);this._history.push(y)}else{const y=p(c.response);y&&console.warn(`sendMessage() was unsuccessful. ${y}. Inspect response object for details.`)}d=c}),await this._sendPromise,d}async sendMessageStream(e,n={}){var s,o,i,a,r,l;await this._sendPromise;const h=S(e),_={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,h]},m=Object.assign(Object.assign({},this._requestOptions),n),d=W(this._apiKey,this.model,_,m);return this._sendPromise=this._sendPromise.then(()=>d).catch(c=>{throw new Error(P)}).then(c=>c.response).then(c=>{if(c.candidates&&c.candidates.length>0){this._history.push(h);const u=Object.assign({},c.candidates[0].content);u.role||(u.role="model"),this._history.push(u)}else{const u=p(c);u&&console.warn(`sendMessageStream() was unsuccessful. ${u}. Inspect response object for details.`)}}).catch(c=>{c.message!==P&&console.error(c)}),d}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(t,e,n,s){return(await A(e,v.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(t,e,n,s){return(await A(e,v.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function bt(t,e,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await A(e,v.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n,s={}){this.apiKey=e,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=Q(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var s;const o=Y(e),i=Object.assign(Object.assign({},this._requestOptions),n);return X(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(e,n={}){var s;const o=Y(e),i=Object.assign(Object.assign({},this._requestOptions),n);return W(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(e){var n;return new Tt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const s=Rt(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return wt(this.apiKey,this.model,s,o)}async embedContent(e,n={}){const s=It(e),o=Object.assign(Object.assign({},this._requestOptions),n);return Nt(this.apiKey,this.model,s,o)}async batchEmbedContents(e,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return bt(this.apiKey,this.model,e,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new f("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new V(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,s){if(!e.name)throw new C("Cached content must contain a `name` field.");if(!e.model)throw new C("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&e[a]&&(n==null?void 0:n[a])!==e[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(r===l)continue}throw new C(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${e[a]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new V(this.apiKey,i,s)}}const g=document.querySelector("#chat-input"),Lt=document.querySelector("#send-btn"),w=document.querySelector("#theme-btn"),xt=document.querySelector("#delete-btn"),E=document.querySelector(".chat-container");let N=null;g.scrollHeight;const Dt="AIzaSyA6NiCG9Jhw_XZQCHmsfhy5uR4rONAZ3qs",Z=()=>{const t=localStorage.getItem("theme-color");document.body.classList.toggle("light-mode",t==="light_mode"),w.innerText=document.body.classList.contains("light-mode")?"dark_mode":"light_mode";const e=`<div class="default-text">
        <h1>Gemni-1.5 </h1></br>
         <h1>🤖</h1>
        <p>Start a conservation and explore the power of the Ai<br> World's Most powerful tool...
        </p>
    </div>`;E.innerHTML=localStorage.getItem("all-chats")||e,E.scrollTo(0,E.scrollHeight)};Z();const Gt=async t=>{try{const n=new Mt(Dt).getGenerativeModel({model:"gemini-1.5-flash"}),s={temperature:1,topP:.95,topK:40,maxOutputTokens:81920,responseMimeType:"text/plain"},a=(await n.startChat({generationConfig:s,history:[]}).sendMessage(N)).response.text();console.log(a),t.innerHTML=`
            <div class="chat-content">
                <div class="chat-details">
                    <img src="/assets/chat-bot.png" alt="">
                    <p>${a}</p>
                </div>
                <span onclick="copyResponse(this)" class="material-symbols-outlined">content_copy</span>
            </div>`,localStorage.setItem("all-chats",E.innerHTML)}catch(e){console.error("Error in getchatResponse:",e),t.innerHTML=`
            <div class="chat-content">
                <div class="chat-details">
                    <img src="/assets/chat-bot.png" alt="">
                    <p>Sorry, something went wrong. Please try again.</p>
                </div>
            </div>`}};window.copyResponse=t=>{const e=t.parentElement.querySelector("p");navigator.clipboard.writeText(e.textContent),t.textContent="✔️",setTimeout(()=>t.textContent="content_copy",1e3)};const z=(t,e)=>{const n=document.createElement("div");return n.classList.add("chat",e),n.innerHTML=t,n},Ht=()=>{const e=z(`<div class="chat-content">
    <div class="chat-details">
    <img src="/assets/chat-bot.png alt="">
    <div class="typing-animation">
    <div class="typing-dot" style="--delay:0.2s"></div>
    <div class="typing-dot" style="--delay:0.3s"></div>
    <div class="typing-dot" style="--delay:0.4s"></div>
    </div>
    </div>
    <span  onclick="copyResponse(this)" class="material-symbols-outlined">content_copy</span>
    </div>`,"incoming");E.appendChild(e),E.scrollTo(0,E.scrollHeight),Gt(e)},tt=()=>{var n;if(N=g.value.trim(),!N)return;g.value="",g.style.height=`${et}px`;const e=z(`<div class="chat-content">
                <div class="chat-details">
                    <img src="/assets/user.png" alt="">
                    <p></p>
                </div>
            </div>`,"outgoing");e.querySelector("p").textContent=N,E.appendChild(e),(n=document.querySelector(".default-text"))==null||n.remove(),E.scrollTo(0,E.scrollHeight),setTimeout(Ht,500)};w.addEventListener("click",()=>{document.body.classList.toggle("light-mode"),localStorage.setItem("theme-color",w.innerText),w.innerText=document.body.classList.contains("light-mode")?"dark_mode":"light_mode"});xt.addEventListener("click",()=>{confirm("Are you sure you want to delete the chats?")&&(localStorage.removeItem("all-chats"),Z())});const et=g.scrollHeight;g.addEventListener("input",()=>{g.style.height=`${et}px`,g.style.height=`${g.scrollHeight}px`});g.addEventListener("keydown",t=>{t.key==="Enter"&&!t.shiftKey&&window.innerWidth>800&&(t.preventDefault(),tt())});Lt.addEventListener("click",tt);
