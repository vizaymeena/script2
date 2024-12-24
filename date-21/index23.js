// Password and confirm password same = submit
// If not same = Not submit




let action=()=>{

    let inpname = document.querySelector("#inpname").value;
    let inpnumber = document.querySelector("#inpnumber").value;
    let inpemail = document.querySelector("#inpemail").value;
    let inppassword = document.querySelector("#inppassword").value;
    let inpconfirmpass = document.querySelector("#inpconfirmpass").value;

    let namee = document.querySelector("#errname");
    let number = document.querySelector("#errnumber");
    let username = document.querySelector("#errusername");
    let password = document.querySelector("#errpassword");
    let confirmpass = document.querySelector("#errconfirmpass");


    if(inpname==="")
    {
        namee.innerHTML="Please fill this field";
        namee.innerHTML.style.fontSize="10px";
        namee.style.color="red";
        return false;
    }
    // It checks whether the password and confirm password is same or not , if not form validation will not get filled  (else get filled). 
    else if(inppassword!=inpconfirmpass || inpconfirmpass!=inppassword) {
      confirmpass.innerHTML="Password not matched";
      return false; 
    }
    else if(!(email.includes("@")&& email.includes(".com"))){ /* '!' if condition is not true execute the else if */
        email.innerHTML="not a valid email";
        return false;
    }
    else if (!(inppassword.match(/[1234567890]/)) 
        && inppassword.match(/[!@#$%^&*] &&/) 
        && inppassword.match(/[a-z]/)
        && inppassword.match(/[A-Z]/)) 
        {
        password.innerHTML="Password should contain at least one - digit,small letter,capital letter.";
        return false;
        }
}

/* Form validation completes here  */

