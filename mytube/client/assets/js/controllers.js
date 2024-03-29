angular.module('mytube').controller('homeController', function($scope, tubeService, $state, $stateParams){

  $scope.vidList = function(){
    tubeService.getVids().then(function(data){

      var vidArr = [];
      for (var i = data.items.length -1; i>=0; i--){
        vidArr.push({
          id:data.items[i].id.videoId,
          title: data.items[i].snippet.title,
          description: data.items[i].snippet.description,
          thumbnail: data.items[i].snippet.thumbnails.default.url
        });
      }
        $scope.videos = vidArr;
    }, function(){
      $scope.videos = "could not find videos";
      console.log($scope.videos);
    });
  }



});
