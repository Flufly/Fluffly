var coinName = [];
var priceInUsd = [];
var symbol = [];
var percentChanceHour = [];
var percentChanceDay = [];
var percentChanceWeek = [];

$(document).ready(function(){




  $.ajax({
    url:"https://api.coinmarketcap.com/v1/ticker/"
  }).done(function(coin){
    for (var i = 0; i < 10; i++) {
      coinName[i]=coin[i].name;
      priceInUsd[i]=coin[i].price_usd;
      symbol[i]=coin[i].symbol;
      percentChanceHour[i]=coin[i].percent_change_1h;
      percentChanceDay[i]=coin[i].percent_change_24h;
      percentChanceWeek[i]=coin[i].percent_change_7d;
    }
  });

});
console.log(coinName);
console.log(priceInUsd);
console.log(symbol);
console.log(percentChanceHour);
console.log(percentChanceDay);
console.log(percentChanceWeek);
