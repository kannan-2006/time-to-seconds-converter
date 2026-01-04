let inputHours = document.getElementById("hoursInput");
let inputminute = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let secParagraph = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

convertBtnEl.addEventListener("click", function() {
    let hoursValue = inputHours.value;
    let minutesValue = inputminute.value;
    if (hoursValue === "") {
        errorMsgEl.textContent = "Please Enter The Valid Number of Hours";
        secParagraph.textContent = "";
        secParagraph.classList.remove("text-style");
    } else if (minutesValue === "") {
        secParagraph.textContent = "";
        secParagraph.classList.remove("text-style");
        errorMsgEl.textContent = "Please Enter The Valid Number of Minutes";
    } else {
        errorMsgEl.textContent = "";
        let hoursInSec = parseInt(hoursValue) * 3600;
        let minutesInSec = parseInt(minutesValue) * 60;
        let totalSec = hoursInSec + minutesInSec;
        secParagraph.textContent = totalSec + "s";
        secParagraph.classList.add("text-style");
    }


});