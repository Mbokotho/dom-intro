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


var Faactory = Settingsfactory();

function Settinngs(){

  critical_level= parseFloat(criticalLevelSetting.value);

  warning_level = parseFloat(warningLevelSetting.value);


    call_cost = parseFloat(callCostSetting.value);

    sms_cost = parseFloat(smsCostSetting.value);


  var callCost = Faactory. Callprice(call_cost);
  var smsCost = Faactory. Smsprice(sms_cost);

 var criticalLevel = Faactory. criticalL(critical_level);
 var warningLevel = Faactory. criticalL(warning_level);


}


updateSettingsBtn.addEventListener('click', Settinngs);



  function radioBillTotalSettings(){

    var criticalLevel = Faactory. criticalL(critical_level);
    var warningLevel = Faactory. criticalL(warning_level);


          var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
      }

  Faactory.Bill_Type(billItemType);

totalSettings.innerHTML = Faactory.TTTotal().toFixed(2);
smsTotalSettings.innerHTML = Faactory.Sms_Total().toFixed(2);
callTotalSettings.innerHTML = Faactory.Call_Total().toFixed(2);




   if (Faactory.TTTotal() >= criticalLevel){
        // adding the danger class will make the text red
      totalSettings.classList.add("danger");
   }
   else if (Faactory.TTTotal() >=  warningLevel){
       totalSettings.classList.add("warning");
   }
if (Faactory.TTTotal() < criticalLevel) {
  totalSettings.classList.remove("danger"); }
 if (Faactory.TTTotal() < warningLevel) {   totalSettings.classList.remove("warning");
}


   };

    radioBillSettingsAddBtn.addEventListener('click', radioBillTotalSettings);
    updateSettingsBtn.addEventListener('click', Settinngs);
