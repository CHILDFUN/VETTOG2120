const eventList=[

{
name:"🐻 Bear Hunt",
date:"2026-07-30T19:00:00"
},

{
name:"🏰 Fortress Battle",
date:"2026-07-28T18:00:00"
},

{
name:"🔥 Sunfire Castle",
date:"2026-08-02T20:00:00"
},

{
name:"👑 Kingdom Event",
date:"2026-08-05T17:00:00"
}

];

const container=document.getElementById("events");

function render(){

container.innerHTML="";

eventList.forEach((e,index)=>{

const now=new Date();

const target=new Date(e.date);

const diff=target-now;

const d=Math.floor(diff/86400000);

const h=Math.floor(diff%86400000/3600000);

const m=Math.floor(diff%3600000/60000);

container.innerHTML+=`

<div class="event">

<div class="left">

<h2>${e.name}</h2>

<p>${target.toLocaleString()}</p>

</div>

<div class="countdown">

${d}d ${h}h ${m}m

</div>

</div>

`;

});

}

render();

setInterval(render,60000);