const messages=document.getElementById("messages");

function sendMessage(){

let input=document.getElementById("input");

if(input.value=="") return;

messages.innerHTML+=`

<div class="message">

<b>You</b>

<p>${input.value}</p>

</div>

`;

messages.scrollTop=messages.scrollHeight;

input.value="";

}