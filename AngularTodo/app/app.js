var todo = angular.module('todo',[]);

todo.controller('todoController',['$scope', function($scope){

    $scope.todos=[

    ];

    $scope.add = function(){
        $scope.todos.push({'title':$scope.newTodo,'done':false});
        $scope.newTodo = ''
    };

    $scope.clear = function(){
        $scope.todos = $scope.todos.filter(function(item){
            return !item.done
        });
    };
}]);