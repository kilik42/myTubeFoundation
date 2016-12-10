angular.module('mytube').factory('tubeService', function($http){

      var query = '?part=snippet&maxResults=20&q=angular&type=video&&key=AIzaSyBDTInY_j75IO8q0EqeA19LY5NenFGAkRA';
      var url = 'https://www.googleapis.com/youtube/v3/search' + query;
      var tubeService = {
        getVids: function(){
          return $http.get(url).then(function(response){
            return response.data;
          });
        }


      };
        return tubeService;
        
});
