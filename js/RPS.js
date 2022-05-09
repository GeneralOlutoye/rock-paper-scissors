let PlayerName, display, computer,  startBtn, player, player1, player2, 
result,rock, papper, scissors;

startBtn= document.getElementById('start')
result= document.getElementById('result')
rock= document.getElementById('rock')
papper= document.getElementById('papper')
scissors= document.getElementById('scissors')

startBtn.addEventListener('click', ()=> {
    let name= PlayerName.value
    player= name.toUpperCase()
    player1.textContent= `${player}:`
})

rock.addEventListener('click', ()=> {
    display= 'rock'
    player1.textContent= `${player}: ${display}`
    result.textContent= checkWinner()
    computerText.textContent= `computer : ${computer}`
})

papper.addEventListener('click', ()=>{
    
})
