const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
let selectedCards = [];
let matchedCards = [];

function createBoard() {
    const gameBoard = document.getElementById('game-board');
    cards.sort(() => 0.5 - Math.random()).forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.cardValue = card;
        cardElement.addEventListener('click', selectCard);
        gameBoard.appendChild(cardElement);
    });
}

function selectCard(event) {
    const card = event.target;
    if (selectedCards.length < 2 && !card.classList.contains('matched')) {
        card.textContent = card.dataset.cardValue;
        selectedCards.push(card);
        if (selectedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

function checkMatch() {
    const [firstCard, secondCard] = selectedCards;
    if (firstCard.dataset.cardValue === secondCard.dataset.cardValue) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedCards.push(firstCard, secondCard);
    } else {
        firstCard.textContent = '';
        secondCard.textContent = '';
    }
    selectedCards = [];
}

createBoard();
