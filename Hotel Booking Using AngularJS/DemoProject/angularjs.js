var app = angular.module("hotelApp", []);

app.controller("hotelController", function ($scope) {
  $scope.heartStyle = { color: "white" };
  $scope.roomCount = 9;

  $scope.toggleHeartColor = function () {
    if ($scope.heartStyle.color === "white") {
      $scope.heartStyle.color = "red";
    } else {
      $scope.heartStyle.color = "white";
    }
  };

  $scope.rooms = [
    {
      title: "AC Room Only",
      counter: 0,
      discount: "SUMMER25",
      showDiscount: false,
      price: "INR 14,000",
      discountedPrice: "10,500",
    },
    {
      title: "Non AC Room With Breakfast",
      counter: 0,
      discount: "SUMMER25",
      showDiscount: false,
      price: "INR 15,000",
      discountedPrice: "11,250",
    },
    {
      title: "AC Room With Breakfast & Dinner",
      counter: 0,
      discount: "SUMMER25",
      showDiscount: false,
      price: "INR 17,000",
      discountedPrice: "12,750",
    },
  ];

  $scope.toggleDiscount = function () {
    for (var i = 0; i < $scope.rooms.length; i++) {
      if ($scope.rooms[i].showDiscount) {
        $scope.rooms[i].showDiscount = false;
        $scope.rooms[i].price = "INR " + $scope.rooms[i].price.split(" ")[1];
      } else {
        $scope.rooms[i].showDiscount = true;
        $scope.rooms[i].price = "INR " + $scope.rooms[i].discountedPrice;
      }
    }
  };

  $scope.incrementCounter = function (room) {
    if (room.counter < 3) {
      room.counter++;
      $scope.roomCount--;
    }
  };

  $scope.decrementCounter = function (room) {
    if (room.counter > 0) {
      room.counter--;
      $scope.roomCount++;
    }
  };
});

