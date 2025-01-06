let myarr = [];

// Get references to elements
let keyInput = document.querySelector("#keyinput");
let valueInput = document.querySelector("#valueinput");
let addobj = document.querySelector("#addobjects");
let showarr = document.querySelector("#showarray");
let error = document.querySelector("#error");

// Add Object to Array
addobj.addEventListener("click", () => {
    let keyin = keyInput.value.trim(); 
    let valuein = valueInput.value.trim();

    // Validate input
    if (!keyin || !valuein) {
        error.innerHTML = "Name and value fields are mandatory to fill.";
        return;
    }

    // Clear any previous error message
    error.innerHTML = "";

    // Add object to the array
    myarr.push({ [keyin]: valuein });

    // Clear input fields
    keyInput.value = "";
    valueInput.value = "";

    alert("Object added successfully!");
});

// Show Array
showarr.addEventListener("click", () => {
    const output = document.querySelector("#output");
    // Pretty-print the array
});
