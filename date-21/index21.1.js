// How to change a div bg color through pure css (Add event listerner)


let button = document.querySelector("#target")
let redbtn=document.querySelector("#re")
redbtn.addEventListener("mouseenter",()=>{
    let a = document.querySelector("#target")
    a.style.backgroundColor=("red")
})

let bluebtn=document.querySelector("#bl")
bluebtn.addEventListener("mouseenter",()=>{
    let a = document.querySelector("#target")
    a.style.backgroundColor=("blue")
})
let green = document.querySelector("gr")
gr.addEventListener("mouseenter",()=>{
    let a = document.querySelector("#target")
    a.style.backgroundColor=("green")
})

// Ques Hide and show a div thorugh a button and change its innerHtml with show=hide(button) and hide=show (Button)