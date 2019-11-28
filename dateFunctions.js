var moment = require('moment');

module.exports = {
  getWeekNumber: () => {
    var start = new Date('2019-08-24 23:00:00');
    var end = new Date();
    
    var diff = new moment.duration(end.getTime() - start.getTime())
    
    return Math.floor(diff.asWeeks()) + 1;
  },
  isValidDay: () => {
    var currentDate = new Date();
    return currentDate.getDay() < 2 ? true : false
  }
}
