(function () {
    const radioDevilery = document.getElementsByName('devilery')

    const punktInput = document.querySelector('.checkout__punkt-input')

    const develiryAddress = document.querySelector('.checkout__devilery-address')

    const modalMask = document.querySelector('.modal-mask')

    const orderPoint = document.querySelector('.order-point')

    const btnOrder = document.querySelector('.checkout__punkt-btn')

    const btnOrderClose = document.querySelector('.order-point__btn-close')

    const btnShowHide = document.querySelectorAll('.order-point__btn-show-hide')

    radioDevilery.forEach(item => {
        item.addEventListener('change', (e) => {
            if (e.target.checked) {
                e.target.closest('div').style.border = '1px solid #10AE73'
                radioDevilery.forEach(e => {
                    if (!e.checked) {
                        e.closest('div').style.border = '1px dashed rgba(204, 201, 201, 0.5)'
                    }
                })
            }

            if (e.target.id === 'russia') {
                punktInput.style.position = 'relative' 
                punktInput.style.visibility = 'visible'
            }
            else if (e.target.id !== 'russia' && e.target.id === 'moscow') {
                punktInput.style.position = 'absolute'
                punktInput.style.visibility = 'hidden'
                develiryAddress.style.display = "block"
            }
            else {
                punktInput.style.position = 'absolute'
                punktInput.style.visibility = 'hidden'
                develiryAddress.style.display = "none"
            }
        })
    })

     const pay = document.getElementsByName('pay')

    pay.forEach(item => {
        item.addEventListener('change', (e) => {
            if (e.target.checked) {
                e.target.closest('div').style.border = '1px solid #10AE73'
                pay.forEach(e => {
                    if (!e.checked) {
                        e.closest('div').style.border = '1px dashed rgba(204, 201, 201, 0.5)'
                    }
                })
            }})
    })

    
    btnOrder.addEventListener('click', () => {
        modalMask.style.display = 'flex'
        orderPoint.style.display = 'block'
    })

    btnOrderClose.addEventListener('click', () => {
        modalMask.style.display = 'none'
        orderPoint.style.display = 'none'
    })

    btnShowHide.forEach((btn) => {   
        btn.addEventListener('click', (e) => {
          const orderPoint = e.target.parentElement.parentElement
          const orderTime = e.target.parentElement.previousElementSibling
          if (btn.innerText === 'Подробнее') {
            orderPoint.style.background  = "#f3f3f3"
            btn.innerText = 'Скрыть' 
            orderTime.style.display = 'flex'
          } else {
            orderPoint.style.background = "#fff"
            btn.innerText = 'Подробнее' 
            orderTime.style.display = 'none'
          }        
        })
      })

})()
