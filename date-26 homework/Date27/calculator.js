// let store="";

// let calc=(value)=>{
//      let show = document.querySelector("#display");
//      store += value
//      show.innerHTML = store

// }

let store = ""; // Initialize store as an empty string

let calc = (value) => {
    let show = document.querySelector("#display"); // Select the display element
    if (show) { // Ensure the element exists
        store += value; // Append the value to the store
        show.innerHTML = store; // Update the display content
    } else {
        console.error("Display element not found!");
    }
};
