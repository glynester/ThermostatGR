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

});
