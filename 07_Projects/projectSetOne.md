# Project Releted TO DOM
# Project Link - 
[Click Here]

# Solution Code

## Project 1 BG Color Changer
```
JavaScript
console.log('Prasad')
const btns = document.querySelectorAll('.btn')
console.log(btns)

const body = document.querySelector('body')

btns.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        } else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        } else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'white'
        } else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            body.style.color = 'black'
        }
        
    })
})
```

## Project 2 BMI Calculator
```
JavaScript
console.log('Prasad')
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const results = document.querySelector('#results')
    
    if (height == '' || height == null || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give valid height"
    } else if (weight == '' || weight == null || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give valid height"
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<spam>${bmi}</span>`
    }
    
})

```
## Project 3 Digital Clock
```
const clock = document.querySelector('#clock')

setInterval(() => {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## Project 4 Guess The Number
```
let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert(`Please Enter a Valid Number`)
    } else if (guess < 1) {
        alert(`Please Enter a Valid Number`)
    } else if (guess > 100) {
        alert(`Please Enter a Valid Number`)
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You Guessed t0 right`)
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is to Low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is to High`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(message){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame>Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(message){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
        playGame = true
    })
}


```
