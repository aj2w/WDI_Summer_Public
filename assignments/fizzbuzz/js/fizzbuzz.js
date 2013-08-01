// Your code goes here
var i = 1;

do {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
    i = i+1;
  } else if (i % 5 === 0) {
    console.log("Buzz");
    i = i+1;
  } else if (i % 3 === 0) {
    console.log("Fizz");
    i = i+1;
  } else if (i % 3 !== 0 || i % 5 !== 0) {
      console.log(i);
      i++;
  }
} while (i < 100);
