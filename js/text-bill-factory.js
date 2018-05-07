function Textbillfactory(){
  var call = 0;
  var sms = 0;
  var total = 0;

function bill_type(billTypeEntered){

  //var billTypeEntered = billTypeTxt;

      if (billTypeEntered === "call"){
          call += 2.75;
      }
      else if (billTypeEntered === "sms"){
          sms += 0.75;
      }
}


      function call_total(){
        return call;
      }

      function sms_total(){
        return sms;
      }

      function tTotal(){
        total = call + sms ;
        return total;
       }

       return {
         bill_type,
         call_total,
         sms_total,
         tTotal,       }

}
