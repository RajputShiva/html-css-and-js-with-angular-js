var app = angular.module("hotelApp", []);

app.controller("hotelController", function ($scope) {

  // heart colorchange logic
  $scope.heartStyle = { color: "white" };
  $scope.roomCount = 9;

  $scope.toggleHeartColor = function () {
    if ($scope.heartStyle.color === "white") {
      $scope.heartStyle.color = "red";
    } else {
      $scope.heartStyle.color = "white";
    }
  };

  // array of object for every room details logic
  $scope.rooms = [
    {
      title: "AC Room Only",
      counter: 0,
      discount: "SUMMER25",
      showDiscount: false,
      price: "₹ 14,000/night",
      discountedPrice: "10,500/night",
      originalPrice: "14,000",
    },
    {
      title: "Non AC Room With Breakfast",
      counter: 0,
      discount: "SUMMER25",
      showDiscount: false,
      price: "₹ 15,000/night",
      discountedPrice: "11,250/night",
      originalPrice: "15,000",
    },
    {
      title: "AC Room With Breakfast & Dinner",
      counter: 0,
      discount: "SUMMER25",
      showDiscount: false,
      price: "₹ 17,000/night",
      discountedPrice: "12,750/night",
      originalPrice: "17,000",
    },
  ];

  
  // discount property logic
  $scope.toggleDiscount = function () {
    for (var i = 0; i < $scope.rooms.length; i++) {
      if ($scope.rooms[i].showDiscount) {
        $scope.rooms[i].showDiscount = false;
        $scope.rooms[i].price = "₹ " + $scope.rooms[i].originalPrice + "/night";
      } else {
        $scope.rooms[i].showDiscount = true;
        $scope.rooms[i].price = "₹ " + $scope.rooms[i].discountedPrice;
      }
    }
  };

  // increment and decrement logic
  $scope.incrementCounter = function (index) {
    if ($scope.rooms[index].counter < 3) {
      $scope.rooms[index].counter++;
      $scope.roomCount--;
    }
  };
  
  $scope.decrementCounter = function (index) {
    if ($scope.rooms[index].counter > 0) {
      $scope.rooms[index].counter--;
      $scope.roomCount++;
    }
  };
});