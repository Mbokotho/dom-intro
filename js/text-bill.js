// get a reference to the textbox where the bill type is to be entered
var billTypeText = document.querySelector(".billTypeText");
//get a reference to the add button
var addToBillBtn= document.querySelector(".addToBillBtn");


var callTotalOne= document.querySelector(".callTotalOne");
var smsTotalOne =document.querySelector(".smsTotalOne");
var totalOne =document.querySelector(".totalOne");
//create a variable that will keep track of the total bill


var factory = Textbillfactory();

function textBillTotal(){

var billTypeEntered = billTypeText.value.trim();

factory.bill_type(billTypeEntered);


    callTotalOne.innerHTML = factory.call_total().toFixed(2);
    smsTotalOne.innerHTML = factory.sms_total().toFixed(2);;
    totalOne.innerHTML = factory.tTotal().toFixed(2);


    // if (total >= 50){
    //         // adding the danger class will make the text red
    //         totalOne.classList.add("danger");
    //     }
    //     else if (total >= 30){
    //         totalOne.classList.add("warning");
    //     }
    //
    //
    //
    //     if (billTotal < 30) {
    //       billTotalElement.classList.remove("danger");
    //     }
    //
    //     if (billTotal < 20) {
    //       billTotalElement.classList.remove("warning");
    //     }
    //

}

addToBillBtn.addEventListener('click', textBillTotal);
