"use strict";

console.log(this) // this will refare to current global scope. for browser it's window object. for other javascript runtime it's diffenent

function task(){
    console.log("task = "+this)
}

const task2 = () =>{
    console.log("task2 = "+this)
}


task(); // in strict mode 'this' will undefined / normal mode 'this' will refare window
window.task(); // but using window object 'this' will attached to window, so return window

task2();

const work = {
    name : "Task1",
    job : function(){
        console.log(this.name) // this will refare current object
    }
}

work.job();


const work2 = {
    name : "Task2",
    job : ()=> {
        console.log(this) // but for arrow function this will refare lexical scope. so in this case it's window
    }
}

work2.job();

const work3 = {
    name : "Task3",
    jobName : function(){
        const job = ()=> {
            console.log(this) // but for arrow function this will refare lexical scope. so in this case it's upper function or can say work3 object
        }

        job();
    }
}

work.job.call(work3);