
var billItemTypeRadio =document.querySelector(".billItemTypeRadio");

var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callTotalTwo= document.querySelector(".callTotalTwo");
var smsTotalTwo =document.querySelector(".smsTotalTwo");
var totalTwo =document.querySelector(".totalTwo");



var Factory = Radiobillfactory();


   function radioBillTotal(){

var tttotal = Factory.TTotal();


      var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
}

Factory.bill_Type(billItemType);

      callTotalTwo.innerHTML = Factory.call_Total().toFixed(2);
      smsTotalTwo.innerHTML =Factory. sms_Total().toFixed(2);
      totalTwo.innerHTML = tttotal.toFixed(2);


      if (tttotal >= 50){
              // adding the danger class will make the text red
              totalTwo.classList.add("danger");
         }
          else if (tttotal>= 30){
             totalTwo.classList.add("warning");
          }



              if (tttotal >= 50){
                      // adding the danger class will make the text red
                     totalTwo.classList.add("danger");
                   }
                   else if (tttotal >= 30){
                      totalTwo.classList.add("warning");
                    }


           if (tttotal < 50) {
             totalTwo.classList.remove("danger");
           }

           if (tttotal < 30) {
            totalTwo.classList.remove("warning");
          }


  }
  radioBillAddBtn.addEventListener('click', radioBillTotal);
