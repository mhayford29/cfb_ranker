var moment = require('moment');

module.exports = {
  getWeekNumber: function() {
    //start is the date of the first saturday of the season, not the first full saturday of the season
    var start = new Date('2020-08-29 23:00:00');
    var end = new Date();
    
    var diff = new moment.duration(end.getTime() - start.getTime())
    
    return Math.floor(diff.asWeeks()) + 1;
  },
  isValidDay: function() {
    var currentDate = new Date();
    return currentDate.getDay() < 2 ? true : false
  },
  isValidWeek: function() {
    var weekNumber = this.getWeekNumber()
    return weekNumber < 0 ? true : false
  }
}

