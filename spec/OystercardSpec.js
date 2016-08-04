describe ('Oystercard', function(){
  var oystercard = new Oystercard();


  describe('#initialize', function(){
    it('will have a balance of 0', function(){
      expect(oystercard.balance).toEqual(0);
    });

    it('will have a default balance cap', function(){
      expect(oystercard.balanceCap).toEqual(OYSTERCARD_CAP)
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
});
