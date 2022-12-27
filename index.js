
const ROCK = 0 ;
const PAPER = 1 ;
const CUT = 2 ;
const LIZZARD = 3 ;
const SPOCK = 4 ;

const TIE = 0;
const WIN = 1;
const LOST = 2;



const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const cutBtn = document.getElementById("cut");
const lizzardBtn = document.getElementById("Lizzard");
const spockBtn = document.getElementById("Spock");

rockBtn.addEventListener("click", ()=>{
play("ROCK");

});

paperBtn.addEventListener("click", ()=>{
    play("PAPER");

});

cutBtn.addEventListener("click", ()=>{
    play("CUT");

});

lizzardBtn.addEventListener("click", ()=>{
    play("LIZZARD");

});

spockBtn.addEventListener("click", ()=>{
    play("SPOCK");

});


function play(userOption){

const machineOption = Math.floor(Math.random()*4);
const result = calcResult(userOption, machineOption);

switch(reuslt){


case TIE:
    alert("Tie");
break;
    case WIN:
        alert("Win");
        break;
        case LOST:
            alert("Lost");
            break;



}


}

function calcResult(userOption, machineOption) {

    if(userOption === machineOption){
        return TIE;
        
        }else if (userOption === ROCK){
        
            if(machineOption === PAPER) return LOST;
            if(machineOption === CUT) return WIN;
        
            }else if(userOption === PAPER){
                if(machineOption === CUT) return LOST;
                if(machineOption === ROCK) return WIN;
        
                }else if(userOption === CUT){
                    if(machineOption === ROCK) return LOST;
                    if(machineOption === PAPER) return WIN;
            
                    }
        


}



else if(userOption === rock){

    if(machineOption === paper) return lost;
    if(machineOption === cut) return win;
    if(machineOption === spock) return lost;
    if (machineOption === lizzard) return win;
    }
    
    else if(userOption === paper){
    
        if(machineOption === rock) return win;
        if(machineOption === cut) return lost;
        if(machineOption === spock) return lost;
        if (machineOption === lizzard) return lost;
        }
    
        else if(userOption === cut){
    
            if(machineOption === paper) return win;
            if(machineOption === rock) return lost;
            if(machineOption === spock) return lost;
            if (machineOption === lizzard) return lost;
            }
    
            else if(userOption === lizzard){
    
                if(machineOption === paper) return win;
                if(machineOption === cut) return win;
                if(machineOption === spock) return win;
                if (machineOption === rock) return lost;
                }
    
                else if(userOption === spock){
    
                    if(machineOption === paper) return win;
                    if(machineOption === cut) return win;
                    if(machineOption === rock) return win;
                    if (machineOption === lizzard) return lost;
                    }
    
    
    
    