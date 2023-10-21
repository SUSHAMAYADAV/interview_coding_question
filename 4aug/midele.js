const arr = [2,3,4,1,5,8,10,20]
/*let b = arr.length
//console.log(b)
if(b%2!==0){
    console.log("using if",arr[b/2])
}
else{
    c=b/2
    console.log("using else",arr[c],arr[c-1])
}*/
b=arr.length
for(let i=0;i<b;i++){
    if(i==b/2){
        console.log(arr[i],i)
    }
}


