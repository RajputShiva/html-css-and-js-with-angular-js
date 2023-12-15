angular.module('myApp', []) // Define an AngularJS module named 'myApp'
.controller('myController', function ($scope) { // Create a controller named 'myController'
    $scope.shopColor = 'white';
    $scope.reviewColor = 'white';
    $scope.blogColor = 'white';
    $scope.contactColor = 'white';
    $scope.barClass = 'fa-solid fa-bars';

    $scope.shops = function () { // Define a function for the 'shops' action
        $scope.shopColor = 'rgb(0, 196, 196)'; // Change the color for 'shops'
        $scope.reviewColor = 'white';
        $scope.blogColor = 'white';
        $scope.contactColor = 'white';
    };

    $scope.reviews = function () { // Define a function for the 'reviews' action
        $scope.reviewColor = 'rgb(0, 196, 196)'; // Change the color for 'reviews'
        $scope.shopColor = 'white';
        $scope.blogColor = 'white';
        $scope.contactColor = 'white';
    };

    $scope.blogs = function () { // Define a function for the 'blogs' action
        $scope.blogColor = 'rgb(0, 196, 196)'; // Change the color for 'blogs'
        $scope.reviewColor = 'white';
        $scope.shopColor = 'white';
        $scope.contactColor = 'white';
    };

    $scope.contacts = function () { // Define a function for the 'contacts' action
        $scope.contactColor = 'rgb(0, 196, 196)'; // Change the color for 'contacts'
        $scope.reviewColor = 'white';
        $scope.blogColor = 'white';
        $scope.shopColor = 'white';
    };

    $scope.toggleNav = function () { // Function to toggle the navigation menu
        if ($scope.showData) { // If the navigation menu is shown, hide it
            $scope.showData = false;
            $scope.barClass = 'fa-solid fa-bars';
        } else { // If the navigation menu is hidden, show it
            $scope.showData = true;
            $scope.barClass = 'fa-solid fa-xmark';
        }
    };

    $scope.itemPageVisible = false; // Initialize itemPage visibility to false
    $scope.showItemPage = function () { // Function to show the item page
        $scope.itemPageVisible = true;
        $scope.containerVisible = false;
        let imgSrc = this.curValue.firstElementChild.src;
        $scope.pageImgSrc = imgSrc;
    };

    $scope.showContainer = function () { // Function to show the main container
        $scope.itemPageVisible = false;
        $scope.containerVisible = true;
    };

    $scope.submitOrder = function () { // Function to submit the order
        let name = document.getElementById("name");
        let address = document.getElementById("address");
        let num = document.getElementById("num");

        if (name.value === "" || address.value === "" || num.value === "") {
            alert("Please enter all required details.");
        } else {
            alert("Your order has been placed.");
            $scope.showContainer();
        }
    };

    $scope.connect = function () { // Function to connect
        let name = document.getElementById("name");
        let num = document.getElementById("number");

        if (name.value === "" || num.value === "") {
            alert("Please fill in your details.");
        } else {
            alert("Thanks for connecting.");
        }
    };
});
