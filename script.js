let boxes =document.querySelectorAll(".but");
let resetbtn =document.querySelector("#resetbut");
let newGameBtn = document.querySelector("#newbut");
let msgContainer = document.querySelector(".msg_con");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, playerO
let count=0


// let arr = [ ["litchi","apple"],["alu","onion"],["pant","shirt"]]
const winpattern =[
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
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
  
boxes.forEach((but) => {
    but.addEventListener("click",()=>{
        
        if(turnO){
             but.innerText ="O"
             turnO=false
        }else{
              but.innerText ="X"
              turnO = true;
            }
            but.disabled=true;
            count++;
            let isWinner = checkWinner();

            if (count === 9 && !isWinner) {
            gameDraw();
            }
    });
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
  
  const disableBoxes = () => {
    for (let but of boxes) {
      but.disabled = true;
    }
  };
  
  const enableBoxes = () => {
    for (let but of boxes) {
      but.disabled = false;
      but.innerText = "";
    }
  };
   
   
   
  
  const showWinner = (winner) => {
    msg.innerText =  `Congratulations, Winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const checkWinner=()=>{
    for( let pattern of winpattern) {
         let pos1val = boxes[pattern[0]].innerText;
         let pos2val = boxes[pattern[1]].innerText;
         let pos3val = boxes[pattern[2]].innerText;
     
         if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                re
                return true;

            }

         }
    }

};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
