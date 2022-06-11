const reverseString = function(string) {
    let stringCharacters;

    stringCharacters = string.split('');
    stringCharacters = stringCharacters.reverse();
    stringCharacters = stringCharacters.join('');
    return stringCharacters



};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
