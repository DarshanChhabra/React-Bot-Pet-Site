 var max = 20;
 var min = 8;

 function LoginformValidation()
{
 var uname = document.logmein.username;
 var passid = document.logmein.password; 
 if(allLetter(uname) && passid_validation(passid,max,min))
 {
  return true;
 }
 else return false;
}

function SignupformValidation()
{
 var uemail = document.signmein.emailid;
 var uname = document.signmein.username;
 var passid = document.signmein.password;
 if(allLetter(uname) && passid_validation(passid,max,min) && ValidateEmail(uemail))
 {
  return true;
 }
 else return false;
}

function MailusValidation()
{
 var uname = document.mailus.username;
 var uemail = document.mailus.emailid;
 if(allLetter(uname) && ValidateEmail(uemail))
 {
  return true;
 }
 else return false;
}

 function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}

function passid_validation(passid,max,min)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len > max || passid_len <= min)
{
alert("Password should not be empty and the length should be between "+min+" to "+max);
passid.focus();
return false;
}
return true;
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
