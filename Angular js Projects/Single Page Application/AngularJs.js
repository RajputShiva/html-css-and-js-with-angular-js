var app = angular.module("myModule", ['ngRoute']);

app.config(["$routeProvider",function($routeProvider) {
   $routeProvider.
   when("/teacher",{
      templateUrl:'AllViews/teachers.html',
      controller:'teacher_ctr'
   }).
   when("/student",{
      templateUrl:'AllViews/students.html',
      controller:'student_ctr'
   }).
   when("/course",{
     templateUrl:'AllViews/courses.html',
     controller:'course_ctr'
   }).
   when("/gallery",{
     templateUrl:'AllViews/gallery.html',
     controller:'gallery_ctr'
   }).
   otherwise({
     redirectTo:'index.html'
   });
}]);

  app.controller("teacher_ctr", function($scope) {
      $scope.teachers = [
        {name:'Shivaji Singh',age:27,qualification:'MCA'},
        {name:'Abhishek Srivastava',age:25,qualification:'MA'},
        {name:'Prabhat Pandey',age:26,qualification:'M.sc'},
        {name:'Golu Singh',age:23,qualification:'BA'},
        {name:'Arjun Pandey',age:24,qualification:'B.sc'},
      ];
  });

  app.controller("student_ctr", function($scope) {
    // create array
      $scope.students = 
      ["Shiavji Singh","Golu Singh","Shivam Pandey","Shivani Gupta","Abhishek Srivastava","Mukesh Singh","Roshan Varma"];
  });

  app.controller("course_ctr", function($scope) {
      // create array
      $scope.courses = 
      ["Web Desigining","Web Development","Asp.Net","Sql Server","Mysql","jQuery","JavaScript"];
  });

  app.controller("gallery_ctr", function($scope) {
      $scope.pic1 = "images/pic1.jpg";
      $scope.pic2 = "images/pic2.jpg";
      $scope.pic3 = "images/pic3.jpg";
      $scope.pic4 = "images/pic4.jpg";
  });
