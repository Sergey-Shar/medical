(function () {
    const addAddressBtn = document.querySelector('.account__delivery-address-btn')

    const currentAddress = document.querySelector('.account__delivery-address-current')

    const newAddress = document.querySelector('.account__delivery-add-new-address')

    const cancelNewAddressBtn = document.querySelector('.account__delivery-new-address-cancel')

    addAddressBtn.addEventListener('click', () => {
        addAddressBtn.setAttribute("disabled", "disabled")
        newAddress.classList.add('add-address')
        currentAddress.classList.add('hidden')
    })

    cancelNewAddressBtn.addEventListener('click', () => {
        addAddressBtn.removeAttribute("disabled", "disabled")
        newAddress.classList.remove('add-address')
        currentAddress.classList.remove('hidden')
    })

    /////////////////////////////////////////////////

    const tabsFirst = document.getElementById('tab1')
    const tabsSecond = document.getElementById('tab2')

    const history = document.querySelector('.history')

    const accountForm = document.querySelector('.account__form')

    let isShowBlok = true



    isShowBlok ? history.style.display = 'none' : history.style.display = 'block'


    tabsFirst.addEventListener('click', () => {
        isShowBlok = true

        if (isShowBlok) {
            history.style.display = 'none'
            accountForm.style.display = 'block'
        } else {
            history.style.display = 'block'
            accountForm.style.display = 'none'
        }

    })

    tabsSecond.addEventListener('click', () => {
        isShowBlok = false

        if (isShowBlok) {
            history.style.display = 'none'
            accountForm.style.display = 'block'
        } else {
            history.style.display = 'block'
            accountForm.style.display = 'none'
        }
    })

    const historyDiteal = document.querySelector('.history-diteal')


    const ditealBtn = document.querySelectorAll('.history__table-btn')

    const backHistoryBtn = document.querySelector('.history-diteal__arrow-btn')


    const isShowDiteal = false

    isShowDiteal ? historyDiteal.style.display = 'block' : historyDiteal.style.display = 'none'

    ditealBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            historyDiteal.style.display = 'block'
            history.style.display = 'none'
        })
    })

    backHistoryBtn.addEventListener('click', () => {
        historyDiteal.style.display = 'none'
        history.style.display = 'block'
    })

    ///////////////////////////////////////////////////////

    const passwortIcon = document.querySelectorAll('.account_password-icon')
    const inputsPassword = document.querySelectorAll('.pass')

    passwortIcon.forEach(icon => {
        icon.addEventListener('click', (e) => {
            inputsPassword.forEach(i => {
                if (i.id === e.currentTarget.id && i.type === 'password') {
                    i.type = 'text'
                } else {
                    i.type = 'password'
                }
            })
        })
    })

})()


