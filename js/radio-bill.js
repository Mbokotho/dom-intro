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

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screenfunction textBillTotal(){
   // get the value entered in the billType textfield
   function radioBillTotal(){
      // get the value entered in the billType textfield
      var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
}
  if(billItemType === "call"){
          call += 2.75;
      }
      else if (billItemType === "sms"){
          sms += 0.75;
      }

      //update the totals that is displayed on the screen.
      callTotalTwo.innerHTML = call;
      smsTotalTwo.innerHTML = sms;
      totalTwo.innerHTML = total;
      total = call + sms;

      if (total >= 50){
              // adding the danger class will make the text red
              totalTwo.classList.add("danger");
          }
          else if (total>= 30){
              totalTwo.classList.add("warning");
          }

  }
