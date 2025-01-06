// Taking user input and showing it into paragraph text onclicking on button: 

//   ----> Date:20/12/2024 - Day:Friday <----

var inputtake = document.querySelector("#inputtake")
var outputshow = document.querySelector("#outputshow")

let show=()=>{
    //This is our input field/input-tag taking it into variable along with the values that is providing or typed into input field
    var inputtake = document.querySelector("#inputtake").value // by using .value getting the value of user enter into input field

    var outputshow = document.querySelector("#outputshow") // this is our ptag jisme input type kiya hua show krna hai for that isko ched do by using output.innerHTML = inputtake ( iske inner html mai jo bhi input a ra uski value dhika di )

     outputshow.textContent=inputtake 
    // outputshow.innerHTML = inputtake
}


