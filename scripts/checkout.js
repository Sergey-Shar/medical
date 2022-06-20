(function () {
    const radioDevilery = document.getElementsByName('devilery')

    const punktInput = document.querySelector('.checkout__punkt-input')

    const develiryAddress = document.querySelector('.checkout__devilery-address')

    

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

})()
