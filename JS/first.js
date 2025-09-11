console.log(a);
const x=20;
var a;
var b=4;
let e=12;
console.log(a);
{
  var c=7;
  let d=10;
  console.log(b);
  console.log(c);
  console.log(e);
  // x++;
}
// console.log(d);
console.log(c);
console.log(x);

function test(user="test"){
  console.log(`user is ${user}`);
}
test();
test("hello");

const sum=(p,q)=>p+q;
console.log(sum(4,5));
function add(a,b){
  console.log("function sum called");
  return a+b;
  console.log("function sum called");
}

console.log(add(3,5));

//callback function
function fun1(user,callback){
  console.log(`user is ${user}`);
  callback();
}

