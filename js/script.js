import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"


// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/* função para quando clicar no botão */

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError = notANumber(weight) || notANumber(height)
    
    
    if(showAlertError) {
        AlertError.open()
        return;      

    }
    AlertError.close()
    
    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`
// resultado do IMC!
    Modal.messege.innerText = message
    Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

// alerta erro! //