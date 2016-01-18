function randomAndSum () {
    var random = (Math.floor(Math.random() * 8999) + 1000).toString();
    var randArray = random.split('');
    var sum = 0;
    for (var i = 0; i < randArray.length; i++) {
        sum += parseInt(randArray[i]);
    }

    console.log("The sum of the digits of " + random + " are " + sum);
}


function dropFirstDigit () {
    //First generate a random number between 1000 and 9999, and convert it to a string so we can work with it.
    var random = (Math.floor(Math.random() * 8999) + 1000).toString();
    // Initialize a new array called randArray, and make it's values the contents of the random number split by digits.
    var randArray = random.split('');
    // Initialize another new array called sumArray, where we will store the sums as we decrement and cut off digits. 
    var sumArray = [];

    var sum = 0;
    for (var i = randArray.length - 1; i >= 0; i--) {
        sum += parseInt(randArray[i]);
        sumArray.unshift(sum);
    }
    console.log(random, sumArray);
}

randomAndSum();

dropFirstDigit();
