function getComputerChoice(){
    // Generates a random number between 0 and 2
    // 0 = Rock
    // 1 = paper
    // scissor
let num = Math.floor(Math.random() * 3)
if(num == 0){
    return "rock"
}
else if(num == 1){
    return "paper"
}
return "scissor"
}

function playRound(playerSelection, computerSelection) {
    /* 
    Get selection from player
    Get selection from computer
    Compare selections
    return the winner with a string
     */
    let player = playerSelection.toLowerCase()
    let computer = computerSelection
    console.log(computer)
    if( 
        (player == "rock" && computer == "scissor")||
        (player == "paper" && computer == "rock")||
        (player == "sicssor" && computer == "paper") )
        {
       return 'Player Wins: ' + player + ' beats ' + computer + '.'
    }
    if( 
        (computer == "rock" && player == "scissor")||
        (computer == "paper" && player == "rock")||
        (computer == "sicssor" && player == "paper") )
        {
       return 'Computer Wins: ' + computer + ' beats ' + player + '.'
    }
    return "Tie!"
}
console.log(playRound("Rock", getComputerChoice()))
  