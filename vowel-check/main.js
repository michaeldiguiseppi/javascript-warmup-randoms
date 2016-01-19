// Need to split the word into an array

// Compare each letter to the vowel array.  If it exists in the vowel array,
// push it into a new array.

// Finally, loop through the array of the pushed vowels and compare each one to
// the first value, seeing if they are all the same.

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];



function checkVowel(string) {
    var strArr = string.toLowerCase().split('');
    var newArr = [];

    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (strArr[i] === vowels[j]) {
                newArr.push(strArr[i]);
            };
        };
    };
    for (var k = 0; k <= newArr.length; k++) {
        if (newArr[k] !== newArr[k+1]) {
            console.log("false");
            return false;
        }
        else if (newArr[0] === undefined) {
            console.log("There aren't any vowels!");
            return false;
        }
        else {
            console.log("true");
            return true;
        }
    };
};

checkVowel('bzz');