
//  << -- Hide and Show -->> Div content while clicking on button 

var button = document.getElementById("button");
var div = document.getElementById("myDiv");
button.addEventListener("click", ()=>{
        if (div.style.display === "none") {
            div.style.display = "block";
            button.innerHTML = "Hide";
        } else {
            div.style.display = "none";
            button.innerHTML = "block";
        }
})