

const p1  = new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log("p1 complete")
        resolve("");
    },8000);
})

const p2  = new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log("p2 complete")
        resolve("");
    },5000);
})

function p3(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("p3 complete")
            resolve("");
        },15000);
    });
}

function p4(){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            console.log("p4 complete")
            resolve("");
        },5000);
    });
}

//this will run parallal because promise is created globally. and promise will run immediately after it's in execution phase
async function Task() {
    await p1; // 8 sec
    await p2; // 5 sec
    // will execution finished after 18sec or 10sec
}
Task();


//this will run sequensilly because this is function. and promise will created when function is creadet. so first p3 await and
// its see a promise so wait hare. after complete call p4
async function Task2() {
    await p3(); // 15 sec
    await p4(); // 5 sec
    // will execution finished after 15sec or 20sec
}
Task2();

for(let i = 1; i< 30;i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000);
}
