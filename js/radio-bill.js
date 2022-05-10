// get a reference to the sms or call radio buttons
const billItemTypeRadio1 = document.querySelector(".billItemTypeRadio")

//get a reference to the add button
const radioBillAddBtn1 = document.querySelector(".radioBillAddBtn")

const callTotalTwo1 = document.querySelector(".callTotalTwo")

const smsTotalTwo1 = document.querySelector(".smsTotalTwo")

const totalTwo1 = document.querySelector(".totalTwo")

//create a variable that will keep track of the total bill

var callsTotal1 = 0;
var smsTotal1 = 0;
var totalCost1 = 0;

//add an event listener for when the add button is pressed
function textBillTotal() {


    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value
        // billItemType will be 'call' or 'sms'
        if (billItemType === "call") {
            callsTotal1 += 2.75
        }
        else if (billItemType === "sms") {
            smsTotal1 += 0.75;
        }

        // complete if statement for red and orange color change

        if (totalCost1 >= 50){
            totalTwo1.classList.add("danger");
        }
        else if (totalCost1 >= 30) {
            totalTwo1.classList.add("warning");
        }

        //update the totals that is displayed on the screen.
        callTotalTwo1.innerHTML = callsTotal1.toFixed(2);
        smsTotalTwo1.innerHTML = smsTotal1.toFixed(2);
        totalCost1 = callsTotal1 + smsTotal1;
        totalTwo1.innerHTML = totalCost1.toFixed(2);
    }
}
radioBillAddBtn1.addEventListener('click', textBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
