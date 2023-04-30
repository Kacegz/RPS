const choices=["rock","paper","scissors"]
let round=0;
let playerp=0
let computerp=0
let buttons=document.querySelectorAll('.buttons');
const won=document.querySelector('#won');
const compchoice=document.querySelector('#compchoice');
const score=document.querySelector('#score');
const rounds=document.querySelector('#rounds');
function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)]
}
function press(){
    won.textContent=playRound(this.id.toLowerCase(),getComputerChoice());
    winner();
}
buttons.forEach(button => {
    button.addEventListener('click',press);
});

function playRound(player,computer){
    rounds.textContent="Round "+(round+1)
    round++;
    console.log(player);
    compchoice.textContent="Computer picked "+computer;
    if ((player=="rock" && computer=="scissors") || (player=="scissors" && computer=="paper")|| (player=="paper" && computer=="rock")){
        playerp++;
        score.textContent="You: "+playerp+" Computer: "+computerp;
        return "Player wins!";
    }else if ((computer=="rock" && player=="scissors") || (computer=="scissors" && player=="paper")|| (computer=="paper" && player=="rock")){
        computerp++
        score.textContent="You: "+playerp+" Computer: "+computerp;
        return "Computer wins!";
    }else{
        score.textContent="You: "+playerp+" Computer: "+computerp;
        return "Draw!";
    }
}
function winner(){
    if(playerp == 5 || computerp ==5){
        console.log(playerp)
        console.log(computerp)
        buttons.forEach(button => {
            button.removeEventListener('click',press);
        });
        if(playerp>computerp){
            won.textContent="You won the game! Good job!"
        }else if(computerp>playerp){
            won.textContent="Computer won the game :(";
        }else{
            won.textContent="No one won, try again one more time!";
        }
        won.setAttribute('style','color:#6EE1DA; font-weight:bold;')
        compchoice.textContent="";
        showrestart();
    }
}
function showrestart(){
    const restartdiv=document.querySelector('#restart');
    const restartbutton=document.createElement('button');
    restartbutton.textContent="Click here to restart!";
    restartdiv.appendChild(restartbutton);
    restartbutton.setAttribute('style','background: #65CDE1; border: 0px; border-radius:20px; width:300px;height:100px; color:white;font-size:20px;font-weight:bold;')
    restartbutton.addEventListener('mouseover',()=>{restartbutton.style.backgroundColor="#077DA8"})
    restartbutton.addEventListener('mouseout',()=>{restartbutton.style.backgroundColor="#65CDE1"})
    restartbutton.addEventListener('click',()=>{
    location.reload();
    })
}