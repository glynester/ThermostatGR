describe("Thermostat", function() {
  var temp;

beforeEach(function() {
  thermostat = new Thermostat();
  thermostat.turnOn();
});

  it("should have a starting temp of 20c", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("should increase the temp by 1 when the up function is run", function(){
    thermostat.turnUp();
    expect(thermostat.temp).toEqual(21);
  });

  it("should decrease the temp by 1 when the down function is run", function (){
    thermostat.turnDown();
    expect(thermostat.temp).toEqual(19);
  });

  it("should have a minimum temp of 10c", function(){
    for (var i=1;i<=15; i++){
      thermostat.turnDown();
    }
    expect(thermostat.temp).toEqual(10);
  });


});
