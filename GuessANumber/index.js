let random = parseInt(Math.random()*100);
const submit = document.getElementById("submit");
const guessedNum = document.getElementById("guessF");
const remaining = document.querySelector("#left");
const guessSlot =document.querySelector("#previous");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver =document.querySelector(".results");

const p = document.createElement("p");

let prevguess = [];
let numOfguess =1;
let playGame = true;
if(playGame){
    submit.addEventListener("click" , function(e){
        e.preventDefault();
        const guess = parseInt(guessedNum.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number!");
    }
    else if(guess<1){
        alert("Please enter a number greater than 1");
    }
    else if(guess>100){
        alert("Please enter a number less than 100");
    }
    else{
        prevguess.push(guess);
        if(numOfguess===11){
            displaymessage(`Game over! Random number was ${random}`);
            endGame();
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
      if(guess===random){
        displaymessage(`Wooho, You won!`);
        endGame();
      }
      else if(guess<random){
        displaymessage("Your number is less is less than random number");
        
      }
      else if(guess>random){
        displaymessage("Your number is less is greater than random number");
        
      }
      
}

function displaymessage(message){
  lowOrHigh.innerHTML= `<h2>${message}</h2>`;
}

function displayguess(guess){
  guessedNum.value = "";
  guessSlot.innerHTML += `${guess} `;
  numOfguess++;
  remaining.innerHTML = `${11 - numOfguess}`
}
function endGame(){
    guessedNum.value = '';
    guessedNum.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame="false";
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function(e){
        random = parseInt(Math.random()*100);
        prevguess =[];
        numOfguess=1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numOfguess}`;
        guessedNum.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    })
    
}