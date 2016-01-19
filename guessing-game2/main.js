
var randNum = Math.floor((Math.random() * 100) + 1);
console.log(randNum);

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var num = document.getElementById('number').value;
    guessNumber(num, randNum);
});

function guessNumber (num, randNum) {
    if (num < randNum) {
        alert("too low");
    }
    else if (num > randNum) {
        alert("too high");
    }
    else {
        alert("you win!");
    };
}
