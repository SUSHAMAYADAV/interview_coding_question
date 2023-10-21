/*const  aa = [5,5,4,3,4,15,3,5,4,10]
const duplicate = (n)=>{
  for(let i = 0; i<n.length;i++){
    for(let j=i+1; j<n.length;j++){
      console.log("the value of j",j,aa[j],i,aa[i])
            if(aa[i]==aa[j]){
                //remove
                //aa.splice(j,1) 
               // console.log(aa)
                //add
              //  aa.splice(i,0,5)
            }
        }
  }
}
duplicate(aa)
console.log(aa)*/

//
const pp = [1,2,3,4]
for(let i = 0;i<pp.length;i++){
    if(pp[i]==3){
        pp.splice (2,1,5)
        console.log(pp)
    }
    
}

