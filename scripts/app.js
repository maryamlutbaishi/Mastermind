function init(){
/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let guess=['','','','']
let randCode=[]
let turn=0


/*------------------------ Cached Element References ------------------------*/
const allInput=document.querySelectorAll('input')
const messageEl = document.getElementById('message')
const resetBtnEl = document.getElementById('resetBtn')
const dotEl=document.querySelectorAll('.dot')
/*-------------------------------- Functions --------------------------------*/
function rmoveAllInputs() {
  allInput.forEach(input => {
    input.disabled = true;
  });
}

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
  
 const feedBackEl = document.querySelectorAll('.feedback')[turn].querySelectorAll('.dot')

for (let i = 0; i < correctPlace; i++) {
  feedBackEl[i].style.backgroundColor = 'green'
}

for (let i = correctPlace; i < correctPlace + wrongPlace; i++) {
  feedBackEl[i].style.backgroundColor = 'red'
}
if(correctPlace===4){
  messageEl.textContent='congrats, you win'
  resetBtnEl.style.display='inline-block'
  rmoveAllInputs()
  return
}
turn++


allInput.forEach((input, i) => {
  if (Math.floor(i / 4) === turn - 1) {
    input.disabled = true
  }
})
 if(turn<10){
allInput.forEach((input,i)=>{
  if(Math.floor(i/4)===turn){
    input.disabled=false
  }
})
allInput[turn*4].focus()
 }else if(turn>=10){
  messageEl.textContent='GAME OVER, try agin'
  resetBtnEl.style.display='inline-block'
 }
}
 guess = ['', '', '', ''] 
 }

// function restart(){
// let guess=['','','','']
// let randCode=[]
// let turn=0
// allInput.forEach(input=>{
//   input.value=''
//   input.disabled=false
// })
// dotEl.forEach(dot=>{
//   dot.style.backgroundColor=''
// })
// messageEl.textContent=''
// resetBtnEl.style.display='none'
// generetCode()
// allInput[0].focus()
// }




/*----------------------------- Event Listeners -----------------------------*/
allInput.forEach(input=>{
    input.setAttribute('maxlength','1')
    input.addEventListener('input', handleInput)
    input.addEventListener('keydown',handelkey)
})
resetBtnEl.addEventListener('click', ()=>{
  location.reload()
})
generetCode()



}

document.addEventListener('DOMContentLoaded',init)