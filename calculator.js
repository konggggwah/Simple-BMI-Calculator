
let weight = document.querySelector("#weight")
let height = document.querySelector("#height")
let calculateBMI = document.querySelector("#calculateBMI")
let result = document.querySelector("#result")

let weightInput
let heightInput

function empty(){
    weightInput = parseFloat(weight.value)
    heightInput = parseFloat(height.value)

    if (weight.value.trim() === "") {
        result.textContent = "Please input weight"
        return false
    }
    if (height.value.trim() === "") {
        result.textContent = "Please input height"
        return false
    }

    return true
}

function formula(){
    if (!empty()) return
    // formula is kg/m^2
    let BMI = weightInput/((heightInput/100)*(heightInput/100))
    let roundedBMI = Math.round(BMI * 100)/100
    result.textContent = `Your BMI is ${roundedBMI}`
    return roundedBMI
}

function range(roundedBMI){
    if (!empty()) return

    // formula for healthy range
    // weight * BMI



    let diffBMI;
    let healthyWeight;


    // look at the range of BMI
    let status = document.createElement("p");
    if (roundedBMI < 18.5){
        diffBMI = 18.5 - roundedBMI
        healthyWeight = diffBMI * (heightInput/100)
        status.textContent = `You are underweight! You need to gain about ${Math.round(healthyWeight * 100)/100}kg to reach a healthy BMI.`
    } else if (roundedBMI >= 18.5 && roundedBMI < 23){
        status.textContent = "You are healthy, keep it up!"
    } else if (roundedBMI >= 23 && roundedBMI <= 27.5){
        diffBMI = roundedBMI - 23
        healthyWeight = diffBMI * (heightInput/100)
        status.textContent = `You are overweight :( You need to lose about ${Math.round(healthyWeight * 100)/100}kg to reach a healthy BMI.`
    } else{
        diffBMI = roundedBMI - 23
        healthyWeight = diffBMI * (heightInput/100)
        status.textContent = `You are severely obese. You need to lose about ${Math.round(healthyWeight * 100)/100}kg to reach a healthy BMI.`
    }
    result.appendChild(status)
}

function handleClick(){
    let roundedBMI = formula()
    return range(roundedBMI)
}

calculateBMI.addEventListener("click", handleClick)
height.addEventListener("keydown", (event) => {
    if (event.key === 'Enter'){
        handleClick()
    }
})
weight.addEventListener("keydown", (event) => {
    if (event.key === 'Enter'){
        handleClick()
    }
})