describe("Plane", function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  describe('the plane is in the air before landing', function(){
    it('airborne', function(){
      expect(plane.status).toEqual(false);
    })
  })
})
