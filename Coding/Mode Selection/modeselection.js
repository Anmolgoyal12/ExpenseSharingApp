const submitBtn = document.getElementById("btn");
const modeSelection = document.getElementById("Mode_Selection");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (modeSelection.value === "manual-mode") {
        window.location.href = "login/login.html";
    }
});