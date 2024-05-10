'use strict'

const btnOne = document.querySelector('.numberOne')
const btnTwo = document.querySelector('.numberTwo')
const btnThree = document.querySelector('.numberThree')
const btnFour = document.querySelector('.numberFour')
const btnFive = document.querySelector('.numberFive')
const btnSix = document.querySelector('.numberSix')
const btnSeven = document.querySelector('.numberSeven')
const btnEight = document.querySelector('.numberEight')
const btnNine = document.querySelector('.numberNine')
const btnZero = document.querySelector('.numberZero')
const btnErase = document.querySelector('.eraseBtn')

const btnAdition = document.querySelector('.additionBtn')
const btnMinus = document.querySelector('.minusBtn')
const btnDivision = document.querySelector('.divisionBtn')
const btnMultiply = document.querySelector('.multiplyBtn')
const btnResult = document.querySelector('.showResultBtn')

const screen = document.querySelector('.screenNumbers')

btnOne.addEventListener('click', function () {
  screen.textContent = screen.textContent + 1
})
btnTwo.addEventListener('click', function () {
  screen.textContent = screen.textContent + 2
})
btnThree.addEventListener('click', function () {
  screen.textContent = screen.textContent + 3
})
btnFour.addEventListener('click', function () {
  screen.textContent = screen.textContent + 4
})
btnFive.addEventListener('click', function () {
  screen.textContent = screen.textContent + 5
})
btnSix.addEventListener('click', function () {
  screen.textContent = screen.textContent + 6
})
btnSeven.addEventListener('click', function () {
  screen.textContent = screen.textContent + 7
})
btnEight.addEventListener('click', function () {
  screen.textContent = screen.textContent + 8
})
btnNine.addEventListener('click', function () {
  screen.textContent = screen.textContent + 9
})
btnZero.addEventListener('click', function () {
  screen.textContent = screen.textContent + 0
})

let account
let accountType

const accountRealizer = function (a, b) {
  if (accountType === 'sum') {
    return a + b
  } else if (accountType === 'minus') {
    return a - b
  } else if (accountType === 'division') {
    return a / b
  } else if (accountType === 'multiply') {
    return a * b
  }
}

btnAdition.addEventListener('click', function () {
  account = Number(screen.textContent)
  accountType = 'sum'
  screen.textContent = ''
})

btnMinus.addEventListener('click', function () {
  account = Number(screen.textContent)
  accountType = 'minus'
  screen.textContent = ''
})

btnDivision.addEventListener('click', function () {
  account = Number(screen.textContent)
  accountType = 'division'
  screen.textContent = ''
})

btnMultiply.addEventListener('click', function () {
  account = Number(screen.textContent)
  accountType = 'multiply'
  screen.textContent = ''
})

btnResult.addEventListener('click', function () {
  screen.textContent = accountRealizer(account, Number(screen.textContent))
})

btnErase.addEventListener('click', function () {
    screen.textContent = ''
    account = ''
    accountType = ''
})