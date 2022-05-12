// let computer, user, player, result, choiceBtn;

// // player= document.querySelector('#player')
// computer= document.querySelector('#computer')

// choiceBtn.forEach(button => button.addEventListener('click', ()=> {
//     user= button.textContent;

//     computerTurn()
// }))

let rock= document.querySelector('#rock')
let player1

rock.onclick= ()=>{
    player1= rock.innerHTML
    document.getElementById('player').innerHTML= player1
}


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