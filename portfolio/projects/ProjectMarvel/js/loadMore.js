const hiddenClass = "hidden"
const hiddenCardClass = "hiddenCard"
const maxCards = 3
const loadCards = 3

const loadBtn = document.querySelector(".loadMore")

var cards = document.getElementsByClassName("cardContainer")
cards = Array.from(cards)

var cardInfo = document.getElementsByClassName("cardInfo")
cardInfo = Array.from(cardInfo)

const hideCards = () => {cards.forEach((element, index) => {
    if (index > maxCards-1) {
        element.classList.add(hiddenCardClass)
    }
})}
hideCards()

const hideCardInfo = () => {cardInfo.forEach((element, index) => {element.classList.add(hiddenClass)})}
hideCardInfo()

const loadMore = () => {
    var hiddenCards = document.getElementsByClassName(hiddenCardClass)
    hiddenCards = Array.from(hiddenCards)
    hiddenCards.forEach((element,index) => {
        if (index < loadCards) {
            element.classList.remove(hiddenCardClass)
        }
        if (document.querySelectorAll(`.${hiddenCardClass}`).length === 0) {
            loadBtn.classList.add(hiddenClass)
        }
    }
    )
}

loadBtn.addEventListener("click", () => {
    loadMore()
})

const collapse = () => {
    hideCards()
    hideCardInfo()
    loadBtn.classList.remove(hiddenClass)
}