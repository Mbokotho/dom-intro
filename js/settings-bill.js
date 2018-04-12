// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
var billItemTypeRadio =document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillSettingsAddBtn = document.querySelector(".radioBillSettingsAddBtn");

var callTotalSettingsElement= document.querySelector(".callTotalSettings");
var smsTotalSettingsElement =document.querySelector(".smsTotalSettings");
var totalSettingsElement =document.querySelector(".totalSettings");
var smsCostSetting = document.querySelector(".smsCostSetting");
var callCostSetting=document.querySelector(".callCostSetting");
//create a variable that will keep track of the total bill
var callRadio = 0;
var smsRadio = 0;
var totalRadio = 0;

//add an event listener for when the add button is pressed
radioBillSettingsAddBtn.addEventListener('click', radioSettingsBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screenfunction textBillTotal(){
   // get the value entered in the billType textfield
   function radioSettingsBillTotal(){
      // get the value entered in the billType textfield
      var CheckedRadioBtn = document.querySelector("input[name='billItemTypeSettings']:checked");
if (CheckedRadioBtn){
    var billItemTyperadio = CheckedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
}
  if(billItemTyperadio === "call"){
          callRadio += 0.55;
      }
      else if (billItemTyperadio === "sms"){
          smsRadio += 2 ;
      }

      //update the totals that is displayed on the screen.
      callTotalSettingsElement.innerHTML = callRadio;
      smsTotalSettingsElement.innerHTML = smsRadio;
      totalSettingsElement.innerHTML = totalRadio;
      totalRadio = callRadio + smsRadio;
}
    /*  if (totalRadio >= 50){
              // adding the danger class will make the text red
              totalSettings.classList.add("danger");
          }
          else if (totalRadio >= 30){
              totalSettings.classList.add("warning");
          }
console.log(totalRadio);
  }
