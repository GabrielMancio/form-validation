const isValidEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

const isValidCPF = (cpf) => {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
  return regex.test(String(cpf).toLowerCase())
}

const message = document.querySelector('.thanks')
const form = document.querySelector('form')
const inputName = document.querySelector('input[name="name"]')
const inputEmail = document.querySelector('input[name="email"]')
const inputCPF = document.querySelector('input[name="cpf"]')

let isValidForm = false

const resetInput = (elem) => {
  elem.nextElementSibling.classList.add('error-hidden')
  elem.classList.remove('invalid')
}

const invalidateElem = (elem) => {
  elem.nextElementSibling.classList.remove('error-hidden')
  elem.classList.add('invalid')
  isValidForm = false
}

const validateInput = () => {
  isValidForm = true
  if(!inputName.value){
    invalidateElem(inputName)
  }

  if(!isValidEmail(inputEmail.value)){
    invalidateElem(inputEmail)
  }

  if(!isValidCPF(inputCPF.value)){
    invalidateElem(inputCPF)
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  validateInput()

  if(isValidForm){
    //POST - backend
    form.remove()
    message.classList.remove('error-hidden')
    console.log('validou enviou')
  }
})

inputName.addEventListener("input", () => {
  resetInput(inputName)
})

inputEmail.addEventListener("input", () => {
  resetInput(inputEmail)
})

inputCPF.addEventListener("input", () => {
  resetInput(inputCPF)
})