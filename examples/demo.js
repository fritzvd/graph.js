'use strict';

var app = angular.module('demo-graph', ['graph']);

app.controller('DemoCtrl', function ($scope){
    var data = [{
        type: 'x',
        name: 'Debiet',
        values: [0.13, 0.3, 0.5],
        unit: "m/s"
      },
      {
        type: 'y',
        name: 'Time',
        values: [1357714800000, 1357914800000, 1358014800000],
        unit: "hr:min"
      }];

  $scope.format_data = function() {
    $scope.formatted_data = [];
    for (var i=0; i<data[0].values.length; i++){
      xyobject = {
        date: data[1].values[i], 
        value: data[0].values[i] 
      };
      $scope.formatted_data.push(xyobject);
    };
    return $scope.formatted_data
  };
});