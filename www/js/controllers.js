angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.result = "";
  $http.get('https://aberdeenmosque.org/PrayerTimesApi/todaysprayertimes')
    .success(function(data, status, headers,config){
      console.log('data success');
      console.log(data); // for browser console
      $scope.result = data; // for UI
    })
    .error(function(data, status, headers,config){
      console.log('data error');
    })
    .then(function(result){
      things = result.data;
    });
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('EventsCtrl', function($scope, $stateParams, Chats) {
  $scope.events = Events.get($stateParams.eventsId);
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
