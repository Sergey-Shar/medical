const btnShowPass = document.querySelector('.show-pass')
const inputPass = document.getElementById('login-pass')

btnShowPass.addEventListener('click', () => {
    inputPass.classList.toggle('show')
    if (inputPass.className === 'show') {
        inputPass.type = 'text'
      }
      else {
        inputPass.type = 'password'
      }
})