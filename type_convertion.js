// let number = 5;
//       console.log(12 / "");
//       console.log(12 / "null");
//       console.log(12 / null);
//       console.log(12 / "1");
//       console.log("Ba" + +"a" + "a");
//       console.log(!false);
//       console.log(Boolean("true"));
//       console.log(true == "true");
//       console.log(!false == true);
//       console.log(!false == "true");
//       console.log(1 < 32);
//       console.log(1 << 32);
//       console.log([1, 2, 3, 15, 30, 7, 5, 45, 60].sort());
//       console.log(38 - 7);

const val1 = "3.22";
const val2 = " ";
const val3 = "";
const val4 = "88 99";

console.log(Number(val1));
console.log(Number(val2));
console.log(Number(val3));
console.log(Number(val4));

const val5 = "7";
console.log(typeof val5);
console.log(typeof +val5); // + operator convert string to a number
console.log(5 + null); // hare null converted into 0 because first operand is 0
console.log("5" + null); // hare null converted into string because first operand is string
console.log("5" - null);
console.log("5" / null);
console.log("5" * null); // hare for other operator like (-,*,/) its converted into number

console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean(" "));
console.log(Boolean(null));
console.log(Boolean("Nan"));
console.log(Boolean(NaN));

function sayHello(day) {
  return "Hello " + this.name + " today is " + day;
}

var obj = { name: "Aashi" };

console.log(sayHello.apply(obj, ["15 july"]));

console.log(sayHello.call(obj, "15"));

console.log(sayHello.bind(obj, "15")());
