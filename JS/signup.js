let email=document.getElementById("email");
let pwd=document.getElementById("password");
let pwdrpt=document.getElementById("pwdrpt");
let error=document.getElementById("error");
let inputPhone=document.getElementById("inputPhone");
let inputAddress=document.getElementById("inputAddress");
let inputCity=document.getElementById("inputCity");
let inputPIN=document.getElementById("inputPIN");


var flag=0;
var flag1=0;
var flag2=0;
var flag3=0;




function mailvalidate(){

    

        var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/ //here [A-Za-z0-9 and underscore] can be replaced by [\w]
        
        if(regexp.test(email.value) ){
          flag=1;
          error0.innerHTML="Valid email";
          error0.style.color="green";
            console.log("flag="+flag);
            return true;
            
        }
        else {
             error0.innerHTML="Invalid email";
             error0.style.color="red";
            flag=0;   
            console.log("flag="+flag);
            return false;
            
        }
           
                
                     
            }



function getPasswordStrength(password){
    let s = 0;
    if(password.length > 4){
      s++;
    }
    if(password.length > 7){
      s++;
    }
    if((/[A-Z]/.test(password))&& (/[a-z]/.test(password))){
      s++;
    }
    if(/[0-9]/.test(password)){
      s++;
    }
    
    
    if(/[^A-Za-z0-9]/.test(password)){
      s++;
         }
    return s;
  }
  document.querySelector(".pw-meter #password").addEventListener("focus",function(){
    document.querySelector(".pw-meter .pw-strength").style.display = "block";
  });
  document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
    let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
    if(el.classList.contains("active")){
      document.querySelector(".pw-meter #password").setAttribute("type","password");
      el.classList.remove("active");
    } else {
      document.querySelector(".pw-meter #password").setAttribute("type","text");
      el.classList.add("active");
    }
  });
  
  document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
    let password = e.target.value;
    let strength = getPasswordStrength(password);
    let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
    strength = Math.max(strength,1);
    passwordStrengthSpans[1].style.width = strength*20 + "%";
    if(strength < 2){
      passwordStrengthSpans[0].innerText = "poor";
      passwordStrengthSpans[0].style.color = "#111";
      passwordStrengthSpans[1].style.background = "#d13636";
      p1.style.color="red";
    } else if(strength >= 2 && strength <= 4){
      passwordStrengthSpans[0].innerText = "Medium";
      passwordStrengthSpans[0].style.color = "#111";
      passwordStrengthSpans[1].style.background = "orange";
      p1.style.color="red";
    } else {
      passwordStrengthSpans[0].innerText = "Strong";
      passwordStrengthSpans[0].style.color = "#fff";
      passwordStrengthSpans[1].style.background = "#20a820";
      flag1=1;
      p1.style.color="green";
    }
  });

  
  function pwdrptval(){
      if(pwd.value!=pwdrpt.value){
                    error.innerHTML="passwords does not match";
          error.style.color="red";
          flag2=0;
          return false;
      }
      else{
                  error.innerHTML="passwords matches";
            error.style.color="green";
            flag2=1;
            return true;
}
      }

      function phonenumber(){  
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
        if((inputPhone.value.match(phoneno))){       
                error1.innerHTML="Valid phone number";
          error1.style.color="green";
          flag3=1
          return true;        
        }      
        else        
        {
          error1.innerHTML="Please check the phone number";
          error1.style.color="red";
          flag3=0;
          //         alert("message");      
            return false;      
          }
      }

      
      

     function pin(){
        var pin1 = /^([0-9]{6})$/; 
       if((inputPIN.value.length<7) && (inputPIN.value.match(pin1))){
           error2.innerHTML="Valid Pincode";
      error2.style.color="green";
                 return true;
         }
         else 
         {
           error2.innerHTML="Invalid Pincode";
      error2.style.color="red";
           return false;
         }
       }
  

function validate(){
    


console.log("flag="+flag);
console.log("flag1="+flag1);
console.log("flag2="+flag2);
console.log("flag3="+flag3);






if ( (flag==1) && (flag1==1) && (flag2==1) && (flag3==1)  ) {
    
    
        return true;
}

{
  alert("Check Email, Password and Phone number");
  return false;
}


}