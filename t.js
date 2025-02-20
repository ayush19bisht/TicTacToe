let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newgameBtn=document.querySelector("#newGame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;  //playerx  playerO
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],    
];
const resetGame = () => {
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if (turnO) {
            box.innerText="X";
            turnO=false;
            box.classList.add("X");
        }
        else{
            box.innerText="O";
            turnO=true;
            box.classList.add("O");
        }
        box.disabled =true;
        checkWinner();
    });
});
const enableBoxes = () =>{
    for(let box of boxes){
     box.disabled = false;
     box.innerText = "";
    }
 }

const disbaleBoxes = () =>{
   for(let box of boxes){
    box.disabled = true;
   }
}
const showWinner= (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disbaleBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
    
    if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
        if(pos1Val===pos2Val && pos2Val===pos3Val){
            showWinner(pos1Val);
        }
    }
}};
newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
