



console.log(" line 5 ");
async function fun(){
    console.log("line 7  first");
    const start = Date.now();
    const p = await new Promise(function(resolve){
        setTimeout(function(){
            console.log(" line 10 inside ");
            resolve();
        },10*1000);
    });
    const  p2 = await new Promise(function(resolve){
        setTimeout(function(){
            console.log("line 17");
            resolve();
        },10*1000);
    });
    const end = Date.now();

    console.log(" line 26 hi there second ",(end-start)/1000);
}
console.log("line 24");
fun();
console.log(" line 28");
