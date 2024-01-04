let playerScore 
let computerScore 

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

//Funtion where it plays a round of rock paper scissor
function playRound(playerSelection, computerSelection) {
    /* 
    Get selection from player
    Get selection from computer
    Compare selections
    return the winner with a string
     */
    playerScore = 0
    computerScore = 0
    let player = playerSelection.toLowerCase()
    let computer = computerSelection
    if( 
        (player == "rock" && computer == "scissor")||
        (player == "paper" && computer == "rock")||
        (player == "sicssor" && computer == "paper") )
        {
            playerScore++;
       return 'Player Wins: ' + player + ' beats ' + computer + '.'
    }
    if( 
        (computer == "rock" && player == "scissor")||
        (computer == "paper" && player == "rock")||
        (computer == "sicssor" && player == "paper") )
        {
            computerScore++;
       return 'Computer Wins: ' + computer + ' beats ' + player + '.'
    }
    return "Tie!"
}
//Game function where it plays PlayRound five times and see who won
function game(){
    //for loop 
    // used to play the game five times
    for(let i = 0; i < 5; i++){
        let playerSelc = prompt("Please Choose between rock, paper or scissor")
        console.log(playRound(playerSelc, getComputerChoice()))
    }
    //If player has won more, print "You won!"
    if(playerScore > computerScore){
        return "You Won!"
        //If Computer has won more, print "Computer Won"
    }
    if(playerScore < computerScore){
        return "Computer Won!"
    }
    //Otherwise it's a tie
    else{
        return "Tie!"
    }
}
//using a consol log to initiate the function game.
//Consol log is there so the player sees who won in the end
console.log(game())
//asks
if (prompt("Do you want to play again?") == "yes"){
    console.log(game())
}
