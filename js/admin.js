function show(page){

let html="";

switch(page){

case "users":

html=`

<h2>Users</h2>

<button>Add User</button>

<button>Edit User</button>

<button>Delete User</button>

`;

break;

case "events":

html=`

<h2>Events</h2>

<button>Create Event</button>

<button>Edit Event</button>

<button>Delete Event</button>

`;

break;

case "codes":

html=`

<h2>Gift Codes</h2>

<button>Add Code</button>

<button>Disable Code</button>

`;

break;

case "news":

html=`

<h2>News</h2>

<textarea rows="6" style="width:100%;"></textarea>

<br><br>

<button>Publish</button>

`;

break;

case "settings":

html=`

<h2>Settings</h2>

<label>

<input type="checkbox">

Dark Mode

</label>

`;

break;

default:

html="<h2>Dashboard</h2>";

}

document.getElementById("content").innerHTML=html;

}