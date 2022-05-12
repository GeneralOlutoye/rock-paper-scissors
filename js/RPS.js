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
    player1.textContent= `Player: ${player}`  
    computerText.textContent= `computer : ${computer}`
    result.textContent= checkWinner()
}))

computerTurn =>{
    const randNum= Math.floor(Math.random()*3) +1

    switch(randNum){
        case 1:
            computer= 'ROCK'
            break;
        case 2: 
            computer= 'PAPER'
            break;
        case 3:
            computer= 'SCISSORS'
            break;
    }
}
function checkWinner(){
    if(player==computer){
        return `DRAW`
    }
    else if(computer==`ROCK`){
        return(player==`PAPER`) ? `YOU WIN` : `YOU LOSE`
    }
    else if(computer==`PAPER`){
        return(player==`SCISSORS`)? `YOU WIN` : `YOU LOSE`
    }
    else if(computer==`SCISSORS`){
        return(player==`ROCK`)? `YOU WIN` : `YOU LOSE`
    }
}