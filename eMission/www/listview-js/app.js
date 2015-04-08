// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
    /*
    var db = $cordovaSQLite.openDB({name: "TripSections.db"});
    var query = "SELECT Count(id) AS count FROM currTrips";
    $cordovaSQLite.execute(db, query).then function(result) {
        if (result.rows.item(0).count > 0) {
            alert("database has "+result.rows.item(0)+" rows");
        } else {
            alert("0 rows");
        }
    }
    tripSectionDbHelper.getJSON({name: "TripSections.db"}, function(jsonTripList){
        alert("this is actually happening");
        console.log("testing other things");
        $scope.trips = tripSectionDbHelper.getUncommittedSections(jsonTripList);
        console.log($scope.trips.length + "trips have been loaded");
    });
    */
  });
})

