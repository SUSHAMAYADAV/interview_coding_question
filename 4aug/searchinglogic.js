
/*const keyWord = "MEE";
const filterdata = userd.map((item) => {
  //console.log(item)
  if (item.branch == keyWord) {
    console.log(item);
  }
});*/
/*const inputSearchKeyword = "and";
const searchedData = userd.filter((item) => {
console.log(Object.keys(item))
  return Object.keys(item).some((key) => {
   console.log("the value of keyee",key,item[key])
    return String(item[key])
      .toLocaleLowerCase()
      .includes(String(inputSearchKeyword.toLocaleLowerCase()));
  });
});
console.log(searchedData);


//using some,include,function

function isGreaterThan5(element, index, array) {
    return element > 1;
}
function func() {
    // Original array
    let array = [-2, 5, 3, 1, 4];
    // Checking for condition in the array
    let value = array.some(isGreaterThan5);
    
    console.log(value);
}
func();

//using include
let text = [1,2,3,4,5,6,7]
let result = text.includes("4");
console.log(result)
//using filter
/*const ages = [32, 33, 16, 40];
const res= ages.filter((x)=> x>16 )
console.log(res)*/

/* const ages = [3, 10, 18, 20]; */

/* ages.some(checkAdult);
function checkAdult(age) {
  return age > 21;
}
console.log("V",checkAdult())
ages.some(xs) 
  function xs(t) {
    return t > 21;
  }
console.log("res", xs()) */

