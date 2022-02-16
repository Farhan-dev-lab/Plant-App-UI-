 var mainBtn = document.querySelector('.main-btn');

 var mainMobNew = document.querySelector('.main-mob-new');

var screenoneBtn = document.querySelector('.screenone-btn');

var screenoneHead = document.querySelector('.screenone-head');

var screenoneP = document.querySelector('.screenone-p');

var screenoneBtn =  document.querySelector('.screenone-btn');

var screenoneBtnTwo = document.querySelector('.screenone-btn-two');

var screenoneBox = document.querySelector('.screenone-box');

var screenonebtnAlign = document.querySelector('.screen-one-btn-align');

 var height = 0;

/* sign up section (start) */

    
var signupImg = document.querySelector('.signup-cross');
var signupHead = document.querySelector('.signup-head');
var signupP = document.querySelector('.signup-p');
var signupEmail = document.querySelector('.signup-email');
var signupPassword = document.querySelector('.signup-pass');
var signupbtn = document.querySelector('.signup-btn');
var signupsocialBox = document.querySelector('.social-signup-box');
var signupIcon = document.querySelector('.signup-icon');
var signupPasswordIcon = document.querySelector('.password-icon');


/* login section (end) */


screenoneBtnTwo.addEventListener('click' , function(){

    setTimeout(() => {
        
        screenoneHead.style.opacity = "0";
        screenoneP.style.opacity = "0";
        screenoneBtn.style.opacity = "0";
        screenoneBtnTwo.style.opacity = "0";


    }, 200);


    setTimeout(() => {
        
        screenoneBox.style.top = "-400px"

    }, 250);

    setTimeout(() => {
        
        screenoneHead.style.display = "none";
        screenoneP.style.display = "none";
        screenoneBtn.style.display = "none";
        screenoneBtnTwo.style.display = "none";


    }, 600);


    setTimeout(() => {
        
        signupImg.style.display = "block";
        signupHead.style.display = "block";
        signupP.style.display = "block";
        signupPassword.style.display = "block";
        signupEmail.style.display = "block";
        signupbtn.style.display = "block";
        signupsocialBox.style.display = "block";
        signupIcon.style.display = "block";
        signupPasswordIcon.style.display = "block";
         

    }, 700);

    setTimeout(() => {
        
        signupImg.style.opacity = "1";
        signupHead.style.opacity = "1";
        signupP.style.opacity = "1";
        signupPassword.style.opacity = "1";
        signupEmail.style.opacity = "1";
        signupbtn.style.opacity = "1";
        signupsocialBox.style.opacity = "1";
        signupIcon.style.opacity = "1";
        signupPasswordIcon.style.opacity = "1";


    }, 800);

});








signupImg.addEventListener('click' , function(){

 

    setTimeout(() => {
        
        signupImg.style.opacity = "0";
        signupHead.style.opacity = "0";
        signupP.style.opacity = "0";
        signupPassword.style.opacity = "0";
        signupEmail.style.opacity = "0";
        signupbtn.style.opacity = "0";
        signupsocialBox.style.opacity = "0";
        signupPasswordIcon.style.opacity = "0";
        signupIcon.style.opacity = "0";


    }, 200);


    setTimeout(() => {
        
        signupImg.style.display = "none";
        signupHead.style.display = "none";
        signupP.style.display = "none";
        screenoneBox.style.top = "-113px"
        signupPassword.style.display = "none";
        signupEmail.style.display = "none";
        signupbtn.style.display = "none";
        signupsocialBox.style.display = "none";
        signupPasswordIcon.style.display = "none";
        signupIcon.style.display = "none";

    }, 500);


    
    setTimeout(() => {
       
        screenoneHead.style.display = "block";
        screenoneP.style.display = "block";
        screenoneBtn.style.display = "block";
        screenoneBtnTwo.style.display = "block";
        screenonebtnAlign.style.display = "flex";

         

    }, 600);


    setTimeout(() => {
            
        screenoneHead.style.opacity = "1";
        screenoneP.style.opacity = "1";
        screenoneBtn.style.opacity = "1";
        screenoneBtnTwo.style.opacity = "1";
       
         

    }, 700);



})

