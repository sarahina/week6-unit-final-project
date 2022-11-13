// The completed project should, when executed, do the following:
// • Deal 26 Cards to each Player from a Deck of 52 cards.
// • Iterate through the turns where each Player plays a Card.
// • The Player who played the higher card is awarded a point
//     ◦ Ties result in zero points for both Players
// • After all cards have been played, display the score and declare the winner.
// • Write a Unit Test using Mocha and Chai for at least one of the functions you write.


//I created an array for card suits in Deck 
const SUITS = ['♥', '♠', '♣', '♦'];

// I created an array of two things: card name and the values for the cards
const VALUES = [
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9],
    ['10', 10],
    ['Jack', 11],
    ['Queen', 12],
    ['King', 13],
    ['Ace', 14],
];


// This class represents both players in the game
class Player {
    constructor() {
        this.cards = [];
        this.score = 0;
    }
}


// This class represents a card in the deck
class Card {
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value;
        this.label = `${this.name} of ${this.suit}`
    }
}

// This is the main game
class Game {
    constructor() {
        this.player1 = new Player();
        this.player2 = new Player();
        this.cards = [];
    }

    // This method starts the game
    start() {
        this.newDeck(); //This calls the newDeck method which generates a new deck of cards
        this.shuffle(); //This calls the shuffle method which randomizes the order fo the card

        let numberOfCards = this.cards.length / 2;
        // Looping through half the deck and give 26 cards to each player
        for (let n = 0; n < numberOfCards; n++) {
            this.player1.cards.push(this.cards.pop())
            this.player2.cards.push(this.cards.pop())
        }
        console.log('ROUND\t| PLAYER 1\t| PLAYER 2\t| WINNER! ')
        console.log('---------------------------------------------------')

        // Looping through 26 cards
        for (let c = 1; c <= numberOfCards; c++) {

            // Getting a card for each player
            let p1Card = this.player1.cards.pop()
            let p2Card = this.player2.cards.pop()

            // Comparing card values and assigning points/winner
            if (p1Card.value > p2Card.value) {
                this.player1.score += 1
                console.log(`${c}\t| ${p1Card.label}\t| ${p2Card.label}\t| Player 1 `)

            } else if (p1Card.value < p2Card.value) {
                this.player2.score += 1
                console.log(`${c}\t| ${p1Card.label}\t| ${p2Card.label}\t| Player 2 `)

            } else {
                console.log(`${c}\t| ${p1Card.label}\t| ${p2Card.label}\t| Tie! `)
            }
        }
        console.log('---------------------------------------------------')
        console.log("                   FINAL SCORE                     ")
        console.log('---------------------------------------------------')
        console.log('PLAYER 1\t\t | \t\tPLAYER 2')
        console.log('___________________________________________________')
        console.log(`${this.player1.score} points! \t\t |\t\t${this.player2.score} points!`)
        console.log("\n")

        if (this.player1.score > this.player2.score) {
            console.log(`The winner is PLAYER 1 with ${this.player1.score} points!`)
        } else if (this.player2.score > this.player1.score) {
            console.log(`The winner is PLAYER 2 with ${this.player2.score} points!`)
        } else {
            console.log("It's a Tie!");
        }
        console.log("\n\n\n")
    }

    // This method generates a new deck of cards
    newDeck() {
        for (let s = 0; s < SUITS.length; s++) {
            for (let v = 0; v < VALUES.length; v++) {
                let card = new Card(
                    SUITS[s],
                    VALUES[v][0],
                    VALUES[v][1]
                )
                this.cards.push(card)
            }
        }
    }

    // This method takess a minimum and maximum number and returns a random integer between number
    randInt(min, max) {
        return Math.floor(Math.random() * (max - min + min)) + min;
    }

    // This method randomizes the order of the card
    shuffle() {
        let shuffled = []
        let lenOfCards = this.cards.length

        // Looping through the length of the card and picking a card one at a time randomly 
        for (let i = 0; i < lenOfCards; i++) {
            let index = this.randInt(0, this.cards.length)
            let card = this.cards[index]
            shuffled.push(card) // adds the random card to the shuffled cards one at a time
            this.cards.splice(index, 1)
        }
        this.cards = shuffled
    }

}

let game = new Game();
game.start();
