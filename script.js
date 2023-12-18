let turnAudio = new Audio("ting.mp3");
let winnerAudio = new Audio("winner.mp3");
let hoverAudio = new Audio("hover.mp3");

let winner = false;

let chance = "X";

document.querySelector(".chance").innerText = `It\'s ${chance} turn`;

function turnChange(){
    let turn= chance=="X"?"O":"X";
    chance = turn;
}



function checkWin(){
    let boxtexts = document.getElementsByClassName("box-text");

    let win = [
        [0,1,2,0,0,0],
        [3,4,5,135,0,0],
        [6,7,8,270,0,0],
        [0,3,6,135,-135,90],
        [1,4,7,135,0,90],
        [2,5,8,135,135,90],
        [0,4,8,135,0,45],
        [2,4,6,135,0,-45]
    ]
    win.forEach(e =>{

        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText !== "") && (!winner)){
            winner = true;

            let player = chance;
            setTimeout(won =>{
                document.querySelector(".chance").style.color ="#f75616"
                document.querySelector(".chance").innerText = `${player} WON!`;
           
            },1000);
            
            document.querySelector(".gif").getElementsByTagName("img")[0].style.width = "100%";
            document.querySelector(".game").style.zIndex = "0";
            document.querySelector(".gif").style.zIndex = "10000";
            document.querySelector(".line").style.opacity = "100%";
            document.querySelector(".line").style.transform = `translateY(${e[3]}px) translateX(${e[4]}px) rotate(${e[5]}deg)`;
            winnerAudio.play();
            
        }
    })
}




let boxes = document.getElementsByClassName("box");

console.log(Array.from(boxes));

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".box-text");
    
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === "" && (!winner)){
            boxtext.innerText = chance;
            boxtext.style.color = "#023047"
            turnAudio.play();
            checkWin();

            turnChange();
            
            if(!winner){
                document.querySelector(".chance").innerText = `It\'s ${chance} turn`;
            }
        }
        
    })

});

reset.addEventListener('click' , () =>{
    let boxtext = document.querySelectorAll(".box-text");

    Array.from(boxtext).forEach(element =>{
        element.innerText ="";
        
    })
    chance = "X"
    winner = false;
    if(!winner){
        document.querySelector(".chance").style.color ="#023047"
        document.querySelector(".chance").innerText = `It\'s ${chance} turn`;
        document.querySelector(".gif").getElementsByTagName("img")[0].style.width = "0%"
        document.querySelector(".game").style.zIndex = "100";
        document.querySelector(".gif").style.zIndex = "-1";
        document.querySelector(".line").style.opacity = "0%";
    }
})