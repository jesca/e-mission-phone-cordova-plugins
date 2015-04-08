angular.module('starter.controllers', [])

/*.controller('TripsCtrl', function($scope, Trips) {
  $scope.trips = Trips.all();
})

.controller('TripDetailCtrl', function($scope, $stateParams, Trips) {
  $scope.trip = Trips.get($stateParams.tripId);
})*/

.controller("NamesCtrl", function($scope) {
    //DATA: Gautham, this is where you link the data.
    $scope.names = [
        {mode:'walking',confidence:1},
        {mode:'car',confidence:0.5},
        {mode:'walking',confidence:1},
        {mode:'cycling',confidence:0.3},
        {predictedMode:'cycling',confidence:0.3}
    ];

    $scope.pickImage = function(item){
        if (item.mode == null) {
            var item_mode = item.predictedMode;
        } else {
            var item_mode = item.mode;
        }

        if (item_mode == 'walking') {
            item.img = '../img/walking.svg';
            return 'walking.jpg';
        } if (item_mode == 'car') {
            item.img = '../img/car.svg';
            return 'car.jpg';
        } if (item_mode == 'cycling') {
            item.img = '../img/cycling.svg';
            return 'cycling.jpg';
        } if (item_mode == 'air') {
            item.img = '../img/air.svg';
            return 'air.jpg';
        } if (item_mode == 'bus') {
            item.img = '../img/bus.svg';
            return 'bus.jpg';
        } if (item_mode == 'train') {
            item.img = '../img/train.svg';
            return 'train.jpg';
        }
    };

    //Change according to datatype in actual data object and the intervals set in the app. 
    // Intervals: Green - confidence > 80 ; Yellow: 80 > confidence > 70; Red: 70 > confidence
    $scope.pickColor = function(item){
        if (item.confidence >= 0.9) {
            return "color : green";
        } else if (item.confidence >= 0.7) {
            return "color : orange";
        } else {
            return "color : red";
        }
    };

    // I don't think anything after this line is getting executed. Why is that?
    tripSectionDbHelper.getJSON({name: "TripSections.db"}, function(jsonTripList){
        alert("this is actually happening");
        console.log("testing other things");
        $scope.names = tripSectionDbHelper.getUncommittedSections(jsonTripList);
        console.log("trips have been loaded");
    });

    alert("this is actually happening");
    // $scope.tripList = dbHelper.getUncommittedSections();
})

.controller('ListCtrl', function($scope) {
  $scope.id = "10001";
  $scope.message = "This works!"
  $scope.cool = function() {
    $scope.message = "I've been clicked!"
  };
});
