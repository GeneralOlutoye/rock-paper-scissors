// let player= document.getElementById('player1')
let p
// document.getElementById('rock').onclick= ()=>{
//     p= rock.innerHTML
//     document.getElementById('player1').innerHTML= `PLAYER: ${p}`
// }

document.querySelectorAll('.choiceBtn').onclick= ()=>{
    p= choiceBtn.value
    switch(p){
        case 'ROCK':
            document.getElementById('player1').innerHTML= `PLAYER: ${p}`
            break;
        case 'PAPER':  
            document.getElementById('player').innerHTML= `PLAYER: ${player}`
            break;
        case 'SCISSORS':
            document.getElementById('player').innerHTML= `PLAYER: ${player}`
            break;
    }  
}

// choiceBtn.addEventListener('click',()=>{
//     switch(player1){
//         case 'ROCK':
//             document.getElementById('player1').innerHTML= `PLAYER: ${player1}`
//             break;
//         case 'PAPER':
//             document.getElementById('player1').innerHTML= `PLAYER: ${player1}`
//             break;
//         case 'SCISSORS':
//             document.getElementById('player1').innerHTML= `PLAYER: ${player1}`
//             break;
//     }


// })
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