import { } from './lib/fontawesome.js'
import { integration } from './core/integration.js'
import debounce from './lib/debounce.js'



const calculateButton = document.querySelector('.form .calculate')
const resultDOM = document.querySelector('.form .result')
const inputDOM = document.querySelectorAll('.form .inputElem')
const accuracy = document.querySelector('#main .form #acc')
const accuracyNum = document.querySelector('#main .form #accNum')

calculateButton.onclick = calculateResult
inputDOM.forEach(elem => { elem.oninput = hideResult })


accuracy.addEventListener("input", debounce(() => { accuracyNum.textContent = accuracy.value }, 10, true))





function calculateResult() {

    resultDOM.style.display = 'flex'
    resultDOM.classList.remove('err')
    resultDOM.textContent = 'Calculating . . .'

    const func = document.querySelector('#main .form #func')
    const up = document.querySelector('#main .form #up')
    const low = document.querySelector('#main .form #low')
    // const accuracy = document.querySelector('#main .form #acc')

    let integrationData = {
        func: func.value,
        up: +up.value,
        low: +low.value,
        accuracy: +accuracy.value
    }
    try {
        const result = integration(integrationData)
        resultDOM.innerHTML = `<span class="inSymbol">&Integral; </span> f(x) dx = ${result}`
    } catch (error) {
        resultDOM.classList.add('err')
        resultDOM.textContent = error
    }
}

function hideResult() {
    resultDOM.style.display = 'none'
}
