$(document).ready(function(){
  thermostat = new Thermostat();
  thermostat.turnOn();
  $("#temperature").val(thermostat.temp);
  $("#increase_temp").click(function(){
    thermostat.turnUp();
    $("#temperature").val(thermostat.temp);
  })
  $("#decrease_temp").click(function(){
    thermostat.turnDown();
    $("#temperature").val(thermostat.temp);
  })
  $("#Power_save_mode").click(function(){
    if (thermostat.psm == true){
      thermostat.psmOff();
    } else {
      thermostat.psmOn();
      if (thermostat.temp> thermostat.MAXTEMP_WITH_PSM){
        thermostat.temp = thermostat.MAXTEMP_WITH_PSM
      }
    }


    $("#temperature").val(thermostat.temp);
  })




});
