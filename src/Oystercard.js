function Oystercard(){
  this.balance = 0;
  this.balanceCap = OYSTERCARD_CAP;
  this.travelling = false;

}

const OYSTERCARD_CAP = 90;

Oystercard.prototype.topUp = function(amount){
  if (this.balance == 90) {
    throw new Error ('Card balance is already at maximum');
  } else {
    this.balance = amount;
  }
};

Oystercard.prototype.editBalanceCap = function(newCap){
  this.balanceCap = newCap;
};

Oystercard.prototype.deductFare = function(){
  this.balance -=1;
};

Oystercard.prototype.touchIn = function(){
  this.travelling = true;
};

Oystercard.prototype.touchOut = function(){
  this.travelling = false;
};
