const palindromes = function (string) {
    let newString = string.toLowerCase().replaceAll(' ', '').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    // if(newString == newString.split('').reverse().join('')) return true;
    // else return false;
    
    for(let i = 0; i < newString.length/2; i++)
    {
        if(newString[i] != newString[newString.length-1-i]) return false;
                
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