/* login section */



/* sign up section (start) */


var loginHead = document.querySelector('.login-head');

var loginformEmail = document.querySelector('.login-email');

var loginformPass = document.querySelector('.login-pass');

var loginformUser = document.querySelector('.login-username');

var loginIcon = document.querySelector('.login-icon');

var loginIconPass = document.querySelector('.login-icon-password');

var loginIconEmail = document.querySelector('.login-email-icon');

var loginBtn = document.querySelector('.login-btn');

var loginCross = document.querySelector('.login-cross');

var loginSocialIcon = document.querySelector('.social-signup-box-2');


screenoneBtn.addEventListener('click' , function(){





    /* screenone removed (start) */

    screenoneBox.style.top = "-400px";

    setTimeout(() => {
        
        screenoneHead.style.opacity = "0";
        screenoneP.style.opacity = "0";
        screenoneBtn.style.opacity = "0";
        screenoneBtnTwo.style.opacity = "0";


    }, 20);


    setTimeout(() => {
        
        screenoneHead.style.display = "none";
        screenoneP.style.display = "none";
        screenoneBtn.style.display = "none";
        screenoneBtnTwo.style.display = "none";


    }, 600);


    setTimeout(() => {
        
        loginHead.style.display = "block";
        loginformEmail.style.display = "block";
        loginformPass.style.display = "block";
        loginformUser.style.display = "block";
        loginIcon.style.display = "block";
        loginIconPass.style.display = "block";
        loginIconEmail.style.display = "block";
        loginBtn.style.display = "block";
        loginCross.style.display = "block";
        loginSocialIcon.style.display = "block";

    }, 640);

    setTimeout(() => {
        
       loginHead.style.opacity = "1";
       loginformEmail.style.opacity = "1";
       loginformPass.style.opacity = "1";
       loginformUser.style.opacity = "1";
       loginIcon.style.opacity = "1";
       loginIconPass.style.opacity = "1";
       loginIconEmail.style.opacity = "1";
       loginBtn.style.opacity = "1";
       loginCross.style.opacity = "1";
       loginSocialIcon.style.opacity = "1";

    }, 700);

    /* screenone removed (end) */


});


loginCross.addEventListener('click' , function(){
 
      
    setTimeout(() => {
        
        screenoneBox.style.top = "-113px"

    }, 500);


    setTimeout(() => {
        
        loginHead.style.opacity = "0";
        loginformEmail.style.opacity = "0";
        loginformPass.style.opacity = "0";
        loginformUser.style.opacity = "0";
        loginIcon.style.opacity = "0";
        loginIconPass.style.opacity = "0";
        loginIconEmail.style.opacity = "0";
        loginBtn.style.opacity = "0";
        loginCross.style.opacity = "0";
        loginSocialIcon.style.opacity = "0";

    }, 200);


    setTimeout(() => {
        
        loginHead.style.display = "none";
        loginformEmail.style.display = "none";
        loginformPass.style.display = "none";
        loginformUser.style.display = "none";
        loginIcon.style.display = "none";
        loginIconPass.style.display = "none";
        loginIconEmail.style.display = "none";
        loginBtn.style.display = "none";
        loginCross.style.display = "none";
        loginSocialIcon.style.display = "none";

    }, 500);
    




    setTimeout(() => {
       
        screenoneHead.style.display = "block";
        screenoneP.style.display = "block";
        screenoneBtn.style.display = "block";
        screenoneBtnTwo.style.display = "block";
        screenonebtnAlign.style.display = "flex";

         

    }, 600);


    setTimeout(() => {
            
        screenoneHead.style.opacity = "1";
        screenoneP.style.opacity = "1";
        screenoneBtn.style.opacity = "1";
        screenoneBtnTwo.style.opacity = "1";
       
         

    }, 700);


});


/* sign up section (end) */


