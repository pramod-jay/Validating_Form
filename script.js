function openForm(){
    document.querySelector('.form-bg').classList.add('bg-active');
};

function closeForm(){
    document.querySelector('.form-bg').classList.remove('bg-active');
};


function error(id){
    document.getElementById(id).classList.add('input_error');
}

function span_success(id){
    document.getElementById(id).classList.add('span_success');
}

function span_error(id){
    document.getElementById(id).classList.remove('span_success');
}

function validateForm(){
    const format=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    var fName=document.getElementById('fname').value;
    var lName=document.getElementById('lname').value;
    var dob=document.getElementById('DOB').value;
    var eMail=document.getElementById('e_mail').value;
    var uName=document.getElementById('u_name').value;
    var pwd=document.getElementById('pwd').value
    var con_pwd=document.getElementById('con_pwd').value
    if(fName == ""){
        document.getElementById('f_name_error').innerHTML='First name is required';
        error('fname');
    }else{

    }
  
    if(lName == ""){
        document.getElementById('l_name_error').innerHTML='Last name is required';
        error('lname');
    }else{

    }
   
    if(dob == ""){
        document.getElementById('dob_error').innerHTML='Date of birth is required';
        error('DOB');
    }else{

    }
    if(eMail == ""){
        document.getElementById('eMail_error').innerHTML='Email is required';
        error('e_mail');
    }else if(!(eMail.match(format))){
        document.getElementById('eMail_error').innerHTML='Enter valid Email';
        error('e_mail');
    }else{

    }
    if(uName == ""){
        document.getElementById('uName_error').innerHTML='User name is required';
        error('u_name');
    }else{

    }
    if(pwd == ""){
        document.getElementById('pwd_error').innerHTML='Password is required';
        error('pwd');
    }else{

    }
    if(con_pwd == ""){
        document.getElementById('con_pwd_error').innerHTML='Password confirmation is required';
        error('con_pwd');
    }

}

var uName_counter=document.getElementById('uName_counter');
var uName_limit=10;
uName_counter.textContent=0 + "/" + uName_limit;

function validateUname(){
    var name=document.getElementById('u_name');

    uName_counter.textContent=name.value.length + "/" + uName_limit;
    
    if(!(name.value.match(/[a-z]/))){
        document.getElementById('uName_error').innerHTML='User name must contains simple lettrs';
        span_error('uName_error');
    }else if(name.value.match(/[ ]/)){
        document.getElementById('uName_error').innerHTML='Cant put space';
        span_error('uName_error');
    }else{
        document.getElementById('uName_error').innerHTML='All are good';
        span_success('uName_error');
    }
}

var fName_counter=document.getElementById('fName_counter');
var lName_counter=document.getElementById('lName_counter');
var name_limit=30;
fName_counter.textContent=0 + "/" + name_limit;
lName_counter.textContent=0 + "/" + name_limit;

function Name_counter(){
    var fname=document.getElementById('fname');
    fName_counter.textContent=fname.value.length + "/" + name_limit;
    var lname=document.getElementById('lname');
    lName_counter.textContent=lname.value.length + "/" + name_limit;
}

function age(){
    var userDateinput = document.getElementById("DOB").value;  
    var birthDate = new Date(userDateinput);
    var difference=Date.now() - birthDate.getTime(); 
    var  ageDate = new Date(difference); 
    var calculatedAge=   Math.abs(ageDate.getUTCFullYear() - 1970);
    document.getElementById('age_msg').textContent="Age: "+calculatedAge;
}