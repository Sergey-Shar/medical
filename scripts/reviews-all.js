(function () {
  const btnWriteReview = document.querySelector('.reviews__button')
  const btnCloseWriteReview = document.querySelector('.write-review__btn-close')
  const formWriteReview = document.querySelector('.write-review')
  btnWriteReview.addEventListener('click', (e) => {
    e.preventDefault()
    formWriteReview.style.transform = 'translateX(0)'
    document.body.style.overflow = 'hidden'
  })
  btnCloseWriteReview.addEventListener('click', (e) => {
  e.preventDefault()
  formWriteReview.style.transform = 'translateX(-3000px)'
    document.body.style.overflow = 'visible'
  })
})()