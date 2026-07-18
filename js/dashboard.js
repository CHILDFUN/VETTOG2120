function openPage(page){

switch(page){

case "chat":

window.location="chat.html";

break;

case "members":

window.location="members.html";

break;

case "events":

window.location="events.html";

break;

case "gift":

window.location="giftcodes.html";

break;

}

}

const news=[

"Kingdom Event starts tomorrow",

"Bear Hunt at 19:00 UTC",

"New Gift Code Available",

"Welcome new members!"

];

let html="";

news.forEach(n=>{

html+="<p>📢 "+n+"</p>";

});

document.getElementById("newsList").innerHTML=html;