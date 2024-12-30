/*
// Set timeout and set interval
// set timeout(parameter1,paramtere2)
 
let startt=()=>{
    setTimeout(()=>{
    console.log("I am running")},3000)
}

// ------------------------------------------------------

console.log("Loading")
setTimeout(()=>{
    console.log("I am running")},3000)

    console.log("Ending")

    // how does printing or code run that is given above
    // at first loading -- first
    // at second Ending -- Second
    // at third setTimeout func -- third

    // note: there are some function which makes javascript runs asynchornically
    */

//------------------- Ques: "Click and div Bg got changed after some seconds"-------------------------------
   /* let target = document.querySelector("#target")

    let startt=()=>{
        setTimeout(()=>{
            target.style.backgroundColor="red"
        },3000)

        }
   */
//----------------------- Ques: Number counting SetInterval -------------------------------
/* let target = document.querySelector("#target")
let num = 1
    let startt=()=>{
        setInterval(()=>{
           target.innerHTML = ++num
               
                
        },1000)
    }
*/
//-------------------------------- Ques: 10 to - times ----------------------------------------------------------
/*
let target = document.querySelector("#target")
let num = 10
    let startt=()=>{
        setInterval(()=>{ if(num>=1)
           target.innerHTML = num--
           else if(num<=1){
           target.innerHTML = num--
           } 
        },1000)
    }
*/
// ------------------------------------ Clear Interval -------------------------------------------
// let intr = setInterval(()=>{
//     console.log("i am vijay"),2000
// })

// let startt=()=>{
//     clearInterval(intr)
// }

// Ques Setinterval run gets stopped after 5 second without clickable stops and starts ( auto run and auto stop )