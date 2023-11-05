/*

Write a JS code to find the power of a number using for loop.

example:
console.log(numPower(4,3)); //64
console.log(numPower(16,2)); //256

 */



function numPower(a,b) {
    if b===0
    let c=a;
    for (let i = 1; i <b ; i++) {
        c=a*c
    }

return c;
}

console.info(numPower(2,4));
console.info(numPower(5,6));
console.info(numPower(2,0));


