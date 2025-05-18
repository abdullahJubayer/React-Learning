// function a(){
//     let i = 1;

//     for(i; i< 5; i++){
//         setTimeout(function () {
//                 console.log('i = ' + i)
//         },i * 1000);
//     }

//     for(let x = 1; x< 5; x++){
//         setTimeout(function () {
//                 console.log('x = ' + x)
//         },x * 1000);
//     }
// }

// a();

// function addEventListener(){
//     let count = 0;
//     document.getElementById("clickme").addEventListener('click',function (){
//         console.log(count++);
//     })
// }

// console.log("test")
// addEventListener();

// function closure(){
//     let count = 0;
//     setTimeout(() => {
//             console.log(count++);
//     }, 1000
// );
// }

// closure();
// closure();


// javascript  object

let computer = {
    name :  "mac",
    os : "senora",
    version : "1.1.1",

    show : function () {
        console.log(this.name +' '+this.version)
    }
}

function Factory(){
    return {
        factoryName : "Factory Constructor",
        version : "1.1.1",
        show : function(){
            console.log(this.factoryName)
        }
    }
}

function Constructor(){
    this.fullName = "Constructor",
    this.version = "1.1.1"
    this.show = function() {
        console.log(this.version)
    }
}


computer.show();

let fac = Factory();
console.log(fac.show)

let cons = new Constructor();
cons.show();

const cart = ["true",2];
if(cart){
    console.log(cart);
}