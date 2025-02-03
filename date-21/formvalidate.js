

let login_function=()=>{

    //input tags of different fields taken into variable
    let inp_name = document.querySelector("#inp_name").value;
    let inp_number = document.querySelector("#inp_number").value;
    let inp_email = document.querySelector("#inp_email").value;
    let inp_password = document.querySelector("#inp_password").value;
    let inp_confirm_pass = document.querySelector("#inp_confirm_pass").value;

    // paragraph text of different field to display error message taken into varibale
    let ename = document.querySelector("#ename"); 
    let enumber = document.querySelector("#enumber"); 
    let eemail = document.querySelector("#eusername");
    let epassword = document.querySelector("#epassword");  
    let econfirmpass = document.querySelector("#econfirmpass"); 

//-----------------------------------------<< NAME >>--------------------------------------------------------------
   // If name remains empty showing error into input placeholder pe instead of ptag ke
    if(inp_name==="")
    {   
        let ename_box = document.querySelector("#inp_name")
        ename_box.placeholder="Fill out this field first";
        ename_box.style.color="red";                         // makes input text value red ; 
        // ename.innerHTML="Please fill this field";
        return false;
    }

   /*
   //  If name remain empty showing error into p tag mai
   if(inp_name===""){
     ename.innerHTML="Please fill this field";
   }
   */

//-----------------------------------------<< NUMBER >>----------------------------------------------------------

/*  THEORY:-  
    isNaN checks out whether the entered input is a valid number or not (0-9) 
    isNaN = is not a number // true , the if block will run
    isNan = is a number // False , if block will not true 
*/
    else if (isNaN(inp_number)){
        enumber.innerHTML="Fill a valid number in this field (0-9)";
        return false;
    }
//------------------------------------------<< EMAIL >>-------------------------------------------------------------

    else if(!(inp_email.includes("@") && inp_email.endsWith(".com")))
        { 
        /* '!' <-- that condition is not true execute the else if */
               eemail.innerHTML="not a valid email";
                return false;
        }
//-----------------------------------------<< PASSWORD >>-----------------------------------------------------------
    else if (!((inp_password.match(/[1234567890]/)) &&
         (inp_password.match(/[!@#$%^&*]/)) && 
         (inp_password.match(/[a-z]/)) &&
         (inp_password.match(/[A-Z]/)))
            ) 
                {
                epassword.innerHTML="Password should contain at least one - digit,small letter,capital letter.";
                return false;
                } 
//----------------------------------------<< PASSWORD AND CONFIRM PASSWORD >> --------------------------------------

    else if (inp_password!=inp_confirm_pass){
            econfirmpass.innerHTML="Password and confirm password does not match. "
            return false ;
        }
}
/* Form validation completes here  */

/* NOTE: Do Not forget everything ( varibales and if else statements are used in inside the function to to access these variabeles and the user input values whenever the login button gets clicked)
WHAT, if they were outside the function (The varibale names)?? --> Then, the program will runs them only one times and the second time it wont access the value of input which lead to making the form gets submiitted even with the wrong info.
*/


/*  */