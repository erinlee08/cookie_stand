var shop3 = {
  name: 'Seattle Center',
  min_cust:	20,
  max_cust:	38,
  avg_cookie:2.3
  // custPerHour: function() {
  // return (Math.floor(Math.random() * (this.max_cust - this.min_cust + 1) + this.min_cust);
  cookiePerHour: function(){
    return this.avg_cookie * Math.random;
  }
  }
}
var cookieHour = [cookiePerHour,custPerHour];

// create
var tag1 = document.getElementsByTagName('<ul>');
                          // add content
tag1.innnerText = '<ul>' + cookieHour[' '] + ''</ul>'';
// add to html
document.body.append('<ul>'');
