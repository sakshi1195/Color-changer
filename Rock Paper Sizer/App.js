let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-id");
const comprScorePara = document.querySelector("#comp-id");


const getCompChoice = () =>{
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const drawgame = () => {
    console.log("game is draw");
    msg.innerText = "The Game is draw"
     msg.style.backgroundColor = "#0D0D2E";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++
        comprScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose, Comp ${compChoice} beats your  ${userChoice}`;
       msg.style.backgroundColor ="red";
    }
}

const playgame = (userChoice) => {
    console.log("user choice is ", userChoice);

    const compChoice = getCompChoice();
    console.log("comp choice is ", compChoice );

    if(userChoice === compChoice ){
        
        drawgame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissor
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoice === "paper"){
            // rock, scissor
            userWin = compChoice === "scissor" ? false : true
        }else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
       const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
}) 