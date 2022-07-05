const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(nums) {
  if(nums.length < 1) return 0;
	else return nums.reduce((sum, num) => sum+num, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product*num, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
  let factorial = 1;

  if(num == 0 || num == 1) return factorial;
  
	for(let i = num; i > 0; i--)
  {
    factorial*=i;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
