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
  return Math.ceil(this.custPerHour);
};
Store.prototype.getCookie = function() {
  console.log(this.avg_cookie * this.custPerHour);
};
shop1.getCustomer();
shop1.getCookie();

var hours = ['6am','7am','8am','9am','10am', '11am', '12pm', '1pm' , '2pm', '3pm', '4pm','5pm', '6pm'];
var totalByHour = hours + getCookie;
// var totalByLoc =

var table = document.getElement('table');
var tableData = [];

for (var i = 0; i < hours.length; i++) {
  tableData.push('<td>' + hour[i].length + '</td>');
 };
 console.log(tableData);


// + '<td>' + Store.getCookie(i)+ '</td>'+ '<td> + ' Total location daily' + '</td>');
// // }
// //
// // var shop1 = new Store('first and Pike', 23, 65, 6.3);
// // var shop2 = new Store('SeaTac Airport', 3, 24, 1.2);
// // var shop3 = new Store('Seattle Center',	11,	38,	3.7);
// // var shop4 = new Store('Capitol Hill', 20,	38,	2.3);
// // var shop5 = new Store('Alki', 2, 16, 4.6);
// //
// // var shop2 = new Store('SeaTac Airport', 3, 24, 1.2);
