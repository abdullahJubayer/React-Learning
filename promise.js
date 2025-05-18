function checkIn(){
    return new Promise(function(resolve,reject){
        console.log("CheckIn");
        resolve(" done");
    });
}

function orderLunch(){
    return new Promise(function(resolve,reject){
        console.log("Lunch Order");
        resolve("done");
    });
}

function checkout(){
    return new Promise(function (resolve,reject){
        let error = new Error("Oh! forgot to checkout")
        reject(error);
    });
}

checkIn().then((data) =>{
    console.log(data);
    return orderLunch();
}).then((data)=>{
    console.log(data);
    return checkout();
}).catch((err)=>{
    console.log(err);
})

function task1(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Task 1");
        }, 1000);
    });
}

function task2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            reject(new Error("Failed Task 2"));
        }, 2000);
    });
}

function task3(){
    return new Promise((resolve,reject) =>{        
        setTimeout(() => {
            resolve("Task 3");
        }, 3000);
    });
}


// return all promises if all are successed. if anyone failed then return reject
Promise.all([task1(),task2(),task3()]).then((task) =>{
    console.log("all = "+task)
}).catch((err)=>{
    console.log("all = "+err)
})

// return all promises eather it success or failed
Promise.allSettled([task1(),task2(),task3()]).then((task) =>{
    console.log("allSettled = "+task)
})



// return then first promise which execute first immediately no matter it fullfill or reject.
Promise.race([task2(),task3()]).then((task) =>{
    console.log("race = "+task)
}).catch((err)=>{
    console.log("race = "+err)
})



// if any promise is success then the first succes return in then immediately.
// if all promise is failed then the return to catch block.
Promise.any([task1(),task2(),task3()]).then((task) =>{
    console.log("any = "+task)
}).catch((err)=>{
    console.log("any = "+err)
})