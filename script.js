document.querySelector('#email').addEventListener('keyup', validateEmail)
document.querySelector('#password').addEventListener('keyup', validatePassword)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    login()
})

const submitButton = document.querySelector('button')
submitButton.disabled = true

let isValidEmail = false
let isValidPassword = false

function validateEmail(e) {
    const email = e.target.value.trim()
    console.log(email)

    isValidEmail = email.includes('@' && '.' && ('co' || '.com'))
    if(!isValidEmail) {
        document.getElementById('messageInvalidEmail').innerText = 'Email inválido'
    } else {
        document.getElementById('messageInvalidEmail').innerText = ''
    }

    validate()
}

function validatePassword(e) {
    const password = e.target.value
    console.log(password)

    isValidPassword = password.length >= 8
    if(!isValidPassword) {
        document.getElementById('messageInvalidPassword').innerText = 'Senha inválida'
    } else {
        document.getElementById('messageInvalidPassword').innerText = ''
    }

    validate()
}

function validate() {
    if(isValidEmail && isValidPassword) {
        submitButton.disabled = false
    } else {
        submitButton.disabled = true
    }
}

function login() {
    alert('Login')
}