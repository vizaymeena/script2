//--------------------------- Text Interval --------------------------------------
/* let isname = true;

setInterval(()=>{
    let target = document.querySelector("#target") // div into variable
    target.innerHTML = isname? "Vizay":"Meena"; 
    // in above line, showing vizay on true condiiton then on syncing the code condition gets false and another intervale mai flase condition will run
    isname = !isname // is not true 
},1000)


//-------------------------- Title Change----------------------------------------
setInterval(()=>{
    let target = document.querySelector("#target") // div into variable
    document.title = isname? "Vizay":"Meena"; 
    isname = !isname // is not true 
},1000)

*/

// Ques < kill interval without using the setTimeout >
/* 
let target = document.querySelector("#target")
let num = parseInt(10);

 let aim = setInterval(()=>{
    target.innerHTML = num
    num--
    if(num==0){
        clearInterval(aim)
    }
 },1000)
 */

 /*  Runs a timer fucnntion through user input 

 let letgo=()=>{
 let input = document.querySelector("#input").value
 let target = document.querySelector("#target")

 let object = setInterval(()=>{
    target.innerHTML = input
    input--
    if(input==0){
        clearInterval(object)
    }

 },1000)
}

*/




 