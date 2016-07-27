describe ('Oystercard', function(){
  var oystercard;

  describe('#initialize', function(){

    it('will have a balance of 0', function(){
      oystercard = new Oystercard();
      expect(oystercard.balance).toEqual(0);
    });
  });

  describe('#topUp', function(){
    it('will add top amount to balance', function(){
      oystercard = new Oystercard();
      oystercard.topUp(5);
      expect(oystercard.balance).toEqual(5);
    });
  });
});
