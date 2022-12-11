// Hiring Box
// For Onclick - show the box
var rateboxclick = false;
function ShowBox(){
boxlocation = document.getElementById("ratebox");
    // Creating a line
    const newline = document.createElement("br");
    const newline1 = document.createElement("br");

    // Creating a label
    const rateLabel = document.createElement("label");
    const labelText = document.createTextNode("Expected Hourly Rate");
    const starText = document.createElement("span");
    starText.innerHTML = '&nbsp;*';
    starText.id = 'star';
    rateLabel.appendChild(labelText);
    rateLabel.appendChild(starText);
    rateLabel.id = 'rate-label';
    rateLabel.for = 'rate-input';

    // Creating the input Field
    const rateInput = document.createElement("input");
    rateInput.id = 'rate-input';
    rateInput.type = 'number';
    rateInput.step = '0.1';
    rateInput.placeholder = 'Hourly Rate';
    rateInput.classList.add('hourly-rate')

    boxlocation.appendChild(newline);
    boxlocation.appendChild(rateLabel);
    boxlocation.appendChild(newline1);
    boxlocation.appendChild(rateInput);

    rateboxclick = true;
}

// For onclick - hide the box
function HideBox(){
document.getElementById("ratebox").innerHTML = '';
rateboxclick = false;
}

// Form Validation

form.addEventListener("submit", (event)=>{
let validCheck = 6;
let messages = [];
const form = document.querySelector("form");
errorEle = document.createElement("div");
errorEle.id = "error-box";
errorEle.innerHTML = "";
//Check name (min. 2 char)
nameCheck = document.getElementById("name");
nameReg = /[A-Za-z\s]{2,}/;
if(!(nameCheck.value.match(nameReg)) || nameCheck.value === null){
    messages.push("- At least TWO alphabets is required in NAME!");
    validCheck -= 1
}

// Check Email
emailCheck = document.getElementById("email");
emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!(emailCheck.value.match(emailReg)) || emailCheck.value === null){
    messages.push("- Invalid Email Address!");
    validCheck -= 1
}

// Check Address
addressCheck = document.getElementById("address");
addressReg = /.{10,}/;
if(!(addressCheck.value.match(addressReg)) || addressCheck.value === null){
    messages.push("- At least TEN characters is required in ADDRESS!");
    validCheck -= 1
}

// Check City
cityCheck = document.getElementById("city");
cityReg = /[A-Za-z\s]{2,}/;
if(!(cityCheck.value.match(cityReg)) || cityCheck.value === null){
    messages.push("- Invalid City!");
    validCheck -= 1
}

// Check Postal Code
pcodeCheck = document.getElementById("pCode");
pcodeReg = /[ABCEGHJ-NPRSTVXY]\d[A-Z][ -]?\d[A-Z]\d/;
if(!(pcodeCheck.value.match(pcodeReg)) || pcodeCheck.value === null){
    messages.push("- Invalid Postal Code! Example: A1B 0R7");
    validCheck -= 1
}

// Check Hourly rate box
if(rateboxclick === true){
    rateboxCheck = document.getElementById("rate-input");
    if(rateboxCheck.value < 15.5){
        messages.push("- Ontario Minimum Wages is CAD 15.5 per hour.");
        validCheck +=1
    }
}

// Check Message
msgCheck = document.getElementById("msg");
if(msgCheck.value.length < 2){
    messages.push("- At least 2 characters is required in MESSAGE");
    validCheck -= 1
}


if(validCheck != 6){
    event.preventDefault();
    errorEle.style.display = 'block';
    errorEle.innerHTML = `
    <h4>Invalid Input</h4>
    <pre>${messages.join('\r\n')}</pre>`;

    form.appendChild(errorEle);
}
})

// Top Button
let mybutton = document.getElementById("myBtn");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  