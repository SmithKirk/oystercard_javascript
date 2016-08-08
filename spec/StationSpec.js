describe('Station', function(){

var station;

beforeEach(function(){
  station = new Station('Bank', 1);
});

  describe('#initialize', function(){
    it('will have a name', function(){
      expect(station.name).toEqual('Bank');
    });

    it('will have a zone', function(){
      expect(station.zone).toEqual(1);
    });
  });

});
