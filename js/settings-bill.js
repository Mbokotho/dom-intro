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

var call = 0;
var sms = 0;
var Total = 0;
var Faactory = Settingsfactory();

function Settinngs(){

Faactory.Callprice(callCostSetting.value);
Faactory.Smsprice(smsCostSetting.value);
Faactory.criticalL(criticalLevelSetting.value);
Faactory.warningL(warningLevelSetting.value);

 var critical_level = parseFloat(criticalLevelSetting.value);

  var warning_level= parseFloat(warningLevelSetting.value);

   var call_cost = parseFloat(callCostSetting.value) ;

  var sms_cost = parseFloat(smsCostSetting.value);


}


updateSettingsBtn.addEventListener('click', Settinngs);



  function radioBillTotalSettings(){


          var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn){
        var billItemType = checkedRadioBtn.value;
      }

          if (Total >= Faactory.criticalL(criticalLevelSetting.value)) {}


          else{
                  if(billItemType === "call"){
                    call += Faactory.Callprice(callCostSetting.value);
                   }
                  else if (billItemType === "sms"){
                    sms += Faactory.Smsprice(smsCostSetting.value);
                }

          }

  Total = call + sms;
  Faactory.Bill_Type(billItemType);

//  Total  = Faactory.TTTotal();

  totalSettings.innerHTML = Total .toFixed(2);
  smsTotalSettings.innerHTML = Faactory.Sms_Total().toFixed(2);
  callTotalSettings.innerHTML = Faactory.Call_Total().toFixed(2);
  Faactory.criticalL(criticalLevelSetting.value);
  Faactory.warningL(warningLevelSetting.value);



      if (Total >= Faactory.criticalL(criticalLevelSetting.value)){
              // adding the danger class will make the text red
              totalSettings.classList.add("danger");

         }
          else if (Total>= Faactory.warningL(warningLevelSetting.value)){
             totalSettings.classList.add("warning");
          }

           if (Total < Faactory.criticalL(criticalLevelSetting.value)) {
             totalSettings.classList.remove("danger");

           }

           if (Total < Faactory.warningL(warningLevelSetting.value)) {
            totalSettings.classList.remove("warning");

}
// if (ttl >= Faactory.criticalL(criticalLevelSetting.value)){
//   document.getElementById("radioBillSettingsAddBtn").disabled = true;
//
//
// }

   };

    radioBillSettingsAddBtn.addEventListener('click', radioBillTotalSettings);
