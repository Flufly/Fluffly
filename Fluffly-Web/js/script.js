var time = new Date().getTime();
     $(document.body).bind("mousemove keypress", function(e) {
         time = new Date().getTime();
     });

     function refresh() {
         if(new Date().getTime() - time >= 1  )
             window.location.reload(true);
         else
             setTimeout(refresh, 10000);
     }

     setTimeout(refresh, 10000); <!-- to refresh, still could be improved -->


// var coinName = [];
// var priceInUsd = [];
// var symbol = [];
// var percentChanceHour = [];
// var percentChanceDay = [];
// var percentChanceWeek = [];
// var hour;
$(document).ready(function(){
  $.ajax({
    url:"https://api.coinmarketcap.com/v1/ticker/?limit=10"
  }).done(function(coin){
    // for (var i = 0; i < 10; i++) {
    //   coinName[i]=coin[i].name;
    //   priceInUsd[i]=coin[i].price_usd;
    //   symbol[i]=coin[i].symbol;
    //   percentChanceHour[i]=coin[i].percent_change_1h;
    //   percentChanceDay[i]=coin[i].percent_change_24h;
    //   percentChanceWeek[i]=coin[i].percent_change_7d;
    // }
    $.each(coin,function(index,coin){ // for each would

      $('#coins').append(`

        <div class="alert  alert-secondary"> <!-- Div Start for Coin -->
          <div class="row">
            <div class="col-md-2">
              <img src="img/coin${coin.rank}.png" class="float-left">
            </div>
            <div class="col-md-2">
              <h4 class="text-info">${coin.symbol}</h4><br>${coin.symbol}&nbsp;|&nbsp;${coin.name}
              </div>
            <div class="col-md-2">
              <div class="col">
                <span class="badge badge-secondary btn-block">1h &nbsp;:&nbsp; <span id="hour${coin.rank}">${coin.percent_change_1h}</span></span><br>
                <span class="badge badge-secondary btn-block">24h &nbsp;:&nbsp; ${coin.percent_change_24h}</span><br>
                <span class="badge badge-secondary btn-block">7d &nbsp;:&nbsp; ${coin.percent_change_7d}</span><br>
              </div>
            </div>
            <div class="col-md-2">
              <h1><span class="inline-block text-dark">$&nbsp;${coin.price_usd}</span></h1>
            </div>
            <div class="col-md-4 badge ">
            <p>data coming soon</p>
            </div>
          </div>
        </div> <!-- Coin with Index 0 -->

        `)
    });
  });
});
// console.log(coinName);
// console.log(priceInUsd);
// console.log(symbol);
// console.log(percentChanceHour);
// console.log(percentChanceDay);
// console.log(percentChanceWeek);
