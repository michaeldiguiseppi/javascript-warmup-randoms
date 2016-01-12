// console.log(Math.floor(Math.random() * 100));


//Two randoms and calculate mean, variance, and standard deviation.
var rand1 = Math.floor(Math.random() * 100);
var rand2 = Math.floor(Math.random() * 100);
var mean = (Math.floor((rand1 + rand2)/2))
var varian = (Math.pow((rand1 - mean), 2) + Math.pow((rand2 - mean), 2))/2
var std = Math.floor(Math.sqrt(varian));
console.log("The mean of " + rand1 + " and " + rand2 + " is " + mean);
console.log("The variance of " + rand1 + " and " + rand2 + " is " + varian);
console.log("The standard deviation of " + rand1 + " and " + rand2 + " is " + std);


//random int prints even integers 0 - random number.

var rand = Math.floor(Math.random() * 100);

console.log("Prints out even integers from 0 to " + rand + ".");

for (var x = 0; x <= rand; x += 2) {
    console.log(x);
}

//random int prints 1-40 if below 40 or 40-random if over 40.

var rand = Math.floor(Math.random() * 100);

console.log("If " + rand + " is less than 40, print 1-40 odd.  Otherwise, print 40 to " + rand + " odd.")
if (rand < 40) {
    for (var x = 1; x <= 40; x += 2) {
    console.log(x);
    }
}
else {
    for (var x = 41; x <= rand; x += 2) {
    console.log(x);
    }
}


//twenty ints and print largest and smallest.

var max = 0;
var min = 100;
var rand = [];
for (var x = 0; x < 20; x++) {
    rand.push(Math.floor(Math.random() * 100));
}
for (var y = 0; y < rand.length; y++) {
    if (rand[y] > max) {
        max = rand[y];
    }
    else if (rand[y] < min) {
        min = rand[y];
    }
}
console.log("The maximum of the generated numbers is " + max);
console.log("The minimum of the generated numbers is " + min);

