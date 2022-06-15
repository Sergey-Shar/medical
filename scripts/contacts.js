const btnOpenMobileAside = document.querySelector('.mobile-aside__link--title')
const mobileAside = document.querySelector('.mobile-aside')
const chevrone = document.querySelector('.aside-chevrone')

btnOpenMobileAside.addEventListener('click', () => {
    mobileAside.classList.toggle('open')
    if (mobileAside.className === 'mobile-aside open') {
        mobileAside.style.display = 'block'
        chevrone.style.transform = 'rotate(270deg)'
      }
      else {
        mobileAside.style.display = 'none'
        chevrone.style.transform = 'rotate(90deg)'   
      }
} )