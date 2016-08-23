var shop2 = {
  name:'SeaTac Airport',
  min_cust:	3,
  max_cust:	24,
  avg_cookie:1.2,
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

// var cookiePerHour = [store1.avg_cookie,store1.custPerHour()];
e
