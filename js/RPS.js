let computer, startBtn, player, result,choiceBtn;

result= document.getElementById('result')
choiceBtn= document.querySelectorAll('#choiceBtn')

let rock= document.querySelector('#rock')
let player1

// document.getElementById('player1').innerHTML= `PLAYER: ${player1}`

choiceBtn.addEventListener('click', (i)=>{
    i= rock.innerHTML
    switch(i){
        case 'ROCK':
            document.getElementById('player1').innerHTML= `PLAYER: ${player1}`
            break;
        case 'PAPER':
            document.getElementById('player1').innerHTML= `PLAYER: ${player1}`
            break;
        case 'SCISSORS':
            document.getElementById('player1').innerHTML= `PLAYER: ${player1}`
            break;
    }
})


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