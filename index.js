var customerName = 'bob';
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declaring a global variable
}
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value';
}
