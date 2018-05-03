// get a reference to the sms or call radio buttons
var billItemTypeRadio =document.querySelector(".billItemTypeRadio");
//get a reference to the add button
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callTotalTwo= document.querySelector(".callTotalTwo");
var smsTotalTwo =document.querySelector(".smsTotalTwo");
var totalTwo =document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
var call = 0;
var sms = 0;
var total = 0;

//add an event listener for when the add button is pressed
radioBillAddBtn.addEventListener('click', radioBillTotal);

var Factory = Radiobillfactory();
   // get the value entered in the billType textfield

   function radioBillTotal(){
      // get the value entered in the billType textfield
      var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
}

Factory.bill_Type(billItemType);
      //update the totals that is displayed on the screen.
      callTotalTwo.innerHTML = Factory.call_Total().toFixed(2);
      smsTotalTwo.innerHTML =Factory. sms_Total().toFixed(2);
      totalTwo.innerHTML = Factory.TTotal().toFixed(2);


      // if (total >= 50){
      //         // adding the danger class will make the text red
      //         totalTwo.classList.add("danger");
      //     }
      //     else if (total>= 30){
      //         totalTwo.classList.add("warning");
      //     }
      //
      //
      //
      //        if (total >= 50){
      //                 // adding the danger class will make the text red
      //               totalTwo.classList.add("danger");
      //               }
      //               else if (total >= 30){
      //                   totalTwo.classList.add("warning");
      //               }
      //
      //
      //     if (total < 50) {
      //       totalTwo.classList.remove("danger");
      //     }
      //
      //     if (total < 30) {
      //       totalTwo.classList.remove("warning");
      //     }
      //

  }
