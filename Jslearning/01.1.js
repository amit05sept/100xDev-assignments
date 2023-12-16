// console.log("hello world");

// program for greet a person given their first and last name
// const greet = function (firstName, lastName) {
//   console.log("hello " + firstName + " " + lastName);
// };

// greet("Amit" , "pandey");

/// program 2
// const greetGender = function (firstName, gender) {
//   let str = "hello " + firstName;
//   str += gender === "F" ? " Madam" : " Sir";

//   const str = `hello ${firstName} ${gender === "F" ? " Madam " : " Sir "}`;
//   console.log(str);

// if(gender==="F"){
//     console.log("hello "+firstName+" Madam");
// }else{
//     console.log("hello "+firstName +" sir");
// }
// };

// greetGender("Amit", "M");

// program 3 : count 0 to 1000

// const count = function (n) {
//   for (let i = 0; i <= n; i++) {
//     console.log(i);
//   }
// };

// count(1000);

//complex object

// const PrintMale = function (profile) {
//   for (let i = 0; i < profile.length; i++) {
//     if (profile[i]["gender"] === "male") {
//       console.log(profile[i]["firstName"]);
//     }
//   }
// };
// const profile = [
//   {
//     firstName: "Sumit",
//     gender: "male",
//   },
//   {
//     firstName: "Amit",
//     gender: "male",
//   },
//   {
//     firstName: "Priya",
//     gender: "female",
//   },
// ];

// PrintMale(profile);

// program to revese an array

// const revese = function (arr) {
//   const n = arr.length-1;
//   for (let i = 0; i <= n / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[n - i];
//     arr[n - i] = temp;
//   }
// };
// const arr = [1, 2, 3, 4, 56, 7,8];
// console.log(arr);
// revese(arr);
// console.log(arr);

// program to swap two numbers
// const swap = function(a,b){
//     const temp = a;
//     a = b;
//     b=temp;
//     console.log(a,b);
// }

// let a = 10;
// let b= 5;
// console.log(a,b);
// swap(a,b);
// console.log(a,b);

// playing with setTimeOut function

// const counter = function () {
// this is printing 30,29,28,....0  after one second.
// for(let i=30;i>=0;i--){
//     setTimeout(()=>{
//         console.log(` ${i} `);
//     },1*1000);
// }

//   let a = 30;
//   const firstInterval = setInterval(() => {
// console.log("hello");
//     console.log(a--);
//   }, 1 * 1000);

//   setTimeout(() => clearInterval(firstInterval), 32 * 1000);

//   let a = 30;
//   const firstInterval = setInterval(() => {
//     console.log(a);

//     if(a==0){
//         clearInterval(firstInterval);
//     }

//     a--;

//   }, 1 * 1000);

// };

// counter();

//2. Calculate the time it takes between a setTimeout call and the inner function actually running
//

// let start = Date.now();
// console.log(start);

// setTimeout(()=>{
// console.log((Date.now()-start)/1000.00);
// },5 * 1000);

// let sum=0;
// for(let i=0;i<10000000;i++){
//     sum+=1;
// }

// console.log(sum);

// 3.Create a terminal clock (HH:MM:SS)

// const clock = function (sec) {
//   let a = sec;
//   const timer = setInterval(() => {
//     const time = new Date();
//     console.log(
//       `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`
//     );

//     if (a == 0) clearInterval(timer);
//     a--;
//   }, 1 * 1000);
// };

// clock(10);


// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) console.log(false);
  
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
  
//     const map1 = Array(26).fill(0);
//     const map2 = Array(26).fill(0);
  
//     for (let i = 0; i < str1.length; i++) {
//       map1[str1[i].charCodeAt(0) - "a".charCodeAt(0)]++;
//     }
//     for (let i = 0; i < str2.length; i++) {
//       map2[str2[i].charCodeAt(0) - "a".charCodeAt(0)]++;
//     }
  
//     const result = JSON.stringify(map1) === JSON.stringify(map2);
//     return result;
//   }



