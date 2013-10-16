'use strict';

var app = angular.module('demo-graph', ['graph']);

app.controller('DemoCtrl', function ($scope){
    $scope.randomizeData = function () {
      var values = [
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
        Math.random() * 100, 
      ];
      var baseDate = 1357714800000 - 2000000 * Math.random ();
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
     var data = [{
            type: 'y',
            name: 'Debiet',
            values: values,
            unit: "m/s"
          },
          {
            type: 'x',
            name: 'Time',
            values: dates,
            unit: "hr:min"
          }];
      return data
  };

  $scope.updateData = function () {
    $scope.data1 = $scope.randomizeData();
    $scope.data2 = $scope.randomizeData();
    $scope.data2line = $scope.data1;
    $scope.data2line.push($scope.data2[0])
    $scope.data2line.push($scope.data2[1])
  };
  $scope.updateData();
  
  $scope.malformData = function () {
    $scope.data1 = [[2]];
  };
  
  $scope.$watch('data1', function () {
    if ($scope.data1){

      $scope.formatted_data1 = $scope.format_data($scope.data1);
      $scope.formatted_data2 = $scope.format_data($scope.data2);
      $scope.formatted_2line = $scope.format_2linedata($scope.data2line);
      // console.log($scope.data2line);
    }
  });

  $scope.format_data = function(data) {
    var formatted_data = [];
    for (var i=0; i<data[0].values.length; i++){
      var xyobject = {
        date: data[1].values[i], 
        value: data[0].values[i] 
      };
      formatted_data.push(xyobject);
    };
    return formatted_data
  };

  $scope.format_2linedata = function(data) {
    var formatted_data = [];
    for (var i=0; i<data[0].values.length; i++){
      var xyobject = {
        date: data[1].values[i], 
        value: data[0].values[i],
        date2: data[3].values[i],
        value2: data[2].values[i] 
      };
      formatted_data.push(xyobject);
    };
    return formatted_data
  };



});