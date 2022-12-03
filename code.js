//Problem 2 : Check whether a string is palindrome or not.

let string="apple"
let flag=false;
for(let i=string.length-1;i>=0;i--){
 flag=true; 
}
if (flag==true){
  console.log("yes string is palindrome")
}
else{
  console.log("No string is palindrome")
}
