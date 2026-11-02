
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
    return result.textContent = `Your BMI is ${roundedBMI}`
}

calculateBMI.addEventListener("click", formula)
height.addEventListener("keydown", (event) => {
    if (event.key === 'Enter'){
        formula()
    }
})
weight.addEventListener("keydown", (event) => {
    if (event.key === 'Enter'){
        formula()
    }
})