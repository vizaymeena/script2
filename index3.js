//Incrementing and decrementing of a text into paragraph through button clicks

// Incomplete Date:20/12/2024 Friday ---->> Completed Date:21/12/2024 Saturday


// taking a number into a varibale to make use of it in the function in order to make change on the target element 
let counter = 1; 


// Func. or incrementing fontSize
let inc=()=>{           
//( counter = 1 -> 2 -> 3 -> 4 -> 5 ) counter will gets increments itself on single time button gets clicked by(+1)
    counter++;          
    let ptag = document.querySelector("#ptag") // ptag into variable 
  
    ptag.style.fontSize=(counter+"5px") //performing css on ptag 

    // NOTE:- What is (counter +"5px") ? ---> Ask me later 
    
}

//Decrementing fucntion ( Same as Incrementing only difference is counter is getting counter-- everythime on click )
let dec=()=>{          
    counter--;
    let ptag = document.querySelector("#ptag")
      
     ptag.style.fontSize=(counter+"5px")
}

// Extra :- "WHat is classList" ?? Get more information about it


