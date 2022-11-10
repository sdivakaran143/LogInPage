function page1(id){
    document.getElementById(id).style.transform='translateY(0px)';
}
function page2(id){
    document.getElementById(id).style.transform='translateY(20px)';
}
function goto(){
    Window.open("techcommunity.microsoft.com/t5/image/serverpage/image-id/22771i53EF94F903D2CEB0/image-dimensions/1500?v=v2&px=-1","_blank");
}
function validateitis(username,password){
    var flag=1;
    if(username!=""){
        event.preventDefault();
        document.forms["login_form"]["username"].style.borderBottom="1px solid black";
        document.getElementById("inuser").innerHTML="";
    }
    if(password!=""){
        event.preventDefault();
        document.forms["login_form"]["password"].style.borderBottom="1px solid black";
        document.getElementById("inpass").innerHTML=""
    }
    if(username==""){
        event.preventDefault();
        document.forms["login_form"]["username"].style.borderBottom="1px solid red";
        document.getElementById("inuser").innerHTML="invalid username";
        flag=0;
    }
    if(password==""){
        event.preventDefault();
        document.forms["login_form"]["password"].style.borderBottom="1px solid red";
        document.getElementById("inpass").innerHTML="invalid password"
        flag=0;
    }
    return flag;
}
function loginplease(){
    const username =document.forms["login_form"]["username"].value;
    const password =document.forms["login_form"]["password"].value;
    let flag=validateitis(username,password);
    if(flag==1){
        window.open("https://www.geeksforgeeks.org", "_blank");
    }
}
function signupme(){

}