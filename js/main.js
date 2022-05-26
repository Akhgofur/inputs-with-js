const elForm = document.querySelector('.inputs__form')
const elFirstName = document.querySelector('.inputs__input--first-name')
const elLastName = document.querySelector('.inputs__input--last-name')
const elEmail = document.querySelector('.inputs__input--email')
const elOrder = document.querySelector('.inputs__input--order')
const elBtn = document.querySelector('.inputs__btn')
const elUl = document.querySelector('.inputs__order-list')




function logEvent(event) {
    event.preventDefault()

    let elLi = document.createElement('li')
    elLi.className = ('inputs__order-item')
    
    let elName = document.createElement('p')
    elName.textContent = elFirstName.value + ' ' + elLastName.value
    elName.className = ('inputs__user-name')
    
    let elUserEmail = document.createElement('p')
    elUserEmail.textContent = elEmail.value
    elUserEmail.className = ('inputs__user-email')
    
    let elUserOrder = document.createElement('p')
    elUserOrder.textContent = elOrder.value
    elUserOrder.className = ('inputs__user-order')
    
    elLi.append(elName,elUserEmail,elUserOrder)

    elLi.append(elName,elUserEmail,elUserOrder)
    elUl.append(elLi)
}

elBtn.addEventListener('click', logEvent)