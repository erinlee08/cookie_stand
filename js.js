var obj = {
min:10,
max:30,
getRandomNum: function () {
  min = Math.ceiling(this.min);
  max = Math.floor(this.max);
  return (Math.floor(Math.random() * (max - min + 1) + min);
}
var store1 = {
  name: '1st and Pike',
  min_cust:	23,
  max_cust:	65,
  avg_cookie:6.3,
  custPerHour: function() {
    min = Math.ceiling(this.min);
    max = Math.floor(this.max);
    return Math.floor(Math.random() * (max - min + 1) + min);
 }
}
  var cookiePerHour = store1.avg_cookie * Math.random();
  cookiePerHour;
