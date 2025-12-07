let form = document.getElementById("form");
let tempInput = document.getElementById("tempinput");
let unitSelected = document.getElementById("unit");
let output = document.getElementById("result");

form.addEventListener("submit", function (e){
    e.preventDefault();
    
    const temperature = parseFloat(tempInput.value);
    const unit = unitSelected.value;

    console.log("Unit Selected:", unit);
    let result;

    if (unit === "celsius"){
       result = (temperature * 9/5) + 32;
    }
    
    else if (unit === "fahrenheit"){
       result = (temperature - 32) * 5/9;
    }

    if (isNaN(temperature)){
        output.textContent = "Please enter a valid number";
    }

    else {
        output.textContent = `The conveted temperature is ${result.toFixed(2)} °.`;
    }
    // console.log("My Output Element is:", result)
})


