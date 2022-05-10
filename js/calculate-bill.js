//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn")


//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal")

//get a reference to the billString
const billStringElement = document.querySelector(".billString")

//create the function that will be called when the calculate button is pressed
function totalPhoneBill(callsMade){
    var parameter = callsMade.split(",");
     var totalBill = 0;
     
     for(var i =0;i<parameter.length;i++){
     var checkCallsMade = parameter[i].trim();
       
       
       if(checkCallsMade === "call"){
       totalBill += 2.75;
       }
       else if(checkCallsMade === "sms"){
       totalBill += 0.65;
       }
     }
     return totalBill.toFixed(2);
   }

// add event listener
function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value; 
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    
    billTotalElement.innerHTML = roundedBillTotal;

    // complete if statement for red and orange color change

    if(roundedBillTotal >= 30){
        billTotalElement.classList.add("danger");
     }
   else if(roundedBillTotal >= 20){
        billTotalElement.classList.add("warning");
     }
}
     
calculateBtn.addEventListener('click', calculateBtnClicked);


//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element


//link the function to a click event on the calculate button
