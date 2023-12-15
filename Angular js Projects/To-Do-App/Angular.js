let myApp = angular.module("myApp", []);
myApp.controller("myController", function($scope) {

    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.message = "";

    $scope.users = [
        {username: "shivaji", fullName: "Shivaji Singh", email: "shivaji@gmail.com"},
        {username: "sonu", fullName: "Sonu Singh", email: "sonu@gmail.com"},
        {username: "shivam", fullName: "Shivam Singh", email: "shivam@gmail.com"}
    ];

    $scope.saveUser = function(){
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added Successfully";
    };

    $scope.selectUser = function(user){
        $scope.clickedUser = user;
    };

    $scope.updateUser = function(){
        $scope.message = "User Updated Successfully";
    };

    $scope.deleteUser = function(){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.message = "User Deleted Successfully";
    };

    $scope.clearMessage = function(){
        $scope.message = "";
    };
});