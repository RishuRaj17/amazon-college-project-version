

let turnAudio = new Audio("ting.mp3");
let winnerAudio = new Audio("winner.mp3");
let hoverAudio = new Audio("hover.mp3");


let boxtexts = document.getElementsByClassName("box-text");

let winArr = [
    [0,1,2,8,3,4],
    [3,4,5,1,5,9],
    [6,7,8,6,7,2]
]


document.querySelector(".chance").innerText = "Wait it's Ai Turn"


setTimeout(e =>{
    
    boxtexts[0].innerText = "X";
},2000)



function comeBack(){
    
    document.querySelector(".chance").innerText = "Wait it's Ai Turn"

    setTimeout(e =>{
        boxtexts[0].innerText = "X";
    },2000)
}


let winner = false;

let chance = "O";




let X = [];
let bot = [];




// document.querySelector(".chance").innerText = `It\'s ${chance} turn`;

function turnChange(){
    let turn= chance=="O"?"X":"O";
    chance = turn;
}





function checkWin(){
    

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
            if(player == "X"){  ////
                setTimeout(won =>{
                    document.querySelector(".chance").style.color ="#f75616"
                    document.querySelector(".chance").innerText = `${player} WON!`;
                    document.querySelector(".msg").style.opacity = "100%";
                    
                },500);
            }
            else{
                setTimeout(won =>{
                    document.querySelector(".chance").style.color ="#f75616"
                    document.querySelector(".chance").innerText = `${player} WON!`;
                    
                },500);
            }
            
            document.querySelector(".gif").getElementsByTagName("img")[0].style.width = "100%";
            document.querySelector(".game").style.zIndex = "0";
            document.querySelector(".gif").style.zIndex = "10000";
            document.querySelector(".line").style.opacity = "100%";
            
            document.querySelector(".line").style.transform = `translateY(${e[3]}px) translateX(${e[4]}px) rotate(${e[5]}deg)`;
            winnerAudio.play();
            
        }
    })
}



function decision(win,ans){
    let wins = win;
    let answer = ans;
    let pos;
    wins.forEach(e => {
        
        for(let j = 3; j<6; j++){
            let b = e[j];
            
            if(b == answer){
                
                pos = e[j-3];
                break;
                
            }
        }
    })
    return pos;
} 





function defence(){

    let check = false;
    for(let j =0 ;j<bot.length; j++){   //////

        for(let i = j; i < bot.length-1 ; i++){   //////

            // let rare = 
            let ans = 15 - (bot[j] + bot[i+1]);  ////

            // alert(`ans: ${ans}`)

            if(ans > 0 && ans < 10 ){
                
                
        
                let pos = decision(winArr,ans);

                // alert(pos)
                    if(boxtexts[pos].innerText === ""){
                    
                        boxtexts[pos].innerText = chance;

                        check = false;

                        return; 

                    }
                    else if(ans == 4 ){
                        // alert("ho")
                        if(boxtexts[8].innerText === ""){
                            boxtexts[8].innerText = chance;
                        }
                    }
                    else{
                      
                        check = true;
                    }
            
            }

            else if(ans== -1 || ans == 0){
                if(boxtexts[8].innerText === ""){
                    boxtexts[8].innerText = chance;
                    return;
                }
                else{
                    check = true

                }
                
            }

            else{
                check = true;
            }
        
        }
    }
    if(check == true){
        noChance();
    }

}



function noChance(){
    let arr = [6,8,2,0]
    for(let j= 0; j<4; j++){

        if(boxtexts[arr[j]].innerText === ""){

            let player = chance;
            setTimeout(E=>{
                boxtexts[arr[j]].innerText = player;
            },1000)
            return;
        }
    }
}




function play(){

    let check = false;

    if(X.length > 1){ /////
    if(X.length > 1){ /////
        for(let j =0 ;j<X.length; j++){  ////
            for(let i = j; i < X.length-1 ; i++){  ////

                let ans = 15 - (X[j]+X[i+1])
            
                if(ans > 0 && ans < 10 ){
                    
            
                    let pos = decision(winArr,ans);

                    
                        if(boxtexts[pos].innerText === ""){

                            boxtexts[pos].innerText = chance;

                            return; 

                        }
                        else{

                            check=true;
                                
                            
                        }
                }
               
            
            }
    }
    if(check = true){
        defence();
    }
    }
    }
    else if(bot.length > 1){    //////

        
        defence();
        
    }
    else if(chance === "X" && X.length < 2 ){   /////
        
        if(boxtexts[8].innerText === ""){
            boxtexts[8].innerText = chance;
            
        }
        else if(boxtexts[0].innerText === ""){
            boxtexts[0].innerText = chance;
            
        }
        else if(boxtexts[6].innerText === ""){
            boxtexts[6].innerText = chance;
            
        }

    }
  

}













function botAi(){
    
    let boxtexts = document.getElementsByClassName("box-text");

    

    winArr.forEach(e =>{
     
       
            for(let j=0;j<3;j++){

                

                if(boxtexts[e[j]].innerText==="O"){ /////

                    let a = e[j+3]
                    
                    let valuecheck = bot.includes(a)
                   
                    if(valuecheck == false){
                        
                        let valueX = e[j+3];

                        
                        bot.push(valueX); //
                        
                    }
                }
                else if(boxtexts[e[j]].innerText==="X"){  /////

                        let a = e[j+3]
                        let valuecheck = X.includes(a)

                        if(valuecheck == false ){
                            let valueBot = e[j+3];
                            X.push(valueBot);  ////
                        }
                }
            }


    })
    
}









let boxes = document.getElementsByClassName("box");


Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".box-text");
    
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === "" && (!winner)){

            if(chance === "O"){
                boxtext.innerText = chance;
                boxtext.style.color = "#023047"
                turnAudio.play();
                checkWin();
                turnChange();
            }
            if(chance==="X"){ ////

                document.querySelector(".chance").innerText = "Wait it's Ai Turn"
                botAi();
                play();
                checkWin();
                turnChange();
            }
            
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

    

    chance = "O"
    winner = false;

    
    if(!winner){
        document.querySelector(".chance").style.color = "#023047";
        document.querySelector(".chance").innerText = `It\'s ${chance} turn`;
        document.querySelector(".gif").getElementsByTagName("img")[0].style.width = "0%";
        document.querySelector(".game").style.zIndex = "100";
        document.querySelector(".gif").style.zIndex = "-1";
        document.querySelector(".line").style.opacity = "0%";
        document.querySelector(".msg").style.opacity = "0%";
        

        while(X.length>0){
            X.pop();
        }
        while(bot.length>0){
            bot.pop();
        }

        comeBack();
    }
})