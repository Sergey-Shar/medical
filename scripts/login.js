(function () {
    const btnUser = document.querySelector('.header__user-btn')

    const modalMask = document.querySelector('.modal-mask')

    const modalLogin = document.querySelector('.login-modal__content')
    const modalRemindPassword = document.querySelector('.remind-password__content')
    const modalRemindPasswordFinish = document.querySelector('.remind-password__content-finish')

    const btnRemindPassword = document.querySelector('.login-modal__link-remind')
    const btnBack = document.querySelector('.remind-password__link-back')
    const btnSubmitRemindPassword = document.querySelector('.remind-password__btn-submit')

    const btnCloseModalLogin = document.querySelector('.login-modal__btn-close')
    const btnCloseModalRemindPassword = document.querySelector('.remind-password__btn-close')

    const closeModalTimeout = (sec) => {
        setTimeout(() => {
            modalMask.style.display = 'none'
            modalRemindPasswordFinish.style.display = 'none'
        }, sec)
    } 

    btnUser.addEventListener('click', (e) => {
        modalMask.style.display = 'flex'
        modalLogin.style.display = 'grid'

    })

    btnCloseModalLogin.addEventListener('click', (e) => {
        modalMask.style.display = 'none'
        modalLogin.style.display = 'none'
    })

    btnRemindPassword.addEventListener('click', (e) => {
        modalLogin.style.display = 'none'
        modalRemindPassword.style.display = 'flex'

    })

    btnBack.addEventListener('click', (e) => {
        modalRemindPassword.style.display = 'none'
        modalLogin.style.display = 'grid'

    })

    btnCloseModalRemindPassword.addEventListener('click', () => {
        modalMask.style.display = 'none'
        modalRemindPassword.style.display = 'none'
    })

    modalRemindPasswordFinish.addEventListener('click', (e) => {
        if (e.target.className === 'remind-password__btn-close' || 'main-btn remind-password__btn-submit') {
            modalMask.style.display = 'none'
            modalRemindPasswordFinish.style.display = 'none'
            closeModalTimeout(0)
        }
    })

    btnSubmitRemindPassword.addEventListener('click',  (e) => {
        modalRemindPassword.style.display = 'none'
        modalRemindPasswordFinish.style.display = 'flex'
        closeModalTimeout(3000)
        }
    )

})()