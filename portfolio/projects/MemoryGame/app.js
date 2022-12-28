const cards = document.querySelectorAll(".card")
const counterEl = document.getElementById("counter")
const matchesEl = document.getElementById("matches")

var [flippedFirstCard, flippedSecondCard] = [false, false]
var firstCard, secondCard
var count = 0
var matchedCards = 0

cards.forEach((c) => c.addEventListener("click", flipCard))

function flipCard() {
  if (!flippedFirstCard){
    flippedFirstCard = true
    firstCard = this
    firstCard.classList.add("flip")
    firstCard.classList.add("disabled")
  } else if(!flippedSecondCard) {
    flippedSecondCard = true
    secondCard = this
    secondCard.classList.add("flip")
    secondCard.classList.add("disabled")
    turnsCounter()
    check()
  }
}

function check(){
  if (firstCard.dataset.image === secondCard.dataset.image){
    sameCards(firstCard, secondCard)
    reset()
  } else if (firstCard != secondCard) {
    setTimeout(()=>{
      firstCard.classList.remove("flip")
      firstCard.classList.remove("disabled")
      secondCard.classList.remove("flip")
      secondCard.classList.remove("disabled")
      reset()
    }, 750)
  }
}

function sameCards(firstCard, secondCard){
  firstCard.classList.add("matched")
  secondCard.classList.add("matched")
  matchesCounter()
  checkForCompletion()
}

function reset(){
  [flippedFirstCard, flippedSecondCard] = [false, false]
  [firstCard, secondCard] = [null, null]
}

function turnsCounter(){
  count++
  counterEl.textContent = count
}

function matchesCounter(){
  matchedCards++
  matchesEl.textContent = matchedCards
}

function checkForCompletion(){
  if(matchedCards === ((cards.length)/2)){
    setTimeout(()=>{window.alert(`You won in ${count} turns.`)},500)
  }
}

(function shuffle(){
  cards.forEach((c)=> {
    var index = Math.floor(Math.random()*16)
    c.style.order = index
  })
})()