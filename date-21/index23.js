// Password and confirm password same = submit
// If not same = Not submit




let login_function=()=>{

    //input tags of different fields
    let inp_name = document.querySelector("#inp_name").value;
    let inp_number = document.querySelector("#inp_number").value;
    let inp_email = document.querySelector("#inp_email").value;
    let inp_password = document.querySelector("#inp_password").value;
    let inp_confirm_pass = document.querySelector("#inp_confirm_pass").value;

    // paragraph text of different field to display error message
    let ename = document.querySelector("#ename"); // error for name
    let enumber = document.querySelector("#enumber"); // error for number
    let eusername = document.querySelector("#eusername"); // error for username
    let epassword = document.querySelector("#epassword"); // error for password 
    let econfirmpass = document.querySelector("#econfirmpass"); // error for confirm password 

//------------------------------------------<< NAME >>--------------------------------------------------------------
    if(inp_name==="")
    {   
        let ename_box = document.querySelector("#inp_name")
        ename_box.placeholder="Fill out this field first";
        ename_box.style.color="red";                         // makes input text value red ; 
        // ename.innerHTML="Please fill this field";
        return false;
    }
//--------------------------------------------<< NUMBER >>----------------------------------------------------------

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

    else if(!(inp_email.includes("@")&& inp_email.includes(".com"))){ 
        /* '!' if condition is not true execute the else if */
               eemail.innerHTML="not a valid email";
                return false;
            }
            else if (!(inp_password.match(/[1234567890]/)) 
                && inp_password.match(/[!@#$%^&*] &&/) 
                && inp_password.match(/[a-z]/)
                && inp_password.match(/[A-Z]/)) 
                {
                epassword.innerHTML="Password should contain at least one - digit,small letter,capital letter.";
                return false;
                } 
//----------------------------------------<< PASSWORD AND CONFIRM PASSWORD >> --------------------------------------
 }


/* Form validation completes here  */

