let userName =document.getElementById("userName");
let password =document.getElementById("password");
let message1 =document.getElementById("message1");
let message2 =document.getElementById("message2");

function checkUsername(callback)
{
  var userid="admin";
  if(userName.value.match(userid)){
    userName.style.border="1px solid blue";
    return callback;
  }
  else
  {
    message1.innerHTML="Invalid username";
    message1.style.color="red";
    userName.style.border="1px solid red";
    return false;    


  }
}
function checkPassword()
{
  var pwd=12345;
  if(password.value.match(pwd))
  {
    password.style.border="1px solid blue";
    return true;
  }else
  {
    message2.innerHTML="Invalid username";
    message2.style.color="red";
    password.style.border="1px solid red";
    return false;   

}
}





 