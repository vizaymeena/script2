// Set timeout and Auto Interval for a specific time and clear interval after reaching on a state 

// div
let target = document.querySelector("#target") 

/* -------- action 1 ---------
 Halting program for 3 seconds 
*/
let number = parseInt(1)
setTimeout(()=>{ 
   target.textContent =  number

},3000) 

/* ------- action 2 ----------
 Performing function after every 1 second
*/
let kill = setInterval(()=>{
    target.innerHTML=number++
},1000)

/* ------- action 3 ----------
 Killing program of setTimeout after 3 seconds
*/
setTimeout(()=>{
    clearInterval(kill)
},5000)

//----------- Holy Done ---------