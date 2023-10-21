const userd = [
  {
    name: "sushma",
    gender: "Female",
    branch: "IT",
    email: "sushama1024@gmail.com",
    category: "tablet",
  },

  {
    name: "sunaina",
    gender: "trangender",
    branch: "cse",
    email: "sunaina12@gmail.com",
    category: "Laptop",
  },
  {
    name: "pooja",
    gender: "male",
    branch: "ece",
    email: "pooja10@gmail.com",
    category: "android",
  },
  {
    name: "pallavi",
    gender: "Female",
    branch: "CHE",
    email: "pallavi102@gmail.com",
    category: "Keypad",
  },
  {
    name: "nikita",
    gender: "Female",
    branch: "MEE",
    email: "nikita1@gmail.com",
    category: "Telephone",
  },
];
const inputSearchKeyword = "and";
const searchedData = userd.filter((item) => {
  //console.log(item)
   console.log(Object.keys(item));
  return Object.keys(item).some((key) => {
    console.log("the value of keyee", key, item[key]);
    return String(item[key])
      .toLocaleLowerCase()
      .includes(String(inputSearchKeyword.toLocaleLowerCase()));
  });
});
//console.log(searchedData);
