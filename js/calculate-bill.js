//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");
// do this for all the DOM
//get a reference to the billTotal element
var billTotalElement= document.querySelector(".billTotal");
//get a reference to the billString
var billStringField = document.querySelector(".billString");
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal elemen
calculateBtn.addEventListener('click', calculateBtnClicked) ;
function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }

    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;


/*switch (billTotal) {
  case   billTotal > 30  :
  billTotalElement.classList.add("danger");

    break;

  case  billTotal > 20 :
  billTotalElement.classList.add("warning");

    break;
  default:

}*/


   if (billTotal >= 30){
            // adding the danger class will make the text red
            billTotalElement.classList.add("danger");
        }
        else if (billTotal > 20){
            billTotalElement.classList.add("warning");
        }




}



/*var totalPhoneBill = function(billString){
var comms = billString.split(', ')
var total = 0;
//var bill = comms
//console.log(bill);
for(var i=0;i<comms.length;i++){
console.log(comms[i]);
 switch(comms[i]){
   case "call":
  total += 2.75;
   break;
   case "sms":
   total += 0.65;
     break;


 }
}return 'R'+total.toFixed(2);
}*/

//link the function to a click event on the calculate button
