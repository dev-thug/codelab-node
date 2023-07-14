const str = "12345678";

// const arr = str.split("").map(Number);
const arr = [...str].map(Number);
console.log(arr);
