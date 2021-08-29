let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
let error=document.getElementById("error");


var flag=0;
var flag1=0;
var flag2=0;




function mailvalidate(){

    

        var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/ //here [A-Za-z0-9 and underscore] can be replaced by [\w]
        
        if(regexp.test(email.value) ){
            error.innerHTML="valid email";
            error.style.color="green";
            flag=1;
            
        }
        else {
            error.innerHTML="Invalid email";
            error.style.color="red";
            flag=0;   
            
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
    } else if(strength >= 2 && strength <= 4){
      passwordStrengthSpans[0].innerText = "Medium";
      passwordStrengthSpans[0].style.color = "#111";
      passwordStrengthSpans[1].style.background = "orange";
    } else {
      passwordStrengthSpans[0].innerText = "Strong";
      passwordStrengthSpans[0].style.color = "#fff";
      passwordStrengthSpans[1].style.background = "#20a820";
      flag1=1;
    }
  });

  

function validate(){
    




if ((flag==1)&&(flag1==1)){
    
    
        return true;
}

else{
  alert("Check Email and Password")
  return false;
}


}