const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  seasonName=['winter', 'spring', 'summer', 'autumn'];
  var  message = null; 
  var mounth = date.getMonth();

  try {

  if (mounth <= 1 || mounth == 11) {
    message = seasonName[0];
  } else if (mounth <= 4 && mounth>1) {
    message = seasonName[1];
  } else if (mounth <= 7 && mounth>4) {
    message = seasonName[2];
  } else {
    message = seasonName[3];
  }

} catch(err) {
 
      message = 'THROWN';

}
return message;
};
