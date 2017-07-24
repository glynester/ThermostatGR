$(document).ready(function(){
  thermostat = new Thermostat();
  thermostat.turnOn();
  sliderInit(); // Must be above showTemp() "Error: cannot call methods on slider prior to initialization; "
  showTemp();

  $("#increase_temp").click(function(){
    thermostat.turnUp();
    showTemp();
    showMessage();
  })

  $("#decrease_temp").click(function(){
    thermostat.turnDown();
    showTemp();
    showMessage();
  })

  $("#Power_save_mode").click(function(){
    if (thermostat.psm == true){
      thermostat.psmOff();
      $("#Power_save_mode").html("PSM OFF");
    } else {
      thermostat.psmOn();
      $("#Power_save_mode").html("PSM ON");
      if (thermostat.temp> thermostat.MAXTEMP_WITH_PSM){
        thermostat.temp = thermostat.MAXTEMP_WITH_PSM
      }
    }
    showMessage();
    // updateSliderScale();
    showTemp();

  })

  $("#reset").click(function(){
    thermostat.reset();
    showTemp();
  })

function showMessage(){
  if ((thermostat.psm && thermostat.temp == thermostat.MAXTEMP_WITH_PSM) ||
  (!thermostat.psm && thermostat.temp == thermostat.MAXTEMP_WITHOUT_PSM)){
    $("#message").text("Maximum temperature has been reached").fadeIn('fast').delay(750).fadeOut();
  } else if (thermostat.temp == thermostat.MINTEMP){
    $("#message").text("Minimum temperature has been reached").fadeIn('fast').delay(750).fadeOut();
  } else $("#message").text("");

}

function showTemp(){
  $("#temperature").val(thermostat.temp);
  thermostat.getUsage();
  $("#temperature").attr('class',thermostat.usage);
  updateSliderTemp();       //Added!!!
}

$("#increase_temp").mousedown(function(){
    timeout = setInterval(function(){
        thermostat.turnUp();
        showTemp();
    }, 400);
    return false;
});

$("#decrease_temp").mousedown(function(){
    timeout = setInterval(function(){
        thermostat.turnDown();
        showTemp();
    }, 400);
    return false;
});

$(document).mouseup(function(){
    // clearInterval(timeout);
    if (timeout) {clearInterval(timeout);}
    return false;
});

// $(".slider").slider().slider("pips");

function sliderInit(){    // initialise the slider, and pips first
$(".slider")
    .slider({
        min: thermostat.MINTEMP,
        max: thermostat.MAXTEMP_WITHOUT_PSM,
        // orientation: "vertical"
    })
    .slider("pips", {
        // labels: { "first": "Min", "last": "Max" },
        rest: "label",
        step: "2",
        suffix: "°c"
    });
}

function updateSliderTemp(){
  // console.log($(".slider").slider("value"));    // This is working!!!
  $(".slider").slider("value",thermostat.temp)
}


$(".slider").on("slidechange", function(e,ui) {
        $("#temperature").val(ui.value);
    });

// then change an option, and refresh the pips
// function updateSliderScale(){
  // console.log("updateSliderScale() function run!!!");
  // $(".slider")
  //   .slider("option", "max", thermostat.maxTemp )
  //   // $("#slider").slider('option',{min: 0, max: 500});
  //   .slider("pips", "refresh");
// }



});
