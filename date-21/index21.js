// let btn = document.querySelector("#button1")
// btn.addEventListener("click",()=>{
//     alert("button clicked") // dbclick , perform action on double click
// })


//---->> CLick Actions
/*
   let btn = document.querySelector("#button1")
   btn.addEventListener("click",()=>{
      btn.innerHTML="Disabled"
      console.log("Clicked")
      btn.disabled=true  // perform function onces and button gets disabled
   })
*/

// --->> Hover Actions

/*
let btn = document.querySelector("#button1")
 btn.addEventListener("mouseenter",()=>{
    btn.innerHTML="Disabled"
    console.log("Clicked")
    btn.disabled=true  // perform function onces and button gets disabled
})
*/

// --->> Key down

/*
let inp=document.querySelector("#input")
inp.addEventListener("keydown",(e)=>{  // e is a parameter given to perform e.key {this e paramter could be given by any depends on choice}
    console.log(e.key);

    // Input Value printing on console in one line
    
    // let inp=document.querySelector("#input")
    // inp.addEventListener("input",()=>{ 
    //console.log(inp.value);

})
*/


// --- >> showing input text content (real-time) on web page 
/*
let input = document.querySelector("#input")
input.addEventListener("input",()=>{
    let text = document.querySelector("#outputtext")
    text.innerHTML = input.value
})
*/
