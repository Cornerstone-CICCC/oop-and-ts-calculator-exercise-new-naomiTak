class Calculator {
    #firstNum;
    #secondNum;

    constructor(firstNum, secondNum){
        this.#firstNum = firstNum
        this.#secondNum = secondNum
    }

    get firstNum(){
        return this.#firstNum
    }
    set firstNum(value){
        this.#firstNum = value
    }

    get secondNum(){
        return this.#secondNum
    }
    set secondNum(value){
        this.#secondNum = value
    }

    add(){
        return this.#firstNum + this.#secondNum
    }

    subtract(){
        return this.#firstNum - this.#secondNum
    }
    multiply(){
        return this.#firstNum * this.#secondNum
    }
    divide(){
        return this.#firstNum / this.#secondNum
    }
    compute(value){
        if(value === add){
            return this.add()
        }else if(value === subtract){
            return this.subtract()
        }
        else if(value === multiply)
        {
            return this.multiply()}
        else if(value === divide)
        {
            return this.divide()
        }
    }
}

const add = "add"
const subtract = "subtract"
const multiply = "multiply"
const divide = "divide"

const firstNumInput = document.querySelector("#num1")
const secondNumInput = document.querySelector("#num2")
const calculateBtn = document.querySelector("#calculateBtn")

const calculation = new Calculator(0, 0)

firstNumInput.addEventListener("change", () => {
    calculation.firstNum = !firstNumInput.value ? 0 :parseInt(firstNumInput.value)
    console.log(calculation)
})

secondNumInput.addEventListener("change", () => {
    calculation.secondNum = !secondNumInput.value ? 0 :parseInt(secondNumInput.value)
    console.log(calculation)
})

calculateBtn.addEventListener("click", () => {
    const operation = document.querySelector("#operation")
    const result = calculation.compute(operation.value)
    console.log(result)
    document.querySelector("#result").innerHTML = result
})

