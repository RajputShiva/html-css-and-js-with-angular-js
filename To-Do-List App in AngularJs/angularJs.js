var myApp = angular.module("myList", []);
myApp.controller("myListController", function ($scope) {
  // Check if there are items stored in local storage
  var storedItems = localStorage.getItem("items");
  $scope.items = storedItems ? JSON.parse(storedItems) : [""];

  $scope.newItem = "";

  $scope.pushItem = function () {
    if ($scope.newItem === '') {
      alert('You must write something!');
    } 
    else {
      $scope.items.push($scope.newItem);
      $scope.newItem = "";
      // Update local storage with the new data
      localStorage.setItem("items", JSON.stringify($scope.items));
    }
  };

  $scope.deleteItem = function (index) {
    $scope.items.splice(index, 1);
    // Update local storage after deleting an item
    localStorage.setItem("items", JSON.stringify($scope.items));
  };
});
