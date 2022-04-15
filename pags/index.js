function probar() {
    return document.getElementById(`probar`).value

}

let cont = 0
const btn = document.getElementById(`btn`)
btn.addEventListener(`click`, () => {
    

    if (numbers[0] === parseInt(probar())) {

        cont++
        const final = document.getElementById(`result-final`)
        final.innerHTML = `FELICITACIONES!!! ES CORRECTO SOS UN GENI@ ${arname[0]}`.toUpperCase()
        const contador = document.getElementById(`contador`)
        contador.innerHTML = cont
    } else {
        cont--
        const resultado = document.getElementById(`result-final`)
        resultado.innerHTML = `NO ES LA RESPUESTA, PERO PODES VOLVER A INTENTARLO, ANIMO ${arname[0]}`.toUpperCase()
        const contador = document.getElementById(`contador`)
        contador.innerHTML = cont
    }

})

const numbers = []
const btnres = document.getElementById(`btn-res`)
btnres.addEventListener(`click`, () => {
    numbers.shift()
    const number1 = document.getElementById(`number1`)
    let num1 = number1.innerHTML = numeroAleatorio()

    const number2 = document.getElementById(`number2`)
    let num2 = number2.innerHTML = numeroAleatorio()

    function numeroAleatorio() {
        return Math.round(Math.random() * 100)
    }

    function result() {
        return num1 + num2
    }
    numbers.push(result())
    console.log(result())
})
console.log(numbers);

const arname = []
const btnname = document.getElementById(`btn-name`)

btnname.addEventListener(`click`, () => {
    arname.shift()
    const name = document.getElementById(`name`).value

    const nameone = document.querySelector(`.nameone`)
    nameone.innerHTML = `hola ${name}`.toUpperCase()
    arname.push(name)

    nameFormulario.reset()
})