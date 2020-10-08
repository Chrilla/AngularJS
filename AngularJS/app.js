var app = angular.module("steezer", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/store.html",
        controller: "userController"
    })
})

app.controller("userController", function($scope) {
    $scope.users = [
        { title: '"Best site for mountainbiking"', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor", user: "Darren Berrecloth" },
        { title: '"Incredible"', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor", user: "Bernard Kerr" },
        { title: '"Most complete biking site"', text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor", user: "Brett Rheeder" },
    ]
})

app.directive("navbar", function() {
    return {
        template: '<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><img src="/images/Steezer.png" width="170" height="40" alt=""><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav mr-auto"><li class="nav-item active"><a class="nav-link ml-5 pr-3 pl-3" href="#">HOME</a></li><li class="nav-item active"><a class="nav-link pr-3 pl-3" href="#/!">STORE</a></li><li class="nav-item active"><a class="nav-link pr-3 pl-3" href="#!forum">FORUM</a></li><li class="nav-item active"><a class="nav-link pr-3 pl-3" href="#!marketplace">MARKETPLACE</a></li></ul><form class="form-inline my-2 my-lg-0"><i class="fas fa-shopping-cart mr-3"></i><i class="fas fa-user mr-3"></i><input class="form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search"><i class="fab fa-facebook-f ml-2 mr-3"></i><i class="fab fa-instagram mr-3"></i><i class="fab fa-twitter"></i></form></div></nav>'
    }
})

app.directive("content", function() {
    return {
        template: '<div class="content d-flex align-items-center"><h1>NEWS/CONTENT</h1></div>'
    }
})