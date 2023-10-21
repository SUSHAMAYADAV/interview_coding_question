function fibonacci(n){
    let n1=0;
    let n2=1;
    let next;
    let sum =0;
    for(let i=1;i<=n;i++){
        console.log(n1)
        next=n1+n2;
        n1=n2
        n2=next;
        sum=sum + n1
    }
    console.log(n1)
    console.log(sum)
}
fibonacci(8)
//using recursion
/*function fibo(n){
    if(n==0) return 0
    if(n==1) return 1
    return fibo(n-1)+fibo(n-2)
}
console.log("fibo",fibo(8))*/