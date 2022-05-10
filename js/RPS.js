let PlayerName, display, computer, startBtn, player, player1, 
result,choiceBtn;

startBtn= document.getElementById('start')
result= document.getElementById('result')
choiceBtn= document.querySelectorAll('choiceBtn')

startBtn.addEventListener('click', ()=> {
    let name= PlayerName.value
    player= name.toUpperCase()
    player1.textContent= `${player}:`
})

choiceBtn.forEach(button => button.addEventListener('click', ()=> {
    player= button.textContent;
    computerTurn()
    player1.textContent= `${player}: ${display}`  
    result.textContent= checkWinner()
    computerText.textContent= `computer : ${computer}`
}))

computerTurn =>{
    const randNum= Math.floor(Math.random()*3)+1
}