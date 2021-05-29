let sum =0;
for ( var i = 1; i<=5; i++) {
    let randomNumber= Math.floor(Math.random()*90)+10;
    sum = sum + randomNumber;
    console.log("The random number generated is " + randomNumber);
}
console.log("Sum of five two digit random numbers is "+ sum);
let average = sum/5;
    console.log("Average of five two digt random numbers is " + average);