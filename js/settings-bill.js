// get a reference to the sms or call radio buttons
const billItemType = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
const totalSettingsElement = document.querySelector(".callTotalSettings")

const smsSettings = document.querySelector(".smsTotalSettings")

const totalSettings = document.querySelector(".totalSettings")

const wLevel = document.querySelector(".warningLevelSetting ")

const cLevel = document.querySelector(".criticalLevelSetting")

const  cSetting = document.querySelector(".callCostSetting")

const  smsSetting = document.querySelector(".smsCostSetting")

//get a reference to the add button
 const buttonPrimaryElement = document.querySelector(".addButton")

//get a reference to the 'Update settings' button
const updateSettingsElement = document.querySelector(".updateSettings")

// create a variables that will keep track of all the settings
// var callCost = 0;
// var smsCost = 0;
// var warningLevel = 0;
// var criticalLevel = 0;

const settingBill = billWIthSettings();

// create a variables that will keep track of all three totals.
// var callsTotal2 = 0;
// var smsTotal2 = 0;
// var totalCost2 = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettingsElement.addEventListener('click', () => {

    settingBill.setCallCost(Number(cSetting.value));
    settingBill.setSmsCost(Number(smsSetting.value));
    settingBill.setWarningLevel(Number(wLevel.value));
    settingBill.setCriticalLevel(Number(cLevel.value));

    warningCriticalLevel();
 
});

function textBillTotal() {
 var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn.value;
    }

        // billItemType will be 'call' or 'sms'
        if (billItemType === "call") {
            settingBill.makeCall();
        }
        else if (billItemType === "sms") {
           settingBill.sendSms();
        }

        // update the totals that is displayed on the screen.
        totalSettingsElement.innerHTML = settingBill.getTotalCallCost();
        smsSettings.innerHTML = settingBill.getTotalSmsCost();
        totalSettings.innerHTML = settingBill.getTotalCost();

        warningCriticalLevel();
}
 buttonPrimaryElement.addEventListener('click', textBillTotal);

 function warningCriticalLevel(){

    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("critical");
    totalSettings.classList.add(settingBill.totalClassName());

 }

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
