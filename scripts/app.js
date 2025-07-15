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
    const lastInRow=(idx+1)%4===0 
     const nextIdx=idx+1

    if(lastInRow) return;
  
    if(nextIdx<allInput.length){
      allInput[nextIdx].focus()
    }
  }
  function moveToTheBackInput(cInput){
    const idx=Array.from(allInput).indexOf(cInput)
    const BackInput=idx-1

    if(BackInput<allInput.length){
      allInput[BackInput].focus()
      
    }
    
  }

function handelkey(k){
    const key=k.key
    const allowedKeys=['0','1','2','3','4','5','6','7','8','9','Backspace','Enter']
    if(!allowedKeys.includes(key)){
        k.preventDefault()
    }
    if (key === 'Enter') {
      k.preventDefault()     
      moveToNextInput(k.target)             
      return                      
    }
    if(key === 'Backspace'){
      moveToTheBackInput(k.target)
      return
    }
}

function handleInput(num){
  const input=num.target
  const value=input.value
  input.value=value
  const index=Array.from(allInput).indexOf(input)
  guess[index%4]=value
  console.log(guess)
  


}
function generetCode(){
  for(let i=0;i<4;i++){
    const num=Math.floor(Math.random()*10)
    randCode.push(num)
  }
  const secretNumber=randCode.join('')
  console.log('secret number is:'+secretNumber)
}
function chickFunction(){

}


/*----------------------------- Event Listeners -----------------------------*/
allInput.forEach(input=>{
    input.setAttribute('maxlength','1')
    input.addEventListener('input', handleInput)
    input.addEventListener('keydown',handelkey)
})
generetCode()



}

document.addEventListener('DOMContentLoaded',init)
