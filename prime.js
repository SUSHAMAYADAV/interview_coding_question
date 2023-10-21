/*const arr1=[1,3,5,7,9,11,13]
const arr2=[9,11,13,17,27] 
const arr=[...arr1,...arr2]
console.log(arr)
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
           arr.splice(j,1)
          // console.log(arr)
        }
    }
}
console.log(arr)*/

//check the user enter a number which is prime or not
/*function isprime(n){
        for(let i=2;i<n;i++){
         // console.log("the value",i)
            if(i%n===0)
                return false;    
        }
        return true
    }
   console.log(isprime(5))*/

/*const arr = [];
var count = 0
 let i,j
  
for (i = 2; i <= 60; i++) {
  for (j = 1; j <= i; j++) {
    if (i % j == 0) {
      count = count + 1;
    }
  }
  if (count === 2) {
    arr.push(i);
  
  }
  count=0
}
console.log(arr);*/


//method  third to print alternate prime number

/*const arr = [];
var count = 0
 let i,j

  
for (i = 2; i <= 20; i++) {
  for (j = 1; j <= i; j++) {
    if (i % j == 0) {
      count = count + 1;
    }
  }
  if (count === 2) {
    arr.push(i);
  }
  count=0
}
console.log(arr)
for(let k=0;k<arr.length;k++){
  if(k%2==0){
    console.log(arr[k])
  }
}*/

//count number of  primes in array
//input arr=[1,3,4,5,7]
//output 3 (3,5,7)
let n=50;
let prime = []
  for(let i=2;i<=n;i++){
if(prime[i]==0){
  for(let j=i*i;j<=n;j+=i){
    prime[i]=1;
  }
}
console.log(i)
  }
 
  for(let i=2;i<=n;i++){
    if(prime[i]==0){
      console.log(i)
    }
  }
 



