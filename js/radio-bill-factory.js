function Radiobillfactory(){
  var call = 0;
  var sms = 0;
  var total = 0;


  function bill_Type(billType){

    var billTypeEntered = billItemType;

        if (billTypeEntered === "call"){
            call += 2.75;
        }
        else if (billTypeEntered === "sms"){
            sms += 0.75;
        }
  }


        function call_Total(){
          return call;
        }

        function sms_Total(){
          return sms;
        }

        function TTotal(){
          total = call + sms ;
          return total;
         }

         return {
           bill_Type,
           call_Total,
           sms_Total,
           tTotal,       }


}
