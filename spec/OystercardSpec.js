describe ('Oystercard', function(){
  var oystercard = new Oystercard();


  describe('#initialize', function(){
    it('will have a balance of 0', function(){
      expect(oystercard.balance).toEqual(0);
    });

    it('will have a default balance cap', function(){
      expect(oystercard.balanceCap).toEqual(OYSTERCARD_CAP);
    });

    it('will have travelling set to false', function(){
      expect(oystercard.travelling).toEqual(false);
    });
  });

  describe('#topUp', function(){
    it('will add top amount to balance', function(){
      oystercard.topUp(5);
      expect(oystercard.balance).toEqual(5);
    });

    it('will not exceed maximum balance', function(){
      oystercard.topUp(90);
      expect(function(){oystercard.topUp(1)}).toThrowError('Card balance is already at maximum');
    });
  });

  describe('#editBalanceCap', function(){
    it('will change balance cap', function(){
      oystercard.editBalanceCap(50);
      expect(oystercard.balanceCap).toEqual(50);
    });
  });

  describe('#deductFare', function(){
    it('will deduct fare from balance', function(){
      // oystercard.topUp(20);
      oystercard.deductFare();
      expect(oystercard.balance).toEqual(89);
    });
  });

  describe('#touchIn', function(){
    it('will change travelling to true', function(){
      oystercard.touchIn();
      expect(oystercard.travelling).toEqual(true);
    });
  });

  describe('#touchOut', function(){
    it('will change travelling to false', function(){
      oystercard.touchOut();
      expect(oystercard.travelling).toEqual(false);
    });
  });
});
