
function Settingsfactory(){
  var criticalLevel = 0;
  var warningLevel= 0;
  var callCost = 0;
  var smsCost = 0 ;

var call_cost =0;
var sms_cost =0;

  var sms = 0.0;
  var call = 0.0;
  var Total = 0.0;


function Callprice(call_cost){
    callCost = call_cost;
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




function Bill_Type(billType){

  var billTypeEntered = billType;

      if (billTypeEntered === "call"){
          call += callCost;
      }
      else if (billTypeEntered === "sms"){
          sms += smsCost;
      }
}


      function Call_Total(){
        return call;
      }

      function Sms_Total(){
        return sms;
      }

      function TTTotal(){
        Total = call + sms ;
        return Total;
       }

       return {
         Bill_Type,
         Call_Total,
         Sms_Total,
        TTTotal,
         Smsprice ,
         Callprice   }


}
