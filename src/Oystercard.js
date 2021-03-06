function Oystercard(){
  this.balance = 0;
  this.balanceCap = OYSTERCARD_CAP;
  this.travelling = false;
  this.journey = {};
  this.log = [];
}

const OYSTERCARD_CAP = 90;
const FARE = 1;

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

Oystercard.prototype.touchIn = function(station){
  if (this.balance < 1){
    throw new Error ('Card balance below mimimum to travel');
  } else {
    if (this.travelling === true){
      this.touchOut('penalty');
      this._appendJourneyToLog()
    }
    this.travelling = true;
    this.journey['in'] = station;
  }
};

Oystercard.prototype.touchOut = function(station){
  if (this.travelling === false) {
    this.touchIn('penalty');
  }
  this.travelling = false;
  this._deductFare();
  this.journey['out'] = station;
  this._appendJourneyToLog();
};

Oystercard.prototype._appendJourneyToLog = function(){
  this.log.push(this.journey);
  this.journey = {};
};

Oystercard.prototype._deductFare = function(){
  this.balance -= FARE;
};
