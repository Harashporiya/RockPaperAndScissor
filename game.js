const play = document.getElementById('play-button')
const none2 = document.getElementById('none2')
none2.style.display = 'none'
play.onclick=()=>{
    document.getElementById('none').style.display = 'none'
    none2.style.display = 'initial'
}


const rockLogo = document.getElementById('rock-logo');
const paperLogo = document.getElementById('paper-logo');
const scissorsLogo = document.getElementById('scissors-logo');


const rockHand = document.getElementById('rock-hand')
const paperHand  = document.getElementById('paper-hand')
const scissorsHand = document.getElementById('scissors-hand')

const rockHand2 = document.getElementById('rock-hand2')
const paperHand2  = document.getElementById('paper-hand2')
const scissorsHand2 = document.getElementById('scissors-hand2')

let score =0;
let draw = 0;
let scoreComputer = 0;
let rounds = parseInt(prompt("How many to rounds in game."))
let currentRound = 0;

rockLogo.onclick=()=>{
   rockHand.src="rock-hand.png"
   paperHand.src=""
   scissorsHand.src=""
   userChoice = "r"
   compHand()
   checkScore()
   
  }
paperLogo.onclick=()=>{
    paperHand.src="paper-hand.png"
    scissorsHand.src=""
    rockHand.src=""
    userChoice = "p"
    compHand()
    checkScore()
   
  }
scissorsLogo.onclick=()=>{
    scissorsHand.src="scissors-hand.png"
    paperHand.src=""
    rockHand.src=""
    userChoice = "s"
    compHand()
    checkScore()
   
}


function compHand(){
  let choice = Math.floor(Math.random()*3)
  if(choice==0){
    rockHand2.src="rock-hand.png"
    paperHand2.src=""
    scissorsHand2.src=""
    computerChoice ="r"
  }
  else if(choice==1){
    paperHand2.src="paper-hand.png"
    scissorsHand2.src=""
    rockHand2.src=""
    computerChoice ="p"
  }
  else if(choice==2){
    scissorsHand2.src="scissors-hand.png"
    paperHand2.src=""
    rockHand2.src=""
    computerChoice ="s"
  }
}

function checkScore(){
  if(userChoice=='r' && computerChoice=='r'){
      console.log("DRAW")
        draw++
     }
     else if(userChoice=='p' && computerChoice=='p'){
      console.log("DRAW")
        draw++
     }
     else if(userChoice=='s' && computerChoice=='s'){
      console.log("DRAW")
        draw++
     }
    else if(userChoice=='r' && computerChoice=='p'){
      console.log("computerChoice Wins")
      scoreComputer++
     }
    else if(userChoice=='r' && computerChoice=='s'){
        console.log("userChoice Wins")
        score++
    }
    else if(userChoice=='p' && computerChoice=='s'){
        console.log("ComputerChoice Wins")
        scoreComputer++
    }
    else if(userChoice=='p' && computerChoice=='r'){
        console.log("userChoice Wins")
        score++
    }
    else if(userChoice=='s' && computerChoice=='p'){
        console.log("userChoice Wins")
        score++
    }
    else if(userChoice=='s' && computerChoice=='r'){
        console.log("computerChoice Wins")
        scoreComputer++
    }
    document.getElementById('userScore').innerHTML = score
    document.getElementById('compScore').innerHTML = scoreComputer


    currentRound++;
    if(currentRound >= rounds){
      endGame();
    }

}
function endGame(){
   if(score > scoreComputer){
    alert("You won the game")
    
   }
   else if(score < scoreComputer){
    alert("Computer won")
   }
   else {
    alert("Draw")
   }
   resetGame();
}
function resetGame(){
  score = 0;
  scoreComputer = 0;
  currentRound = 0;
  rockHand.src = "";
    paperHand.src = "";
    scissorsHand.src = "";
    rockHand2.src = "";
    paperHand2.src = "";
    scissorsHand2.src = "";
    document.getElementById('userScore').innerHTML = score
    document.getElementById('compScore').innerHTML = scoreComputer
}


