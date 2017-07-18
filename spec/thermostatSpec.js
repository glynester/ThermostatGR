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

  it("should hava a maximum temp of 25, with power save mode on", function(){
    thermostat.psmOn();
    for (var i=1;i<=15; i++){
      thermostat.turnUp();
    }
    expect(thermostat.temp).toEqual(25);
  });

  it("should have a maximum temp of 32, with power save mode off",function(){
    thermostat.psmOff();
    for (var i=1;i<=15; i++){
      thermostat.turnUp();
    }
    expect(thermostat.temp).toEqual(32);
  });

  it("should have psm mode on by default", function(){
    expect(thermostat.psm).toEqual(true);
  })

  it("shold reset temp to 20 when reset is activated", function(){
    for (var i=1;i<=15; i++){thermostat.turnUp();}
    for (var i=1;i<=3; i++){thermostat.turnDown();}
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  });

  it("should return the energy usage", function(){
    for (var i=1;i<=5; i++){thermostat.turnDown();}
    thermostat.getUsage();
    expect(thermostat.usage).toEqual("low");
    for (var i=1;i<=7; i++){thermostat.turnUp();}
    thermostat.getUsage();
    expect(thermostat.usage).toEqual("medium");
    for (var i=1;i<=7; i++){thermostat.turnUp();}
    thermostat.getUsage();
    expect(thermostat.usage).toEqual("high");
  })


});
