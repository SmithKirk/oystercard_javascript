describe ('Oystercard', function(){
  var oystercard;

  describe('Initialize', function(){

    it('will have a balance of 0', function(){
      oystercard = new Oystercard;
      expect(oystercard.balance).toEqual(0)
    })
  })
});
