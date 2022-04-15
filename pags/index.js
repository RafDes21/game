function probar() {
    return document.getElementById(`probar`).value

}

function volver(nombre) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Muy Bien echo ' + nombre + ` !!!`,
        showConfirmButton: false,
        timer: 1500
    })
}

function volverMenos(nombre) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Algo esta mal, vuelve a intentarlo ' + nombre,
        showConfirmButton: false,
        timer: 1500
    })
}
const arname = []
const btnname = document.getElementById(`btn-name`)

btnname.addEventListener(`click`, () => {
    arname.shift()
    const name = document.getElementById(`name`).value

    const nameone = document.querySelector(`.nameone`)
    nameone.innerHTML = `"que alegría que estés acá ${name}&#128512"`.toUpperCase()
    arname.push(name)

    nameFormulario.reset()
})


const nivelSuma = []
const nivelUno = document.getElementById(`nivelUno`)
nivelUno.addEventListener(`click`, () => {
    nivelSuma.shift()
    const nivel = document.getElementById(`nivel`).value


    if (nivel == "" || arname == "" || nivel < 0 || nivel > 3) {
        Toastify({
            text: "Quizas te falta:\n 1: Poner tu nombre y confirmar\n2: O elegir un nivel correcto.",
            className: "info",
            position: "center",
            style: {
                background: "linear-gradient(to right, #200122, #6f0000)",
            }
        }).showToast();
    } else {

        nivelSuma.push(nivel)
        Toastify({
            text: "Reto aceptado, exitos!!",
            className: "info",
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    }

})




const numbers = []
const btnres = document.getElementById(`btn-res`)
btnres.addEventListener(`click`, () => {
    numbers.shift()


    if (parseInt(nivelSuma[0]) === 1) {
        console.log(nivelSuma[0]);
        const number1 = document.getElementById(`number1`)
        let num1 = number1.innerHTML = Math.round(Math.random() * 100)

        const number2 = document.getElementById(`number2`)
        let num2 = number2.innerHTML = Math.round(Math.random() * 100)

        function result() {
            return num1 + num2

        }
    }

    if (parseInt(nivelSuma[0]) === 2) {
        console.log(nivelSuma[0]);
        const number1 = document.getElementById(`number1`)
        let num1 = number1.innerHTML = Math.round(Math.random() * 1000)

        const number2 = document.getElementById(`number2`)
        let num2 = number2.innerHTML = Math.round(Math.random() * 1000)

        function result() {
            return num1 + num2

        }
    }
    if (parseInt(nivelSuma[0]) === 3) {
        console.log(nivelSuma[0]);
        const number1 = document.getElementById(`number1`)
        let num1 = number1.innerHTML = Math.round(Math.random() * 10000)

        const number2 = document.getElementById(`number2`)
        let num2 = number2.innerHTML = Math.round(Math.random() * 10000)

        function result() {
            return num1 + num2

        }
    }
    numbers.push(result())

})

let cont = 0
const btn = document.getElementById(`btn`)
btn.addEventListener(`click`, () => {


    if (numbers[0] === parseInt(probar())) {

        cont++
        const contador = document.getElementById(`contador`)
        contador.innerHTML = cont
        volver(arname[0])

    } else {
        cont--
        const contador = document.getElementById(`contador`)
        contador.innerHTML = cont
        volverMenos(arname[0])

    }

})