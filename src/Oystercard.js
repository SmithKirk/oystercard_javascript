function Oystercard(){
  this.balance = 0;

}

Oystercard.prototype.topUp = function(amount){
  this.balance = amount;
};
