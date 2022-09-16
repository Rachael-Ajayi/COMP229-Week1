"use strict";
var formValidity = true;
var input;
var Fname=document.getElementById("Fname");
var lname=document.getElementById("Lname");
var stadress=document.getElementById("StAdress");
var pcode=document.getElementById("ptAddress");
var password=document.getElementById("Pword");
var cPassword=document.getElementById("cPword");
var City=document.getElementById("city");
var Province=document.getElementById("pro");
var Email=document.getElementById("email");
var age = document.getElementById("nAge")


 function firstName(){
	var errorText=document.getElementById("firname");
	if(Fname.value===""){
		errorText.innerHTML =  "- First name is Required";
		Fname.setAttribute("style", "background-color: pink;");
		Fname.style.backgroundColor="pink";
		errorText.style.color = "red";
		formValidity=false
	}
	else{
		errorText.innerHTML = "";
		Fname.style.backgroundColor="";

 }
}



function Lastname(){
	var errorText=document.getElementById("Lrname");
	if(lname.value==="" ){
		errorText.innerHTML =  "- Last name is Required";
		errorText.style.color = "red";
		lname.setAttribute("style", "background-color: pink;");
		lname.style.backgroundColor="pink";
		formValidity=false;
	}else{
		lname.style.backgroundColor="";
		errorText.innerHTML = "";

 }
}

function address(){
	var errorText=document.getElementById("addy");
	if(stadress.value==="" ){
		errorText.innerHTML =  "- Last name is Required";
		errorText.style.color = "red";
		stadress.setAttribute("style", "background-color: pink;");
		stadress.style.backgroundColor="pink";
		formValidity=false;
	}else{
		stadress.style.backgroundColor="";
		errorText.innerHTML = "";

 }
}

function city(){
	var errorText=document.getElementById("cit");
	if(City.value==="" ){
		errorText.innerHTML =  "- City is Required";
		errorText.style.color = "red";
		City.setAttribute("style", "background-color: pink;");
		City.style.backgroundColor="pink";
		formValidity=false;
	}else{
		City.style.backgroundColor="";
		errorText.innerHTML = "";

 }
}

function provinces()
{
    var errorText=document.getElementById("prov");
	if(Province.value==="" ){
		errorText.innerHTML =  "- Province is Required";
		errorText.style.color = "red";
		Province.setAttribute("style", "background-color: pink;");
		Province.style.backgroundColor="pink";
		formValidity=false;
	}else{
		Province.style.backgroundColor="";
		errorText.innerHTML = "";

 }
}

function checkPassword(){
	var errorText=document.getElementById("pssw");
	password.style.background="";
	errorText.innerHTML = "";
	if((password.value!="") && (password.value.length > 6)){
		var required = /[0-9]/;
		if (!required.test(password.value)){
		errorText.innerHTML = "- Password lenght must be at least 6 characters long.<br/>- Password has to contain at least one number (0-9).<br/>- Password has to contain at least one uppercase (A-Z).";
		password.setAttribute("style", "background-color: pink;");
		password.style.backgroundColor="";
		formValidity=false;
	}
	if(!required.test(password.value)){
		required = /[A-Z]/;
		errorText.innerHTML = "- Password lenght must be at least 6 characters long.<br/>- Password has to contain at least one number (0-9).<br/>- Password has to contain at least one uppercase (A-Z).";
		password.setAttribute("style", "background-color: pink;");
		password.style.backgroundColor="";
		formValidity=false;
	}
}
	else{
		errorText.innerHTML = "- Password lenght must be at least 6 characters long.<br/>- Password has to contain at least one number (0-9).<br/>- Password has to contain at least one uppercase (A-Z).";
		password.setAttribute("style", "background-color: pink;");
		errorText.style.color = "red";
		formValidity = false;
		password.style.backgroundColor="pink";
}
}


