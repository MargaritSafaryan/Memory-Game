const cards = document.querySelectorAll(".card");
const cardsDeck = document.querySelector(".cards-wrapper");

let modal = document.getElementById("modal");

let counter = document.querySelector(".moves");

let modalClose = document.querySelector(".close");

let moves = 0;
let matchCards = 0;
let openedCards = [];

let hasFlippedCard = false;
let firstCard, secondCard;

document.body.onload = newGame();

function newGame() {

    // remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
        cards[i].classList.remove("flip", "hide", "match");
    }

    //shuffle deck
    shuffle();

    // resets
    matchCards = 0;
    moves = 0;
    counter.innerHTML = moves;
  
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });
}

function moveCounter() {
    moves++;
    counter.innerHTML = moves;
}

function flipCard() {
    this.classList.toggle("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;       
        checkMatching();
    }
}

function checkMatching() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework && firstCard.id !== secondCard.id;
    if(isMatch) {
        matchCards++;
        if (matchCards == 8) congratulations();
        moveCounter();
        hideCards();
    } else if (firstCard.id !== secondCard.id){
        moveCounter();
        unflipCards();
    }
}

function hideCards() {
    setTimeout(() => {
        firstCard.classList.add("match");
        secondCard.classList.add("match");
    }, 500);

    setTimeout(() => {
        firstCard.classList.add("hide");
        secondCard.classList.add("hide");
    }, 600);
}

function unflipCards() {
    setTimeout(() =>{
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
    }, 500)
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
};

function congratulations(){  
        // show congratulations modal
        setTimeout(() => modal.classList.add("show"),1000);
        
        //showing moves on modal
        document.getElementById("finalMove").innerHTML = moves;

        //closeicon on modal
        closeModal();   
};

function closeModal(){
    modalClose.addEventListener("click", function(e){
        modal.classList.remove("show");
        newGame();
    });
}

function playAgain(){
    modal.classList.remove("show");
    newGame();
}
