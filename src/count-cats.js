const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix ) {
 
  var arrStr= matrix.join('-').split('^^');

return (arrStr.length > 0)? (arrStr.length - 1 ): 0;
  
  // remove line with error and write your code here
};
