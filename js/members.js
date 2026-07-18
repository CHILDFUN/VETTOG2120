const members=[

{
name:"SolLeader",
uid:"100001",
rank:"Leader",
power:"325M",
status:"🟢 Online",
avatar:"https://i.pravatar.cc/60?img=1"
},

{
name:"Shadow",
uid:"100002",
rank:"Officer",
power:"280M",
status:"🟢 Online",
avatar:"https://i.pravatar.cc/60?img=2"
},

{
name:"Phoenix",
uid:"100003",
rank:"Veteran",
power:"241M",
status:"🔴 Offline",
avatar:"https://i.pravatar.cc/60?img=3"
},

{
name:"Knight",
uid:"100004",
rank:"Member",
power:"180M",
status:"🟢 Online",
avatar:"https://i.pravatar.cc/60?img=4"
}

];

function loadMembers(){

let html="";

members.forEach(m=>{

html+=`

<tr>

<td><img src="${m.avatar}"></td>

<td>${m.name}</td>

<td>${m.uid}</td>

<td>${m.rank}</td>

<td>${m.power}</td>

<td>${m.status}</td>

</tr>

`;

});

document.getElementById("membersTable").innerHTML=html;

}

function searchMember(){

const value=document.getElementById("search").value.toLowerCase();

const rows=document.querySelectorAll("#membersTable tr");

rows.forEach(r=>{

r.style.display=

r.innerText.toLowerCase().includes(value)

?

""

:

"none";

});

}

loadMembers();