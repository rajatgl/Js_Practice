//initializing min and maximum values as 999 and 100 respectively
let max = 100;
let min = 999;
let randomArray = [];

//using for loop to loop through 5 random digit numbers using math.floor(Math.random()) method
//use if statement to compare values on each iteration with min and max and set accordingly
for ( var i = 1; i<=5; i++) {
    let randomNumber= Math.floor(Math.random()*900)+100;
    let number = randomNumber
    randomArray.push(number)
}

randomArray.forEach((number)=>{
    if (number > max){
    max = number;
    }
    if (number < min){
    min = number;
    }
})

//printing the result
console.log("Array: "+randomArray);
console.log("Minimum: "+min);
console.log("Maximum: "+max);