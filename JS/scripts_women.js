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
                var pocket = document.getElementById("pocket").checked;
                var long = document.getElementById("long").checked;
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

                if(p.type == "pocket"){
                    if(!pocket){
                        show = false;
                    }
                } else if(p.type == "long"){
                    if(!long){
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

                if(pocket == false && long == false && rfid == false && traveler == false){
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
