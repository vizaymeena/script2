// Array of objects :- Putting objects inside an array rather than other values(Numbers,characters and so on..)


//-------------------------------------<< Array of object >>----------------------------------------------------
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

//---------------------------------------<<   >>-----------------------------------------------------------