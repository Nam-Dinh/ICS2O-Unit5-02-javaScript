// JavaScript File
function numberinputed() {
    let inputnumber;
    inputnumber = document.getElementById("textbox").value;
    
    if (inputnumber == 0) {
        alert("0 is neither a positive or negative number, it is the origin.");
    }
    if (inputnumber > 0) {
        alert(inputnumber + " is a positive number.");
    }
    else {
        alert(inputnumber + " is a negative number.");
    }
}