import * as el from './elemens.js'

let firstValue
let accountType

el.signalBtns.addEventListener('click', function (e) {
  if (e.target.classList.contains('signalBtn')) {
    firstValue = Number(el.screen.textContent)
    accountType = e.target.dataset.type
    el.screen.textContent = ''
  }
})

el.btnsWrapper.addEventListener('click', function (e) {
  const clicked = e.target
  if (clicked.classList.contains('numberBtn')) {
    el.screen.textContent += clicked.textContent
  }
})

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

el.btnResult.addEventListener('click', function () {
  el.screen.textContent = accountRealizer(
    firstValue,
    Number(el.screen.textContent)
  )
})

el.btnErase.addEventListener('click', function () {
  el.screen.textContent = ''
  firstValue = ''
  accountType = ''
})