document.getElementById('home_btn').addEventListener('click',
function(){
    document.querySelector('.form-bg').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function(){
    document.querySelector('.form-bg').style.display = 'none';
});

var f_name_error=document.getElementById('f_name_error');
var l_name_error=document.getElementById('l_name_error');

function validateFname(){
    var fName=document.getElementById('fname').value;

    if(fName.length == ""){
        f_name_error.innerHTML='First name is required';
        document.querySelector('.form-bg').style.display = 'none';
    }
}