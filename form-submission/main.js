

var randNum = Math.floor(Math.random() * 100);

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var numGuess = document.getElementById('number').value;
    checkWin(numGuess, randNum);
});



console.log(randNum);

function checkWin(numGuess, randNum) {
    if (numGuess < randNum) {
        alert("You're too low.  Try higher!");
    } else if (numGuess > randNum) {
        alert("You're too high!  Try lower!");
    }
    else {
        alert("You guessed it!");
    }
}