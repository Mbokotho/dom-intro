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

var criticalLevel = 0;
var warningLevel= 0;
var callCost = 0;
var smsCost = 0 ;


var sms = 0.0;
var call = 0.00;
var Total = 0;


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
}
        if (Total >= criticalLevel) {}


        else{
                if(billItemType === "call"){
                  call += callCost;
                 }
                else if (billItemType === "sms"){
                  sms += smsCost;
              }

        }

Total = call + sms;
smsTotalSettings.innerHTML = sms.toFixed(2);
callTotalSettings.innerHTML = call.toFixed(2);
totalSettings.innerHTML = Total.toFixed(2);



  if (Total >= criticalLevel){
       // adding the danger class will make the text red
       totalSettings.classList.add("danger");
   }
   else if (Total >=  warningLevel){
       totalSettings.classList.add("warning");
   }




if (Total < criticalLevel) {
  totalSettings.classList.remove("danger");
}

if (Total < warningLevel) {
  totalSettings.classList.remove("warning");
}


   };

    radioBillSettingsAddBtn.addEventListener('click', radioBillTotalSettings);
    updateSettingsBtn.addEventListener('click', Settinngs);
