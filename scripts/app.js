function init(){
/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let guess=['','','','']
let randCode=[]
let gussTF=true;


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


  if (guess.every(val => val !== '')) {
    checkFunction()
  }
   
   return guess
  
}
function generetCode(){
  for(let i=0;i<4;i++){
    const num=Math.floor(Math.random()*10)
    randCode.push(num)
  }
  const secretNumber=randCode.join('')
  console.log('secret number is:'+secretNumber)
  return randCode
}
function checkFunction(){
let isAllCorrect= true
for(let i=0;i<4;i++){
  if(guess[i]!==randCode[i]){
    isAllCorrect=false
    break
  }
}
if(isAllCorrect){
  console.log('win')
}else{
  let correctPlace=0
  let wrongPlace=0
  const guessCopy=[...guess]
  const randCopy=[...randCode]
  console.log(guessCopy)
  console.log(randCopy)
  for (let i=0;i<4;i++){
    if(guess[i]==randCode[i]){
      correctPlace++
      guessCopy[i]=null
      randCopy[i]=null
      
    }
 }
  for (let i = 0; i < 4; i++) {
    if (guessCopy[i] === null) continue;

    for (let j = 0; j < 4; j++) {
      if (randCopy[j] !== null && guessCopy[i] == randCopy[j]) {
        wrongPlace++;
        randCopy[j] = null;
        break;
      }
    }
  }
  if(correctPlace===4){
    console.log('you win')
  }else if(correctPlace>0){
    console.log(`you have ${correctPlace} numbers in correct place`)
  } if(wrongPlace>0){
    console.log(`you have ${wrongPlace} numbers corret but not in correct place`)
  }
 }
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
