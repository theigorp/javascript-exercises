const repeatString = function(string, num) {
    if(num==0) return "";
    if(num < 0) return "ERROR";
    else {
        for(let i = 0; i < num; i++)
        {
        return string.repeat(num);
        }
    }
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
