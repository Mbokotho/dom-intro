 var calculateBtn = document.querySelector(".calculateBtn");

 var billTotalElement= document.querySelector(".billTotal");

 var billStringField = document.querySelector(".billString");



function calculateBtnClicked(billString){


  var billTotal = 0;


    var billItems = billString.split(",");


    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    return billTotal;
  }



function DisplayFun(){

  var billString = billStringField.value;

  var Bill = calculateBtnClicked(billString);

  var roundedBillTotal = Bill.toFixed(2);


    billTotalElement.innerHTML = roundedBillTotal;

  if (Bill >= 30){
      billTotalElement.classList.add("danger");
     }
      else if (Bill >= 20){
          billTotalElement.classList.add("warning");
      }


    if (Bill < 30) {
      billTotalElement.classList.remove("danger");
     }

   if (Bill < 20) {
         billTotalElement.classList.remove("warning");
       }
     }

 calculateBtn.addEventListener('click', DisplayFun);
