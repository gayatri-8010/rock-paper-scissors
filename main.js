let rounds=0;
let userWins=0;

const p1=document.getElementById("my-p1");
const p2=document.getElementById("my-p2");

function playGame(userChoice){
rounds++;
p1.innerHTML=("Total Rounds: "+rounds);

let computerChoice=getComputerChoice();

console.log(userChoice,computerChoice);

const res=document.getElementById("my-h2");

if(userChoice===computerChoice){
    res.innerHTML="Draw";
}else if (userChoice === "rock" && computerChoice === "scissor"
        || userChoice === "paper" && computerChoice === "rock"
        || userChoice === "scissor" && computerChoice === "paper")
{
    userWins++;
    p2.innerHTML=("User Wins: "+userWins);
    res.innerHTML="You Win" ; 
}else{
    res.innerHTML="You Lost";
 }

}

function getComputerChoice(){

    let arr=["rock","paper","scissor"];

    let x=Math.random()*3;

    let random=parseInt(x);

    return arr[random];
}
