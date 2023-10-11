const passDisplay = document.getElementById('pass-display')
const generateBtn = document.getElementById('generate-btn')
const cpBtn = document.getElementById('cp-btn')
const range = document.getElementById('range')
const all = document.querySelectorAll('input[type="checkbox"]')

const allCharacters = {
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*(){}_+=~|/?><',
}

function generateDictionary() {
  let dictionary = ''
  for (i = 0; i < all.length; i++) {
    if (all[i].checked) {
      dictionary += allCharacters[all[i].value]
    }
  }
  return dictionary
}

function generatePassword() {
  const dictionary = generateDictionary()

  if (!dictionary) return alert('Please select at least 1 type.')

  let password = ''

  while (password.length < parseInt(range.value)) {
    password += dictionary[Math.floor(Math.random() * dictionary.length)]
  }

  passDisplay.value = password
}

function copyPassword() {
  passDisplay.select() //for selecting input field value.
  passDisplay.setSelectionRange(0, 99999) //for mobile device
  navigator.clipboard.writeText(passDisplay.value) //copy selected value in device clipboard
}

// const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
// const numbers = '0123456789'
// const symbols = '!@#$%^&*(){}_+=~|/?><'
