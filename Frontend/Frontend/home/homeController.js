var globalsettings = {
    apiUrl: 'http://localhost:57792/'
};

app.controller('homeController', ['$scope', '$http', function ($scope, $http) {
    $scope.exercises = [];





    $scope.getPerson = function (firstName) {
        
        var url = globalsettings.apiUrl + '/getPersonByName/' + firstName;
        $http({
            method: 'GET',
            url: url
        }).then(function successCallback(response) {           
            $scope.firstName = response.data.firstName;
            $scope.surName = response.data.surName;
            $scope.email = response.data.email;            
            
        }, function errorCallback(response) {
            
        });        
    };
}]);