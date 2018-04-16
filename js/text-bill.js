// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtn= document.querySelector(".addToBillBtn");


var callTotalOne= document.querySelector(".callTotalOne");
var smsTotalOne =document.querySelector(".smsTotalOne");
var totalOne =document.querySelector(".totalOne");
//create a variable that will keep track of the total bill
var call = 0;
var sms = 0;
var total = 0;

 function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        call += 2.75;
    }
    else if (billTypeEntered === "sms"){
        sms += 0.75;
    }
    //update the totals that is displayed on the screen.
    total = call + sms;
    callTotalOne.innerHTML = call;
    smsTotalOne.innerHTML = sms;
    totalOne.innerHTML = total;


    if (total >= 50){
            // adding the danger class will make the text red
            totalOne.classList.add("danger");
        }
        else if (total >= 30){
            totalOne.classList.add("warning");
        }

           

        if (billTotal < 30) {
          billTotalElement.classList.remove("danger");
        }

        if (billTotal < 20) {
          billTotalElement.classList.remove("warning");
        }


}

addToBillBtn.addEventListener('click', textBillTotal);
