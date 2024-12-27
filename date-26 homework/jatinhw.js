let arr = 
[
    {Name:"vijay",Age:5},
    {Name:"jatin",Age:6},
    {Name:"Himanshu",Age:4},
    {Name:"Yashu",Age:2},
    {Name:"Ragini",Age:1}
]

let displaytable =document.querySelector("#tablebox")
 displaytable.innerHTML = arr.forEach((e)=>
 {
    
    `
    <tr>
    <th>
    <h1> ${e.Name} </h1>
    <h1> ${e.Age} </h1>
    </th>
    </tr>
    `
 })

    


