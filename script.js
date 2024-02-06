let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let win = document.querySelector(".win");
let newGame = document.querySelector(".new");

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];

const boxDisable = () => {
    for(btn of boxes){
        btn.disabled = true;
        btn.style.backgroundColor = "";
    }
};


const ShowWinner = (winner) => {
    msg.classList.remove("hide");
    win.innerText = `Congratulation the Winner is ${winner}`;
};


const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                boxDisable();
                ShowWinner(pos1val);
                
      }
    }
}};

boxes.forEach((btn) => {
    btn.addEventListener("click",() => {
        if(turnO){
        btn.style.backgroundColor = "yellow";
        btn.innerText = "O";
        turnO = false;
    }else{
        btn.style.backgroundColor = "pink";
        btn.innerText = "X"
        turnO = true;
    };
    btn.disabled = true;
    checkWinner();
});
});

const boxEnable = () => {
    for(btn of boxes){
        btn.disabled = false;
        btn.innerText = "";
        btn.style.backgroundColor = "";
    }
};

const reset = () => {
    turnO = true;
    msg.classList.add("hide");
    boxEnable();
};


const drawcondition = () => {
     
};

if (boxes.innerText != winPattern) {
    console.log("game is draw");
};

resetbtn.addEventListener("click", reset);
newGame.addEventListener("click", reset);
