describe("Thermostat", function() {
  var temp;

beforeEach(function() {
  thermostat = new Thermostat();
  thermostat.turnOn();
});

  it("should have a starting temp of 20c", function() {
    expect(thermostat.temp).toEqual(20);
  });

});
