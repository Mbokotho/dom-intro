// get a reference to the sms or call radio buttons
var billItemTypeWithSettings =document.querySelector(".billItemTypeWithSettings");
// get refences to all the settings fields
var smsCostSetting = document.querySelector('.smsCostSetting');
var callCostSetting = document.querySelector('.callCostSetting');
var warningLevelSetting = document.querySelector('.warningLevelSetting');
var criticalLevelSetting = document.querySelector('.criticalLevelSetting');
//get a reference to the add button

//get a reference to the 'Update settings' button
var radioBillSettingsAddBtn = document.querySelector(".radioBillSettingsAddBtn ");
var updateSettingsBtn = document.querySelector('.updateSettingsBtn');

// create a variables that will keep track of all the settings
var callTotalSettings = document.querySelector('.callTotalSettings');
var smsTotalSettings = document.querySelector('.smsTotalSettings');
var totalSettings = document.querySelector('.totalSettings');

var callCost = 0;
var smsCost = 0 ;
var Total = 0;

var criticalLevel = 70.0;
var sms = 0.0;
var call = 0.00;

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right
//get a reference to the add buttongs");

function Settinngs(){

callCost = parseFloat(callCostSetting.value);

smsCost = parseFloat(smsCostSetting.value);

criticalLevel= parseFloat(criticalLevelSetting.value);

warningLevel = parseFloat(warningLevelSetting.value);

}


updateSettingsBtn.addEventListener('click', Settinngs);


       function radioBillTotalSettings(){
          // get the value entered in the billType textfield
          var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
        // billItemType will be 'call' or 'sms'
if (Total >= criticalLevel) {

} else {
  if(billItemType === "call"){
          call += callCost;
      }
      else if (billItemType === "sms"){
          sms += smsCost;
      }
  Total = call + sms;
}

    }

smsTotalSettings.innerHTML = sms.toFixed(2);
callTotalSettings.innerHTML = call.toFixed(2);
totalSettings.innerHTML = Total.toFixed(2);
  };


  /*if (Total >= criticalLevel){
       // adding the danger class will make the text red
       totalSettings.classList.add("danger");
   }
   else if (Total >= warningLevel){
       totalSettings.classList.add("warning");
   };*/

    radioBillSettingsAddBtn.addEventListener('click', radioBillTotalSettings);
