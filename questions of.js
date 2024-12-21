// DOM

// Rotate Div and make it circle
let rotcircle=()=>{
    let a = document.querySelector("#box")
    a.style.transform="rotate(180deg)"
    a.style.borderRadius="100%"
}

// unrotatediv and make it as it it before ;
let box=()=>{
    let a = document.querySelector("#box")
    a.style.transform="rotate(0deg)"
    a.style.borderRadius="0%"
}

// Incrementing number in a series
let counter = 0;
let incre=()=>{
    let a = document.querySelector("#ptag")
    counter++;
    ptag.innerHTML=counter;
}

// Decrementing number in a series
let decre=()=>{
    let a = document.querySelector("#ptag")
    if(counter>0){
        counter--;
        ptag.innerHTML=counter;
    }
    else{
        counter=0;
    }
}
let reset=()=>{
    let a = document.querySelector("#ptag")
    counter=0;
    ptag.innerHTML=counter;
}