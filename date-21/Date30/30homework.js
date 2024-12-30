// Set timeout and Auto Interval for a specific time and clear interval after reaching on a state 
//----------- Action 1 -------------
let target = document.querySelector("#target")
let number = parseInt(1)
setTimeout(()=>{
   target.textContent =  number

},3000)
//----------- Action 2 -----------
let kill = setInterval(()=>{
    target.innerHTML=number++
},1000)
//----------- Action 3 ----------
setTimeout(()=>{
    clearInterval(kill)
},5000)
//----------- Holy Shit ---------