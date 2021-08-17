let unit = document.getElementById('option');
let finalAns = document.getElementById('result');



// major function 

function calc() {
    let unitEl = option.options[unit.selectedIndex].value;
    let digit = document.getElementById('input').value;


    fahToCel = (element) => {
        return Math.round((element * 9 / 5) + 32); // formula 

    }
    CelTofeh = (element) => {
        return Math.round((element - 32) * 5 / 9); //formula 

    }

    // condition for different units !!

    if (unitEl == "Celcius") {
        finalAns.innerHTML = `${CelTofeh(digit)} deg Fahrenheit`;

    } else {
        finalAns.innerHTML = `${fahToCel(digit)} deg Celcius `;

    }
}