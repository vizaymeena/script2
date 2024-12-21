//Incrementing and decrementing of a text into p aragraphy through buttons 

// Incomplete Date:20/12/2024 Friday ---->> Completed Date:21/12/2024 Saturday
let counter = 1;
let inc=()=>{
    counter++;
    let yash = document.querySelector("#yash")
  
    yash.style.fontSize=(counter+"5px")
    
}
let dec=()=>{
    counter--;
    let yash = document.querySelector("#yash")
      
     yash.style.fontSize=(counter+"5px")
}

// Extra :- "WHat is classList" ?? Get more information about it


