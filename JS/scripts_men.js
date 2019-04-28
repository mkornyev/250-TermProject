  //var x = document.getElementById("myCheck").checked;

  var BSApp = angular.module("BSApp", []);
  BSApp.controller("myCtrl", function($scope) {
      $scope.wallets = wallets;
      $scope.range = new Array(10);
      $scope.cutStar = function(pop){
        return !(Number.isInteger(pop));
      };

      $scope.filteredWallets = function () {
          return function (p) {
              for (var i in $scope.wallets) {
                  var show = true;
                  var biFold = document.getElementById("bi-fold").checked;
                  var triFold = document.getElementById("tri-fold").checked;
                  var rfid = document.getElementById("RFID").checked;
                  var traveler = document.getElementById("traveler").checked;
                  var low = document.getElementById("low").checked;
                  var medium = document.getElementById("medium").checked;
                  var high = document.getElementById("high").checked;
                  var popularity = document.getElementById("popular").checked;
                  var bestSeller = document.getElementById("bestSeller").checked;
                  var flap = document.getElementById("flap").checked;
                  var zipper = document.getElementById("zipper").checked;
                  var clip = document.getElementById("clip").checked;

                  if(p.type == "bi-fold"){
                      if(!biFold){
                          show = false;
                      }
                  } else if(p.type == "tri-fold"){
                      if(!triFold){
                          show = false;
                      }
                  } else if(p.type == "RFID"){
                      if(!rfid){
                          show = false;
                      }
                  } else if(p.type == "traveler"){
                      if(!traveler){
                          show = false;
                      }
                  }

                  if(biFold == false && triFold == false && rfid == false && traveler == false){
                      show = true;
                  }

                  if(show == false){
                      return show
                  }

                  if(p.price <= 25.00){
                      if(!low){
                          show = false;
                      }
                  } else if(p.price > 25.00 && p.price <= 40.00){
                      if(!medium){
                          show = false;
                      }
                  } else if(p.price > 40.00){
                      if(!high){
                          show = false;
                      }
                  }

                  if(low == false && medium == false && high == false){
                      show = true;
                  }

                  if(show == false){
                      return show
                  }

                  if(popularity){
                      if(p.popularity > 4.7){
                          show = true;
                      } else {
                          return false;
                      }
                  }

                  if(bestSeller){
                      if(p.bestSeller){
                          show = true;
                      } else {
                          return false;
                      }
                  }

                  if(p.model == "flap"){
                      if(!flap){
                          show = false;
                      }
                  } else if(p.model == "zipper"){
                      if(!zipper){
                          show = false;
                      }
                  } else if(p.model == "clip"){
                      if(!clip){
                          show = false;
                      }
                  }

                  if(flap == false && zipper == false && clip == false){
                      show = true;
                  }

                  if(show == false){
                      return show
                  }

                  return show;
              };
          };
      };
  });


// Got code from https://embed.plnkr.co/q7pgHz/


/*


var showType = false;
if(document.getElementById("bi-fold").checked &&
p.type == "bi-fold"){
    showType = true;
}
if(!showType && document.getElementById("tri-fold").checked &&
p.type == "tri-fold"){
    showType = true;
}
if(!showType && document.getElementById("RFID").checked &&
p.type == "RFID"){
    showType = true;
}
if(!showType && document.getElementById("traveler").checked &&
p.type == "traveler"){
    showType = true;
}

var showPrice = false;
if(document.getElementById("low").checked && p.price <= 25.00){
    showPrice = true;
}
if(!showPrice && document.getElementById("medium").checked && (p.price >= 25.01 && p.price < 40.01)){
    showPrice = true;
}
if(!showPrice && document.getElementById("high").checked && p.price < 40.01){
    showPrice = true;
}

var showPop = false
if(document.getElementById("popular").checked && p.popularity > 4.6){
    showPop = true;
}

var showBestSeller = false;
if(document.getElementById("bestSeller").checked && p.bestSeller == false){
    showBestSeller = true;
}

var showModel = false;
if(document.getElementById("flap").checked && p.model != "flap"){
    showModel = true;
}
if(!showModel && document.getElementById("zipper").checked && p.model != "zipper"){
    showModel = true;
}
if(!showModel && document.getElementById("clip").checked && p.model != "clip"){
    showModel = true;
}
return showType && showPrice && showPop && showBestSeller && showModel











if ((p.type == "bi-fold") && (document.getElementById("bi-fold").checked)){
    show = true;
    if(document.getElementById("low").checked) && p.price > 25.00){
        show = false;
    }
    if(document.getElementById("medium").checked) && (p.price <= 25.00 || p.price > 40.00)){
        show = false;
    }
    if(document.getElementById("high").checked) && p.price <= 40.00)){
        show = false;
    }


}
if ((p.type == "tri-fold") && (document.getElementById("tri-fold").checked))
          show = true;
if ((p.type == "RFID") && (document.getElementById("RFID").checked))
          show = true;
if ((p.type == "traveler") && (document.getElementById("traveler").checked))
          show = true;
        return show;

*/

/*
  function filterInventory() {
    var filteredWallets = wallets;  //for now just return all JSON data in inventory.js

    //Max, here is where you need to put your code to filter the 965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH


    return filteredWallets;
  };

  function displayInventory() {
    var filteredInventory = filterInventory();
    $.each(filteredInventory, function (index, value) {

      $('#results').append('<div class = "row"><div class="col-sm-8">' +
      value.itemNumber + '</div><div class="col-sm-4">' + value.itemNumber +
      '</div></div>');
    });
  };

  displayInventory();
*/








// ABOVE IS MINE

// // JS CREDIT FOR TYPEWRITING ANIMATION: https://css-tricks.com/snippets/css/typewriter-effect/
// var TxtType = function(el, toRotate, period) {
//         this.toRotate = toRotate;
//         this.el = el;
//         this.loopNum = 0;
//         this.period = parseInt(period, 10) || 2000;
//         this.txt = '';
//         this.tick();
//         this.isDeleting = false;
//     };
//
//     TxtType.prototype.tick = function() {
//         var i = this.loopNum % this.toRotate.length;
//         var fullTxt = this.toRotate[i];
//
//         if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }
//
//         this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
//
//         var that = this;
//         var delta = 200 - Math.random() * 100;
//
//         if (this.isDeleting) { delta /= 2; }
//
//         if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 500;
//         }
//
//         setTimeout(function() {
//         that.tick();
//         }, delta);
//     };
//
//     window.onload = function() {
//         var elements = document.getElementsByClassName('typewrite');
//         for (var i=0; i<elements.length; i++) {
//             var toRotate = elements[i].getAttribute('data-type');
//             var period = elements[i].getAttribute('data-period');
//             if (toRotate) {
//               new TxtType(elements[i], JSON.parse(toRotate), period);
//             }
//         }
//         // INJECT CSS
//         var css = document.createElement("style");
//         css.type = "text/css";
//         css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//         document.body.appendChild(css);
//     };
