

function Transaction(transactionArray) {

  if (transactionArray) {
    console.log("transaction constructor 1 " + transactionArray);
    this.transactionArray = JSON.parse(transactionArray);
  } else {
    console.log("transaction constructor 2 " + transactionArray);
    this.transactionArray = [];
  }
  console.log("transaction constructor 3 " + this.transactionArray);

}
Transaction.prototype.getDateForIndex = function(index) {
  return this.transactionArray[index].date;
}
Transaction.prototype.getNameForIndex = function(index) {
  return this.transactionArray[index].name;
}
Transaction.prototype.getValueForIndex = function(index) {
  return this.transactionArray[index].value;
}
Transaction.prototype.putNewTransaction = function(name, value) {
  this.transactionArray.push({name:name, value:value, date:new Date()});
}
Transaction.prototype.getTransactionsLength = function()
{
  return this.transactionArray.length;
}
Transaction.prototype.getTransactionArray = function()
{
  return this.transactionArray;
}
module.exports = Transaction;
