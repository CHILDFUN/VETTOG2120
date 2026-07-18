const user = JSON.parse(localStorage.getItem("user"));

if(!user){

    window.location="login.html";

}

if(user.role!=="admin"){

    alert("Access Denied");

    window.location="dashboard.html";

}