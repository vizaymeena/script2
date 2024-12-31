/* Theory: Calculator mai everything even number dialed taken as or treated as string thats y it comes into row behaviour mai else it would comes to next line if dialed numbers treated as numbers in calculators mai thats y toString method is used to make the store varibale thats is converted from string to number through 
  --->  eval(store) <--- but later also converted into string by using --> tostring() <-- method in order to avoid the ek ke niche ek number ane wali problem ko
*/

// < ----- 1. Display ------->

let store = ""; // Initialize store as an empty string

let calc = (value) => {
    let show = document.querySelector("#display"); // Select the display element
    store += value                // calc('1/2/3/4/5/6/7/8/9') coming as strings and concating with store variable 
    show.innerHTML = store  
};

// < ---- 2. Calculation ----- >
let result=()=>{
     let show = document.querySelector("#display");
     show.innerHTML=eval(store); // "1+2" 
     store = eval(store) // 3 number 
     store.toString()  // "" converted into string
}

// < ---- 3. Del ----->
let del=()=>{
     let show = document.querySelector("#display")
     store = store.slice(0,-1)   // removing last number
     show.innerHTML=store;
}

// <--- 4. All cLear ---->
let ac=()=>{
     let show = document.querySelector("#display")
     store=""
     show.innerHTML=store;
} 

// <---- 5. History --->

let history=()=>{
     
}