const $name = document.querySelector('#name')
const $lastName = document.querySelector('#lastName')
const $email = document.querySelector('#email')
const $passw = document.querySelector('#passw')
const $check = document.querySelector('#check')
const $form = document.querySelector('#form')
const $button = document.querySelector('#btnRegistrar')

const expRegular = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

const formulario = {
    $name,
    $lastName,
    $email,
    $passw,
    $check
}

$name.addEventListener('blur', e => {
    const validar = validarEntrada(e.target.value)
    if(validar){
        agregarError(e.target.id)
        return
    }
    eliminarError(e.target.id)
})

$lastName.addEventListener('blur', e => {
    const validar = validarEntrada(e.target.value)
    if(validar){
        agregarError(e.target.id)
        return
    }
    eliminarError(e.target.id)
})

$email.addEventListener('blur', e => {
    const validar = validarEntrada(e.target.value)
    if(validar){
        agregarError(e.target.id)
        return
    }else if(expRegular.test(e.target.value) === false){
        agregarError(e.target.id, 'Debe ser un formato de correo valido')
        return
    }
    eliminarError(e.target.id)
})

$passw.addEventListener('blur', e => {
    const validar = validarEntrada(e.target.value)
    if(validar){
        agregarError(e.target.id)
        return
    }
    eliminarError(e.target.id)
})

$button.addEventListener('click', (e)=>{
    e.preventDefault()
    const {$name, $lastName, $email,  $passw, $check} = formulario
    if($name.value.trim() === '' || $lastName.value.trim() === '' || $email.value.trim() === '' || $passw.value.trim() == ''){
        agregarError(e.target.id, 'Todos los campos son obligatorios')
        return
    }else if(!$check.checked){
        agregarError(check.id, 'Debes aceptar terminos y condiciones')
        return
    }
    eliminarError(e.target.id)
    eliminarErrorCheck()
    console.log('PASO');
})


function validarEntrada(e){
    if(e.trim() === ''){
        return true
    }
}

function agregarError(id, args = 'Este campo es obligatorio'){
    const error = document.querySelector(`.${id}Error`)
    if(!error){
        const p = document.createElement('p')
            p.textContent = args
            p.classList.add('mensaje-error', `${id}Error`)
        const input = document.querySelector(`#${id}Div`)
        input.appendChild(p)
    }
}

function eliminarError(id){
    const error = document.querySelector(`.${id}Error`)
    if (error) {
        error.remove()
    }
}

function eliminarErrorCheck(){
    const error = document.querySelector(`.checkError`)
    if (error) {
        error.remove()
    }
}