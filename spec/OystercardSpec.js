describe ('Oystercard', function(){

  var oystercard;
  var station;

  beforeEach(function(){
    oystercard = new Oystercard();
  });

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

    it('will have an empty journey object', function(){
      expect(oystercard.journey).toEqual({});
    });

    it('will have an empty log array', function(){
      expect(oystercard.log).toEqual([]);
    });

  });

  describe('#topUp', function(){
    beforeEach(function(){
      oystercard.topUp(90);
    });

    it('will add top amount to balance', function(){
      expect(oystercard.balance).toEqual(90);
    });

    it('will not exceed maximum balance', function(){
      expect(function(){oystercard.topUp(1);}).toThrowError('Card balance is already at maximum');
    });
  });

  describe('#editBalanceCap', function(){
    it('will change balance cap', function(){
      oystercard.editBalanceCap(50);
      expect(oystercard.balanceCap).toEqual(50);
    });
  });

  describe('#deductFare', function(){
    beforeEach(function(){
      oystercard.balance = 90;
    });

    it('will deduct fare from balance', function(){
      oystercard._deductFare();
      expect(oystercard.balance).toEqual(89);
    });
  });

  describe('Travelling', function(){
    beforeEach(function(){
      oystercard.balance = 90;
    });

    describe('#touchIn', function(){
      it('will change travelling to true', function(){
        oystercard.touchIn();
        expect(oystercard.travelling).toEqual(true);
      });

      it('will raise error if balance is below the minimum to travel', function(){
        oystercard.balance = 0;
        expect(function(){oystercard.touchIn();}).toThrowError('Card balance below mimimum to travel');
      });

      it('will store entry station on touch in', function(){
        oystercard.touchIn('Oval');
        expect(oystercard.journey).toEqual(jasmine.objectContaining({'in': 'Oval'}));
      });

      it('will show a penalty if previous journey was not completed', function(){
        oystercard.touchIn('Waterloo');
        oystercard.touchIn('Tower Hill');
        expect(oystercard.log).toEqual(jasmine.objectContaining([{'in': 'Waterloo', 'out': 'penalty'}]));
      });
    });

    describe('#touchOut', function(){
      it('will change travelling to false', function(){
        oystercard.touchOut();
        expect(oystercard.travelling).toEqual(false);
      });

      it('will deduct fare on touch out', function(){
        oystercard.touchIn();
        oystercard.touchOut();
        expect(oystercard.balance).toEqual(89);
      });

      it('will store completed journey in log', function(){
        oystercard.touchIn('Oval');
        oystercard.touchOut('Bank');
        oystercard.touchIn('Holborn');
        oystercard.touchOut('Bakerloo');
        expect(oystercard.log).toEqual(jasmine.objectContaining(
          [{'in': 'Oval','out': 'Bank'},
        {'in': 'Holborn','out': 'Bakerloo'}]));
      });

      it('will show a penalty if there is no "in" station', function(){
        oystercard.touchOut('Bank');
        expect(oystercard.log).toEqual(jasmine.objectContaining([{'in': 'penalty', 'out': 'Bank'}]));
      });
    });
  });


});
