describe("Airport", function(){
  var airport;
  var plane1;
  var weather;

  beforeEach(function(){
    airport = new Airport();
    plane1  = new Plane();
    weather = new Weather();
  })

  describe('planes land at airport', function(){
    it('lets a plane park', function(){
      airport.land(plane1);
      expect(airport.parkedPlanes.pop()).toEqual(plane1);
      expect(plane1.status).toEqual(true);
    })
  })

  describe('planes take off from airport', function(){
    it('lets a plane takes off', function(){
      airport.land(plane1);
      airport.takeOff();
      expect(airport.parkedPlanes.length).toEqual(0);
    })
  })

  describe('under stormy conditions', function(){
    it('prevents the plane from landing', function(){
      weather.isStormy.and.returnValue(true);
      expect(function(){airport.land(plane1);}).toThrowError('cannot land: weather is stormy');
    })
  })

})
