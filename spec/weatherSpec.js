describe("Weather", function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  })

  describe('the weather changes randomly', function(){
    it('is stormy', function(){
      spyOn(Math,'random').and.returnValue(1);
      expect(weather.isStormy()).toBeTruthy();
    })
    it('is not stormy', function(){
      spyOn(Math,'random').and.returnValue(0.1);
      expect(weather.isStormy()).toBeFalsy();
    })
  })
})
