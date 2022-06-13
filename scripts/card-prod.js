
const cardImage = document.querySelector('.card__foto')

const cardImageMini = document.querySelectorAll('.card__foto-mini')

cardImageMini.forEach(image => {
    image.addEventListener('click', (event) => {
        cardImage.src = `./common/cards-img/img-card${event.currentTarget.id}.png`
    })
})
