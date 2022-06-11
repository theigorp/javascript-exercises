const ftoc = function(fahr, cels) {
  let result = (fahr-32) * 5/9;
  return Math.round(result * 10) / 10;
};

const ctof = function(cels, fahr) {
  return Math.round(((cels * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
