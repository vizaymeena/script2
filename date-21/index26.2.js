let myarr = [];

// Get references to elements
const keyInput = document.querySelector("#keyinput");
const valueInput = document.querySelector("#valueinput");
const addobj = document.querySelector("#addobjects");
const showarr = document.querySelector("#showarray");
const error = document.querySelector("#error");

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
    output.innerHTML = JSON.stringify(myarr, null, 4); // Pretty-print the array
});
