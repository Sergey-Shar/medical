(function () {
    const radioPerson = document.getElementsByName('person')
    const registrationOrganizationData = document.querySelector('.registration__organization-data')
    const registrationNaturalPerson = document.querySelector('.registration__natural-person')
    const registrationLegalPerson = document.querySelector('.registration__legal-person')

    radioPerson.forEach((item, i) => {
        item.addEventListener('change', (e) => {
            if (e.target.id === 'legal-person') {
                registrationOrganizationData.style.display = 'block'
                registrationNaturalPerson.classList.add('not-active')
                registrationLegalPerson.classList.add('active')
            } else {
                registrationOrganizationData.style.display = 'none'
                registrationNaturalPerson.classList.remove('not-active')
                registrationLegalPerson.classList.remove('active')
            }
        })
    })

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


