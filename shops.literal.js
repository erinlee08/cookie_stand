
var shop1 = {
  name: 'Pike Place',
  min_cust:	23,
  max_cust:	65,
  avg_cookie: 6.3,
  cookiePerHour: function(){
    return Math.ceil(this.avg_cookie * Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  },
  custPerHour: function(){
    return Math.ceil(Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  }
};
shop1.cookiePerHour();
shop1.custPerHour();

// create memory in DOM
var el = document.getElements('div');
// add content
el.innnerText = '<li>' + '</li>';
// add to html
document.body.appendChild(el);
var listTotal = [shop1.cookiePerHour(), shop1.custPerHour()];

for (var i = 0; i < 12; i++) {
  var list = document.getElements('li');
  list.createContent = listTotal;
  document.body.appendChild(list);
};


// shop2 seatac
var shop2 = {
  name:'SeaTac Airport',
  min_cust:	3,
  max_cust:	24,
  avg_cookie:1.2,
  cookiePerHour: function(){
    return Math.ceil(this.avg_cookie * Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  },
  custPerHour: function(){
    return Math.ceil(Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  }
};
shop2.cookiePerHour();
shop2.custPerHour();

// create memory in DOM
var elment = document.getElements('div');
// add content
elment.innnerText = '<li>' + '</li>';
// add to html
document.body.appendChild(element);
var listTotal2 = [shop2.cookiePerHour(), shop2.custPerHour()];
// run 12 tims for 12 hours of operation.
for (var j = 0; j < 12; j++) {
  var list2 = document.getElements('li');
  list2.createContent = listTotal2;
  document.body.appendChild(list2);
};


// Seattle Center
var shop3 = {
  name: 'Seattle Center',
  min_cust:	20,
  max_cust:	38,
  avg_cookie:2.3,
  cookiePerHour: function(){
    return Math.ceil(this.avg_cookie * Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  },
  custPerHour: function(){
    return Math.ceil(Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  }
};
shop3.cookiePerHour();
shop3.custPerHour();

// create memory in DOM
var el3 = document.getElements('div');
// add content
el3.innnerText = '<li>' + '</li>';
// add to html
document.body.appendChild(el);
var listTotal3 = [shop3.cookiePerHour(), shop3.custPerHour()];
// run 12 tims for 12 hours of operation.
for (var k = 0; k < 12; k++) {
  var list3 = document.getElements('li');
  list3.createContent = listTotal3;
  document.body.appendChild(list3);
};


// shop4 cap Hill
var shop4 = {
  name: 'Capitol Hill',
  min_cust:	20,
  max_cust:	38,
  avg_cookie:	2.3,
  cookiePerHour: function(){
    return Math.ceil(this.avg_cookie * Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  },
  custPerHour: function(){
    return Math.ceil(Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  }
};
shop4.cookiePerHour();
shop4.custPerHour();

  // create memory in DOM
var el4 = document.getElements('div');
  // add content
el4.innnerText = '<li>'  + '</li>';
  // add to html
document.body.appendChild(el);
var listTotal4 = [shop4.cookiePerHour(), shop4.custPerHour()];
  // run 12 tims for 12 hours of operation.
for (var l = 0; l < 12; l++) {
  var list4 = document.getElements('li');
  list4.createContent = listTotal4;
  document.body.appendChild(list4);
};

var shop5 = {
  name: 'Alki',
  min_cust:	2,
  max_cust:	16,
  avg_cookie: 4.6,
  cookiePerHour: function(){
    return Math.ceil(this.avg_cookie * Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  },
  custPerHour: function(){
    return Math.ceil(Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  }
};
shop5.cookiePerHour();
shop5.custPerHour();

// create memory in DOM
var el5 = document.getElements('div');
// add content
el5.innnerText = '<li>' + '</li>';
// add to html
document.body.appendChild(el);
var listTotal5 = [shop5.cookiePerHour(), shop5.custPerHour()];
// run 12 tims for 12 hours of operation.
for (var m = 0; m < 12; m++) {
  var list5 = document.getElements('li');
  list5.createContent = listTotal5;
  document.body.appendChild(list5);
};
