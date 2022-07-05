const fibonacci = function(number) {
    if(number < 0) return 'OOPS';

    if(number == 1) return 1;

    let n1=0, n2=1, current;

    for(let i = 0; i < number-1; i++)
    {
        current = n1+n2;
        n1 = n2;
        n2 = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
