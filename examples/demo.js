'use strict';

var app = angular.module('demo-graph', ['graph']);

app.controller('DemoCtrl', function ($scope){
    $scope.randomizeData = function () {
      var values = [
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
        Math.random() * 10, 
      ];
      var baseDate = 1357714800000 * Math.random ();
      var dates = [
        baseDate,
        baseDate + 100000,
        baseDate + 200000,
        baseDate + 300000,
        baseDate + 400000,
        baseDate + 500000,
        baseDate + 600000,
        baseDate + 700000,
        baseDate + 800000,
        baseDate + 900000,
        baseDate + 1000000,
        baseDate + 1100000,
      ];
     $scope.data = [{
            type: 'x',
            name: 'Debiet',
            values: values,
            unit: "m/s"
          },
          {
            type: 'y',
            name: 'Time',
            values: dates,
            unit: "hr:min"
          }];
  };

  $scope.randomizeData();

  $scope.malformData = function () {
    $scope.formatted_data = [[2]];
  };
  
  $scope.$watch('data', function () {
    if ($scope.data){
      $scope.format_data($scope.data);    
    }
  });

  $scope.format_data = function(data) {
    $scope.formatted_data = [];
    for (var i=0; i<data[0].values.length; i++){
      var xyobject = {
        date: data[1].values[i], 
        value: data[0].values[i] 
      };
      $scope.formatted_data.push(xyobject);
    };
  };
});