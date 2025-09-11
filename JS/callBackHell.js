function register(callback){
  setTimeout(()=>{
    console.log("register function called"); 
    callback();
  },2000);  
}
function sendEmail(callback){
  setTimeout(()=>{
    console.log("sendEmail function called");
    callback();
  },1000);
}     
function login(callback){
  setTimeout(()=>{
    console.log("login function called");  
    callback();
  },3000);
}   

function getData(callback){     
  setTimeout(()=>{
    console.log("getData function called"); 
    callback();
  },2000);
}

function DisplayData(){ 
  setTimeout(()=>{  
    console.log("DisplayData function called");
  },1000);
}



register(()=>{
  sendEmail(()=>{
    login(()=>{
      getData(()=>{
        DisplayData();
      });
    });
  });
});