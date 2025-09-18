// synchronous programming----

function waitForTwoSeconds(){
  let ms=2000+new Date().getTime();
  while(new Date().getTime()<ms);
}

function register(){
  waitForTwoSeconds();
  console.log("register function called");
}
function sendEmail(){
  waitForTwoSeconds();
  console.log("sendEmail function called");
}
function login(){
  waitForTwoSeconds();
  console.log("login function called");
}
function getData(){
  waitForTwoSeconds();
  console.log("getData function called");
}
function DisplayData(){
  waitForTwoSeconds();
  console.log("DisplayData function called");
}

register();
sendEmail();
login();
getData();
DisplayData();
console.log("other Application");



