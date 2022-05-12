let computer, startBtn, player1, player, result,choiceBtn;

// startBtn= document.getElementById('start')
player1= document.querySelector('#player1')
result= document.getElementById('result')
choiceBtn= document.querySelectorAll('choiceBtn')

// startBtn.addEventListener('click', ()=> {
//     let name= PlayerName.value
//     player= name.toUpperCase()
//     player1.textContent= `${player}:`
// })

choiceBtn.forEach(button => button.addEventListener('click', ()=> {
    player= button.textContent;
    computerTurn()
}))

function computerwork (){
    const answer = Math.floor(Math.random()*3) +1;

    if(answer == 1){
        computer = "PAPER"
    } 
    else if (answer == 2){
        computer = "SCISSORS"
    }
    else if (answer == 3){
        computer = "ROCK"
    }
}
function checkWinner() {
    if(computer == player){
        return "A TIE!";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "YOU WIIN!" :"YOU LOSE!"
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIIN!" :"YOU LOSE!"
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIIN!" :"YOU LOSE!"
    }
}