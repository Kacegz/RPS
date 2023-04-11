let computerSelection
let playerSelection
const choices=["rock","paper","scissors"]

computerSelection=function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)]
}
//change player input
playerSelection=function getPlayerChoice(){
    let choice=prompt("Choose rock paper or scissors")
    return choice.toLowerCase()
}
function playRound(player,computer){
    console.log(computer)
    if ((player=="rock" && computer=="scissors") || (player=="scissors" && computer=="paper")|| (player=="paper" && computer=="rock")){

        return "Player wins!"
    }else if ((computer=="rock" && player=="scissors") || (computer=="scissors" && player=="paper")|| (computer=="paper" && player=="rock")){
        return "Computer wins!"
    }else{
        return "Draw!"
    }
}
function game(){
    let result
    let player=0
    let computer=0

    for(let i=0;i<5;i++){
        console.log("Round "+(i+1))
        //change to playerSelection() later
        console.log(result=playRound("rock",computerSelection()))
        if(result=="Player wins!"){
            player++
        }else if(result=="Computer wins!"){
            computer++
        }
    }
    console.log(player)
    console.log(computer)
    if(player>computer){
        console.log("player won the game")
    }else if(computer>player){
        console.log("computer won the game")
    }else{
        console.log("No one won")
    }
}
game()
