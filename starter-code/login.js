console.log("login.js loaded");

let userLogin = {
	name: "asdf",
	password: "fdsa"
};

let inputPassword = prompt("Enter password for " + userLogin.name);

if(inputPassword === userLogin.password){
	alert("Welcome, " + userLogin.name);
}else{
	alert("Wrong password!");
}