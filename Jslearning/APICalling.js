//  this is how we used to do AJAX calls

// const request = new XMLHttpRequest();
// request.open(`GET`,'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1');
// request.send();

// request.addEventListener(`load`,function(){

//     const data = JSON.parse(this.responseText);
//     console.log(data);
// });

// mordern way of doing AJAX calls
//  .1 fetch(`URL);

// fetch(`http://dog-api.kinduff.com/api/facts?number=5`)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(`Error is  at line 27: `, err.message);
//   });


//  26.74
// 83.37

//  27807e3d474d4dc1b5f95f0206f5d9a3

// const arr = [ 1,2,3,4,5];

// console.log(arr.keys());

// console.log(Array(5).keys());


//  ------   promises

// function fun1(){
//     return new Promise((resolve)=>{
//         setTimeout(resolve, 2000);
//     });
// }

// const value = fun1();
// value.then(()=>{
//     console.log(" hello ");
// });

// function fun(){
//     return new Promise((res , rej)=>{
//         res("hello");
//     })
// }
// fun().then((res)=>{
//     console.log(res);
// })



async function fun(){
    // return new Promise((res , rej)=>{
    //     res("hello");
    // })
 return "hello";
}
console.log(fun());
// fun().then((res)=>{
//     console.log(res);
// })




// console.log("hello bahar");



// setTimeout(()=>{
//     resolve
// },0*1000);

// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");
// console.log("hello bahar");

