
function Settingsfactory(){
  var criticalLevel = 0;
  var warningLevel= 0;
  var callCost = 0;
  var smsCost = 0 ;


  var sms = 0.0;
  var call = 0.0;
  var Total = 0.0;


function Callprice(call_cost){
  callCost = parseFloat(call_cost);
return callCost;
}

function Smsprice(sms_cost){
  smsCost = sms_cost;
  return smsCost;
}

function criticalL(critical_level){
  criticalLevel = critical_level;
  return criticalLevel;
}


function warningL(warning_level){
  warningLevel = warning_level;
  return warningLevel;
}

  function Bill_Type(BillType){

    var billTypeEntered = BillType;

if(criticalLevel <= Total){

}

else{
        if (billTypeEntered === "call"){
            call += callCost ;
        }
        else if (billTypeEntered === "sms"){
            sms += smsCost;;
        }
      }

  }



        function Call_Total(call){
          call = call_cost
          return call;
        }

        function Sms_Total(sms){
          sms = sms_cost
          return sms;
        }

        function TTTotal(){
          Total = call + sms ;
          return Total;
         }

         return {
           Callprice,
           Smsprice,
           Bill_Type,
           Call_Total,
           Sms_Total,
           TTTotal,
           warningL,
           criticalL
         }


}
