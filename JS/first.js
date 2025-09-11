// console.log(a);
// const x=20;
// var a;
// var b=4;
// let e=12;
// console.log(a);
// {
//   var c=7;
//   let d=10;
//   console.log(b);
//   console.log(c);
//   console.log(e);
//   // x++;
// }
// // console.log(d);
// console.log(c);
// console.log(x);

// function test(user="test"){
//   console.log(`user is ${user}`);
// }
// test();
// test("hello");

// const sum=(p,q)=>p+q;
// console.log(sum(4,5));
// function add(a,b){
//   console.log("function sum called");
//   return a+b;
//   console.log("function sum called");
// }

// console.log(add(3,5));

// //callback function
// function fun1(user,callback){
//   console.log(`user is ${user}`);
//   callback();
// }

//synchronous programming----

// function waitForTwoSeconds(){
//   let ms=2000+new Date().getTime();
//   while(new Date().getTime()<ms);
// }

// function register(){
//   waitForTwoSeconds();
//   console.log("register function called");
// }
// function sendEmail(){
//   waitForTwoSeconds();
//   console.log("sendEmail function called");
// }
// function login(){
//   waitForTwoSeconds();
//   console.log("login function called");
// }
// function getData(){
//   waitForTwoSeconds();
//   console.log("getData function called");
// }
// function DisplayData(){
//   waitForTwoSeconds();
//   console.log("DisplayData function called");
// }

// register();
// sendEmail();
// login();
// getData();
// DisplayData();
// console.log("other Application");



//asynchronous programming----

function register(){
  setTimeout(()=>{
    console.log("register function called"); 
  },2000);
}
function sendEmail(){
  setTimeout(()=>{

    console.log("sendEmail function called");
  },1000);
}    
function login(){
  setTimeout(()=>{
    console.log("login function called");  
  },3000);
}
function getData(){
  setTimeout(()=>{ 
    console.log("getData function called");
  },2000);
}
function DisplayData(){
  setTimeout(()=>{
    console.log("DisplayData function called");  
  },1000);
}

register();
sendEmail();
login();
getData();
DisplayData();   
console.log("other Application");

// register(()=>{
//   sendEmail(()=>{
//     login(()=>{
//       getData(()=>{
//         DisplayData();
//       });
//     });
//   });
// });