function checkpasswordboxes(){
	var errorText=document.getElementById("cppw");
	if(cPassword.value != password.value){
		errorText.innerHTML = "- Password Confirmation doesn't match to password.";
		errorText.style.color = "red";
		cPassword.setAttribute("style", "background-color: pink;");
		formValidity=false;
	}else if(cPassword.value==""){
		cPassword.style.backgroundColor="pink";
		errorText.innerHTML="-Please confirm password";
		errorText.style.color = "red";
	}
	else{
		cPassword.style.backgroundColor="";
		errorText.innerHTML = "";		
    }
}



function validateEmail(){
	var errorText = document.getElementById("emal");
	var emailPattern = /^[_a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*@[a-zA-Z0-9\\-]+(\.[_a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$/;
	if (Email.value==="") 
    {
		errorText.innerHTML = "- Email is required.";
		Email.setAttribute("style", "background-color: pink;");
		errorText.style.color = "red";
		formValidity = false;
	}
	else if (!emailPattern.test(Email.value)) {
		errorText.innerHTML = "- The e-mail provided isn't valid e.g someone@somewhere.something.";
		Email.setAttribute("style", "background-color: pink;");
		errorText.style.color = "red";
		formValidity = false;
	}
	else{
		errorText.innerHTML = "";
		Email.style.backgroundColor="";
	}
}

function validateAge()
{
    var errorText = document.getElementById("errorage");

    if(age.value===""|| Fname.value < 18 ){
		errorText.innerHTML =  "- Age is required. <br/> Members must be at least 18 years old.";
		Fname.setAttribute("style", "background-color: pink;");
		Fname.style.backgroundColor="pink";
		errorText.style.color = "red";
		formValidity=false
	}
	else{
		errorText.innerHTML = "";
		Fname.style.backgroundColor="";

 }

}

function posAddress()
{
  var  errorText = document.getElementById("padd");
	var canadianPostalCode = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;

    if (pcode.value==="") {
		errorText.innerHTML = "- Postal code is required.";
		pcode.setAttribute("style", "background-color: pink;");
		errorText.style.color = "red";
		formValidity = false;
	}
	else if (!canadianPostalCode.test(pcode.value)) {
		errorText.innerHTML =  "- Postal code is not a valid Canada Postal Code (eg: A9A 9A9).";
		pcode.setAttribute("style", "background-color: pink;");
		errorText.style.color = "red";
		formValidity = false;
	}
	else{
		errorText.innerHTML = "";
		Email.style.backgroundColor="";
	}
}


function ValidateTextBoxes()
{
     
    if(Province.value=="")
    {
        Province.style.backgroundColor="pink";
        formValidity=false
    }
    else
    {
        Province.style.backgroundColor="";
    }

    if(City.value=="")
    {
        City.style.backgroundColor="pink";
        formValidity=false;
    }
    else
    {
        City.style.backgroundColor="";
    } 

    if(stadress.value=="")
    {
        stadress.style.backgroundColor="pink";
        formValidity=false;
    }
    else
    {
        stadress.style.backgroundColor="";
    }

    if(pcode.value=="")
    {
        pcode.style.backgroundColor="pink";
        formValidity=false;
    }
    else
    {
        pcode.style.backgroundColor="";
    }

    if(age.value=="")
    {
        age.style.backgroundColor="pink";
        formValidity=false
    }
    else
    {
        age.style.backgroundColor="";
    }
}


function removeselectdefaults()
{
    var emptyBoxes = document.getElementsByTagName("select");

    for(var i = 0; i < emptyBoxes.length; i++)
    {
        emptyBoxes[i].selectedIndex = -1;
    }
}


function createEventListeners(){
    removeselectdefaults();
	console.log("Checked");
	 document.getElementById("submit").addEventListener("click",function(){
		 console.log("Clicked");
		//  e.preventDefault();	 
		 firstName();
		 Lastname();
		 ValidateTextBoxes();
		 validateEmail();
         address();
		 posAddress();
		 checkPassword();
         provinces();
         city();
         validateAge();
		 checkpasswordboxes();
		 if (formValidity==true){
			alert ("You have Successfully Submitted Your Information. WELOME FELLOW OTAKU TO THE ANIME WORLD! ;)")
		 } else {
			alert("please fill out all required fields and click the Submit button");
			formValidity = true;
		 }
	 });
 }
window.addEventListener("load",createEventListeners,false);