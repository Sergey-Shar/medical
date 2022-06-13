// window.onload = () => {
//   createReangeInput()
// }

// const createReangeInput = () => {

//   const MIN_GAP = 7

//   const inputRangeFrom = document.querySelector('.range-input__from')
//   const inputRangeTo = document.querySelector('.range-input__to')

//   const valueRangeFrom = document.querySelector('.range-input__value-from')
//   const valueRangeTo = document.querySelector('.range-input__value-to')

//   const rangeTrack = document.querySelector('.range-input__track')

//   const inputRangeFromMaxValue = document.querySelector('.range-input__from').max

//   const fillColor = () => {
//     let persentFrom = (inputRangeFrom.value / inputRangeFromMaxValue) * 100
//     let persentTo = (inputRangeTo.value / inputRangeFromMaxValue) * 100

//     rangeTrack.style.background = `linear-gradient( to right, #cfcfcf ${persentFrom}% , #10ae73 ${persentFrom}% , #10ae73 ${persentTo}% , #cfcfcf ${persentTo}%)`

//   }
//   const getValueRangeFrom = () => {
//     if (parseInt(inputRangeTo.value) - parseInt(inputRangeFrom.value) <= MIN_GAP) {
//       inputRangeFrom.value = parseInt(inputRangeTo.value) -
//         MIN_GAP;
//     }
//     valueRangeFrom.textContent = `от ${inputRangeFrom.value}`
//     fillColor()
//   }

//   const getValueRangeTo = () => {
//     if (parseInt(inputRangeTo.value) - parseInt(inputRangeFrom.value) <= MIN_GAP) {
//       inputRangeTo.value = parseInt(inputRangeFrom.value) +
//         MIN_GAP;
//     }
//     valueRangeTo.textContent = `до ${inputRangeTo.value}`
//     fillColor()
//   }

//   getValueRangeFrom()
//   getValueRangeTo()

//   inputRangeFrom.addEventListener('input', getValueRangeFrom)

//   inputRangeTo.addEventListener('input', getValueRangeTo)
// }

//----------------------------------------


const btnGrid = document.querySelector('.cards-block__grid')
const btnList = document.querySelector('.cards-block__list')
const cardsGridWrapper = document.querySelector('.cards-block__main')
const swiperCardWrapper = document.querySelectorAll('.swiper-card__products')
const swiperCardDescription = document.querySelectorAll('.swiper-card__description-block')
const swiperCardFooter = document.querySelectorAll('.swiper-card__footer')
const gridIcon = document.querySelector('.cards-block__grid-icon')
const listIcon = document.querySelector('.cards-block__list-icon')

btnGrid.addEventListener('click', () => {
  btnGrid.style.background = 'rgb(7, 196, 127)'
  btnList.style.background = '#fff'
  gridIcon.style.stroke = '#fff'
  listIcon.style.stroke = '#c2c2c2'
  cardsGridWrapper.classList.remove('list')
  swiperCardWrapper.forEach(item => item.classList.remove('list'))
  swiperCardDescription.forEach(item => item.classList.remove('list'))
  swiperCardFooter.forEach(item => item.classList.remove('list'))


})

btnList.addEventListener('click', () => {
  btnList.style.background = 'rgb(7, 196, 127)'
  gridIcon.style.stroke = '#c2c2c2'
  btnGrid.style.background = '#fff'
  listIcon.style.stroke = '#fff'
  cardsGridWrapper.classList.add('list')
  swiperCardWrapper.forEach(item => item.classList.add('list'))
  swiperCardDescription.forEach(item => item.classList.add('list'))
  swiperCardFooter.forEach(item => item.classList.add('list'))
})


const filterBtn = document.querySelector('.cards-block__filter-btn')

const filterModal = document.querySelector('.filter-modal')

const closeFilterBtn = document.querySelector('.filter-modal__close-btn')

const overlay = document.querySelector('.filter-modal__overlay')

const openFilterModal = () => {
  filterModal.classList.add('open')
  document.body.style.overflow = 'hidden'
}

const closeFilterModal = () => {
  filterModal.classList.remove('open')
  document.body.style.overflow = 'visible'
}

filterBtn.addEventListener('click', openFilterModal)

closeFilterBtn.addEventListener('click', closeFilterModal)






