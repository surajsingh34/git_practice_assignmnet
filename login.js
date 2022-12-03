//Problem 1 : Check whether a number is Prime or not?


let number = 13;
for(let i=1;i<=13;i++){
if(number[i]%2==0){
 count++; 
}
}

if(count==2){
  console.log("it is prime number")
}
else{
  console.log("it is not prime number")
}



