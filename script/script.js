//Open form modal
function openForm(){
    document.querySelector('.form-bg').classList.add('bg-active');
}

//Form modal close and reset
function closeForm(){
    document.querySelector('.form-bg').classList.remove('bg-active');
    document.getElementById('age_msg').textContent='';
}

//Input field border green
function success(id){
    document.getElementById(id).classList.add('input_succes');
}

//Input field border red
function error(id){
    document.getElementById(id).classList.add('input_error');
}

//Span text color green
function span_success(id){
    document.getElementById(id).classList.add('span_success');
}

//Span text color red
function span_error(id){
    document.getElementById(id).classList.remove('span_success');
}

//Span remove
function span_remove(id){
    document.getElementById(id).classList.add('span_visible');
}

//message error
function error_msg(){
    document.querySelector('.main_msg').classList.add('main_msg_error');
    document.getElementById('para').innerHTML='Oopps something went wrong!!!';
}

//Form validation function
function validateForm(){
    const format=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    var fName=document.getElementById('fname').value;
    var lName=document.getElementById('lname').value;
    var dob=document.getElementById('DOB').value;
    var eMail=document.getElementById('e_mail').value;
    var uName=document.getElementById('u_name').value;
    var pwd=document.getElementById('pwd').value
    var con_pwd=document.getElementById('con_pwd').value
    var add_line1=document.getElementById('add_line1').value
    var add_line2=document.getElementById('add_line2').value
    var city=document.getElementById('city').value
    if(fName == ""){
        document.getElementById('f_name_error').innerHTML='First name is required';
        error('fname');
        error_msg();
    }else if(lName == ""){
        document.getElementById('l_name_error').innerHTML='Last name is required';
        error('lname');
        error_msg();
    }else if(dob == ""){
        document.getElementById('dob_error').innerHTML='Date of birth is required';
        error('DOB');
        error_msg();
    }else if(eMail == ""){
        document.getElementById('eMail_error').innerHTML='Email is required';
        error('e_mail');
        error_msg();
    }else if(!(eMail.match(format))){
        document.getElementById('eMail_error').innerHTML='Enter valid Email';
        error('e_mail');
        error_msg();
    }else if(uName == ""){
        document.getElementById('uName_error').innerHTML='User name is required';
        error('u_name');
        error_msg();
    }else if(pwd == ""){
        document.getElementById('pwd_error').innerHTML='Password is required';
        error('pwd');
        error_msg();
    }else if(con_pwd == ""){
        document.getElementById('con_pwd_error').innerHTML='Password confirmation is required';
        error('con_pwd');
        error_msg();
    }else if(!(pwd == con_pwd)){
        document.getElementById('pwd_error').innerHTML='Password missmatched';
        error('pwd');
        error('con_pwd');
        span_error('pwd_error');
        document.getElementById('con_pwd_error').innerHTML='';
        error_msg();
    }else{
        success('fname');
        success('lname');
        success('DOB');
        success('e_mail');
        success('u_name');
        success('pwd');
        success('con_pwd');
        span_remove('f_name_error');
        span_remove('l_name_error');
        span_remove('dob_error');
        span_remove('eMail_error');
        span_remove('uName_error');
        span_remove('pwd_error');
        span_remove('con_pwd_error');
        document.querySelector('.main_msg').classList.add('main_msg_success');
        document.getElementById('para').innerHTML='Account created succefully !!!';
    }
    if(add_line1 != ""){
        document.getElementById('add_line1').classList.add('input_succes_add');
    }

    if(add_line2 != ""){
        document.getElementById('add_line2').classList.add('input_succes_add');
    }

    if(city != ""){
        document.getElementById('city').classList.add('input_succes_add');
    }
    
}

//User name character counter and validation
var uName_counter=document.getElementById('uName_counter');
var uName_limit=10;
uName_counter.textContent=0 + "/" + uName_limit;

function validateUname(){
    var name=document.getElementById('u_name').value;

    uName_counter.textContent=name.length + "/" + uName_limit;
    
    if(name.match(/[ \t\n\r]/)){
        document.getElementById('uName_error').innerHTML="Can't put space";
        span_error('uName_error');
        error('u_name');
    }else if(name.match(/[^a-z]/)){
        document.getElementById('uName_error').innerHTML='User name must contains simple lettrs';
        span_error('uName_error');
        error('u_name');
    }else{
        document.getElementById('uName_error').innerHTML='All are good';
        span_success('uName_error');
        success('u_name');
    }
}

//First name and lastname character
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

//Age calculator
function age_calc(){
    var dob = document.getElementById("DOB").value;  
    var date = new Date(dob);
    var dif=Date.now() - date.getTime(); 
    var  age_date = new Date(dif); 
    var correct_age=   Math.abs(age_date.getUTCFullYear() - 1970);
    document.getElementById('age_msg').textContent="Age: "+correct_age;
}

//Password character counter validation
var pwd_counter1=document.getElementById('pwd_msg');
var pwd_limit=15;
pwd_counter1.textContent=6 + "/" + pwd_limit;

function validatePWD(){
    var pwd1=document.getElementById('pwd').value;

    if(pwd1.length>5){
        pwd_counter1.textContent=pwd1.length + "/" + pwd_limit;
    }

    if(!((pwd1.match(/[^a-z]/)) || (pwd1.match(/[^A-Z]/)))){
        document.getElementById('pwd_error').innerHTML='Password should contain letters';
        span_error('pwd_error');
    }else if(!(pwd1.match(/[0-9]/))){
        document.getElementById('pwd_error').innerHTML='Password should contain a number';
        span_error('pwd_error');
    }else if(pwd1.length>5){
        document.getElementById('pwd_error').innerHTML='All are good';
        span_success('pwd_error');
    }else{
        document.getElementById('pwd_error').innerHTML='Minimum length 6';
        span_error('pwd_error');
    }  
}

//Confirmation password character counter validation
var pwd_counter2=document.getElementById('con_pwd_msg');
pwd_counter2.textContent=6 + "/" + pwd_limit;

function validatePWD2(){
    var pwd2=document.getElementById('con_pwd').value;

    if(pwd2.length>5){
        pwd_counter2.textContent=pwd2.length + "/" + pwd_limit;
    }

    if(!((pwd2.match(/[a-z]/)) || (pwd2.match(/[A-Z]/)))){
        document.getElementById('con_pwd_error').innerHTML='Password should contain letters';
        span_error('con_pwd_error');
    }else if(!(pwd2.match(/[0-9]/))){
        document.getElementById('con_pwd_error').innerHTML='Password should contain a number';
        span_error('con_pwd_error');
    }else if(pwd2.length>5){
        document.getElementById('con_pwd_error').innerHTML='All are good';
        span_success('con_pwd_error');
    }else{
        document.getElementById('con_pwd_error').innerHTML='Minimum length 6';
        span_error('con_pwd_error');
    }
}



//Submit button enabled
document.querySelector('.sub_btn').classList.add('btn_disbled');
function agree_check(){
    check_box=document.getElementById('agree');
    btn=document.getElementById('submit_btn');
    document.querySelector('.sub_btn').classList.remove('btn_disbled');
    if(check_box.checked){
        btn.removeAttribute('disabled');
    }else{
        document.querySelector('.sub_btn').classList.add('btn_disbled');
        btn.disabled='true';
    }
}