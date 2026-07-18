const users = [
{
    email:"admin@sol.com",
    password:"admin123",
    role:"admin",
    name:"SOL Leader"
},
{
    email:"member@sol.com",
    password:"member123",
    role:"member",
    name:"SOL Member"
}
];

function login(){

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    const user=users.find(u=>u.email===email && u.password===password);

    if(!user){
        alert("Wrong Email or Password");
        return;
    }

    localStorage.setItem("user",JSON.stringify(user));

    if(user.role==="admin"){
        window.location="admin.html";
    }else{
        window.location="dashboard.html";
    }

}