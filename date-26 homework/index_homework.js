// Date:26/12/24 
// Day:Thursday 
// Time:18:33
// -------------------- Showing Array of Objects at DOM by using (`  `) & manually creating tabular format into javascript

// At the very first created an array with key pair values
let arr = 
[
    {Name:"vijay",Age:5},
    {Name:"jatin",Age:6},
    {Name:"Himanshu",Age:4},
    {Name:"Yashu",Age:2},
    {Name:"Ragini",Age:1}
]
// taking div id on which action need to be applied on into a variable 
let tableoutput=document.querySelector("#output")

// Making a function that creates Table into html page[at DOM] and appear only on specified instructions (onclick,click,dblclick etc etc.)
let display=()=>{
   let htmltable =    // Creating a variable that contains the whole format of tabular arrangments inside --->>   `  Format inside this  `
    ` <table>
       <thead>
         <tr>
             <th> NAME </th> 
             <th> AGE </th>
         </tr>
        <thead>           
     <tbody>           
    `                    
    //Accessing array elements through forEach      
    arr.forEach(e =>{
        htmltable=htmltable+
        // adding these data into htmltable variable in order to adapt the arrangements specified above
        `
        <tr>
         <td> ${e.Name} </td>
         <td> ${e.Age} </td>
        </tr>
        `
    })
    // closing the ending part of table body & table and storing or concating it into the htmltable variable
    htmltable=htmltable+ /* Concating  */
         `</tbody>
         </table>
         `
    // now displaying the above variable (htmltable) that described in the function which contian all the statement regarding the table format inside the div,that is confied with the id = tableoutput(div).
    tableoutput.innerHTML = htmltable
}

// Made a function which makes the tableoutput goes hidden on a double click

let tabhidden=document.querySelector("#display")
    tabhidden.addEventListener("dblclick",hide=()=>{
    tableoutput.innerHTML="" // showing div mai emptyness on 2 bar dabane pe .

})


//---------------------------------------------- Holy shit -------------------------------------------------
