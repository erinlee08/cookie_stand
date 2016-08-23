var shop5 = {
  name: 'Alki',
  min_cust:	2,
  max_cust:	16,
  avg_cookie:4.6
  custPerHour: function() {
  min = Math.ceil;
  max = Math.floor;
  return Math.floor(Math.random() * (max - min + 1) + min);
cookiePerHour: function(){
return this.avg_cookie * Math.random;
  }
}
}
var cookieHour = [cookiePerHour,custPerHour];
// create
var tag1 = document.getElementsByTagName(<ul>);
                          // add content
tag1.innnerText = <ul> + cookieHour[] + </ul>;
// add to html
document.body.append(<ul>);
