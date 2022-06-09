const reverseString = function(string) {
    let reversed = [];

    const letterByLetter = string.split('');

    for(let i = 0; i < string.length; i++)
    {
        reversed[i] = letterByLetter[letterByLetter.length - 1 - i];
    }

    const complete = reversed.join('');

    return complete;

};

// Do not edit below this line
module.exports = reverseString;
