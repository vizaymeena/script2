// Array of objects :- Putting objects inside an array rather than other values(Numbers,characters and so on..)


//---------------------------------<< Array of object in Array >>--------------------------------------------------
let students = [
    //Note:- Comma , After keyvalue pairs and when object ends. 
    {name:"sid",
     age:25
    },

    {name:"vijay",
        age:23
    },

    {name:"sid",
     age:25
    }
]

//-----------------------------------------<< Map >>-----------------------------------------------------------

let newarr=students.map((e)=>{
    return e ; // returns the whole array
    return e.name ; // returns the key names of an array
    return e.age ; // returns only the ages value of an array
    return e.age+1 ; // can apply maths function for add,susb,multiply,divide.
})
console.log(newarr);

//---------------------------------------<< Filter >>------------------------------------------------------------

let fill = students.filter((e)=>{
    return e.age>25;
})
console.log(fill);

//---------------------------------------<< For Each  >>-----------------------------------------------------------

students.forEach((e)=>{
    console.log(e.name)

    //Statementns for table data

})


// Ques ?? Making  a table for an array to show it in a tabular format on DOM flow. 
// Ques ?? What is clouser 


// functions 
/*

---->> Normal Fucntion

function num(){

}

---->> Arrow Functions

let num=()=>{

}

---->> Anyoymous fucniton
Theory: That does'nt 've a name associated with it and requires a call at the end

let hii = function(){
    console.log("Anonymous function")
}
hii()

---->> Arrow Function via call is called special type of anoymous fucntion

let newarrow=()=>{
    console.log("hi")
}
newarrow()

--->> IIFE (Immediately invoked function expression) ececuted on real time while compiling wihtout call
Theory: Executes as soon as defined / also known as self executing function  

(                     // Mf starts here on.
function()
{
console.log("IIFE FUNC")
}
)                 // Mf fucntion ends here
();              // Call of MF function
 
*/
