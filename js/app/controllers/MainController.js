function MainController($scope) {
  //define controller properties
  $scope.customer = {
    name: 'Antonio',
    phone: '555-1234',
    email: 'antonio@email.com'
  }
  $scope.year = '2016'
}

angular
  .module('app') //fetch existing module
  .controller('MainController', MainController); //attach controller to module