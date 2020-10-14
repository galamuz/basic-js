const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  if (!Array.isArray(members)) {return false;}

  let team = members.map(function (str) {


   return  (str == null || str== true|| str == false)?'': str.toString().trim().slice(0, 1).toUpperCase();
  }, '')
  team.sort();

  return team.join('');

  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
