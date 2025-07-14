function init(){
/*-------------------------------- Constants --------------------------------*/
const matriLength=4


/*---------------------------- Variables (state) ----------------------------*/
let guess=['','','','']
let randCode=[]
let turn



/*------------------------ Cached Element References ------------------------*/
const allBoxEl=document.querySelectorAll('.boxes')
const allInput=document.querySelectorAll('input')

/*-------------------------------- Functions --------------------------------*/
function moveToNextInput(currentInput){
    const idx=Array.from(allInput).indexOf(currentInput)
    const nextIdx=idx+1
    if(nextIdx<allInput.length){
      allInput[nextIdx].focus()
    }
  }

function handelkey(k){
    const key=k.key

    const allowedKeys=['0','1','2','3','4','5','6','7','8','9','backspace','enter']
    if(!allowedKeys.includes(key)){
        k.preventDefault()


    }
    if (key === 'Enter') {
      k.preventDefault();        
      moveToNextInput(k.target);                
      return;                      
    }

    
    if (key === 'Backspace'){ return;

    }

}


function handleInput(num){
const input=num.target
const value = input.value
guess.push(value)
console.log(guess)
// const index=Array.from(allInput).indexOf(input)
// value=value.slice(0,1)


}


/*----------------------------- Event Listeners -----------------------------*/
allBoxEl.forEach(box=>{
    box.addEventListener('input', handleInput)
    box.addEventListener('keydown',handelkey)
})


}

document.addEventListener('DOMContentLoaded',init)