// Hide and show content
let lock=()=>{
    let divv = document.querySelector("#box") // Filling the target div element into variable ('divv').
    let btn = document.querySelector("#btn")
    //Providing If else condition to perform desired action on the target div element regarding HIDE AND SEEK
    if(divv.style.display==("none")){
        divv.style.display=("block")
        btn.innerHTML="lock"
    } 
    else{
        divv.style.display=("none")
         btn.innerHTML="Unlock"
    }
}

//Point-1 The above code clearify that what happens when a user trys to click on the button 
//Point-2 The if() , condition is provided here to makes the display go visible whenever the display type is none  

/*sub-point-2  In above if else statement.The else condition will execute first whenever we trys to click button becuase the default type of div is block/visible ( which makes the if condition gets false , thats leads to make the else condition right ) so thus the reason div display type gets display=none; on the first click 
-- and on the second click ( The if condition will gets true as the display type of divv is equals to none )
so on the second click the divv gets vissible/block
and this secenario gets repeadted everytime on clicks over the button

*/