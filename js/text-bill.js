// get a reference to the textbox where the bill type is to be entered
const billTypeText = document.querySelector(".billTypeText")
//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn")

const callTotalOne = document.querySelector(".callTotalOne")

const smsTotalOne = document.querySelector(".smsTotalOne")

const totalOne = document.querySelector(".totalOne")

//create a variable that will keep track of the total bill
var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

//add an event listener for when the add button is pressed
function textBillTotal() {
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeText.value.trim();
    var caps = billTypeEntered.toLowerCase()
    // update the correct total
    if (caps === "call") {
        callsTotal += 2.75
    }
    else if (caps === "sms") {
        smsTotal += 0.75;
    }
    
    // complete if statement for red and orange color change
    callTotalOne.innerHTML = callsTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    totalOne.innerHTML = totalCost.toFixed(2);

    if(totalCost >= 50){
        totalOne.classList.add("danger");
     }
   else if(totalCost >= 30){
        totalOne.classList.add("warning");
     }

    //update the totals that is displayed on the screen
    
}

addToBillBtn.addEventListener('click', textBillTotal);

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


