function MainController() {
  //define controller properties
  var vm = this;
  this.customer = {
    name: 'Antonio',
    phone: '555-1234',
    email: 'antonio@email.com'
  }
  this.year = '2016'
}

angular
  .module('app') //fetch existing module
  .controller('MainController', MainController); //attach controller to module