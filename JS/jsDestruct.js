const nums=[1,2,3,4,5]
const [a,b,c]=nums;
console.log(a);
console.log(b);
console.log(c);

const obj={name:"abc",id:2,email:"dummy@gmail.com"};
const {name:newname,id,email}=obj;
console.log(newname)
console.log(id)
console.log(email)

const [f,s,...rest]=nums;
console.log(f);
console.log(s);
console.log(rest);

const {name,...other}=obj;
console.log(name);
console.log(other)

const arr=[1,2];
const arr1=[3,4,5];
const arr3=[...arr,...arr1];
console.log(arr3);