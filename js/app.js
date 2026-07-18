console.log("SOL HUB Loaded");

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow="0 0 20px #3b82f6";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="none";

});

});