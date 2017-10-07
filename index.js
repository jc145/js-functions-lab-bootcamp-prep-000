// write your code below!
function happyHolidays(string) {
  return "Happy holidays!"
}
say happyHolidays('string')

function happyHolidaysTo(name) {
  return "Happy holidays, ${name}!"
}
say happyHolidaysTo('you')

function happyHolidayTo(holiday, name) {
  return "Happy ${holiday}, ${name}!"
}
say happyHolidayTo('Independence Day', 'you')

function holidayCountdown(holiday, days) {
  return "It\'s ${days} days until ${holiday}!"
}
say holidayCountdown("Mother's Day", '20')
