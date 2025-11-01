let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")

let turnO = true;

const winnerPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O"
            box.style.color = "#d21976ff";
            turnO = false;
           
        }
        else{
            box.innerText = "X";
            box.style.color = "rgb(233, 27, 54);";
            turnO= true;
        }
        box.disabled = true;

        checkWinner();
    })
    
})

const disabledboxes = (box) => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = (box) => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}
const showWinner = (winner) => {
    msg.innerText = (`Congratulations! , The Winner is ${winner}`)
    msgContainer.classList.remove("hide");
    disabledboxes();
}

const checkWinner = () => {
    for(let pattern of winnerPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner");
                showWinner(pos1val);
            }
        }
    }

}

newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame );