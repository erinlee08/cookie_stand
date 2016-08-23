function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Store(name, min_cust, max_cust, avg_cookie) {
  this.name = name;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookie = avg_cookie;
}
Store.prototype.getCustomer = function() {
  this.custPerHour = getRandomIntInclusive (this.min_cust, this.max_cust);
  console.log(this.custPerHour);
};
Store.prototype.getCookie = function() {
  console.log(this.avg_cookie * this.custPerHour);
};
var shop1 = new Store('1st and Pike', 23, 65, 6.3);


for (var i = 0; i < 12; i++) {
  shop1.getCustomer();
  shop1.getCookie();
}// var shop2 = new Store('SeaTac Airport', 3, 24, 1.2);
// var shop3 = new Store('Seattle Center',	11,	38,	3.7);
// var shop4 = new Store('Capitol Hill', 20,	38,	2.3);
// var shop5 = new Store('Alki',	2, 16, 4.6);



var shop2 = new Store('SeaTac Airport', 3, 24, 1.2);
