var globalsettings = {
    apiUrl: 'http://localhost:57792/'
};

app.controller('workoutController', ['$scope', '$http', function ($scope, $http) {
    $scope.exercises = [
        {
            date: "24.09.2017",
            type : "Chest Day",
            workout: [
                {
                    exerciseType: "Bench",
                    exercise: [
                {                    
                    set: "1",
                    reps: "8",
                    weight: "100"
                },
                {                    
                    set: "2",
                    reps: "8",
                    weight: "105"
                }

                    ]
                },
                {
                    exerciseType: "Flies",
                    exercise: [
                {
                    set: "1",
                    reps: "8",
                    weight: "20"
                },
                {
                    set: "2",
                    reps: "8",
                    weight: "25"
                }

                    ]
                }
            ]
        },
        {
            date: "19.09.2017",
            type: "Leg Day",
            workout: [
                {
                    exerciseType: "Squat",
                    exercise: [
                {
                    set: "1",
                    reps: "8",
                    weight: "100"
                },
                {
                    set: "2",
                    reps: "8",
                    weight: "105"
                }

                    ]
                },
                {
                    exerciseType: "Leg Curl",
                    exercise: [
                {
                    set: "1",
                    reps: "8",
                    weight: "20"
                },
                {
                    set: "2",
                    reps: "8",
                    weight: "25"
                }

                    ]
                }
            ]
        }
    ];
    $scope.showExercise = function (toggle) {
        $scope.show = true;
    };
    $scope.addExercise = function (exercise) {
        var e = {name : exercise}
        $scope.exercises.push(e);
    }

}]);