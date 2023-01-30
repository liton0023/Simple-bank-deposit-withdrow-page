document.getElementById('btn-submit').addEventListener('click',function(){
    const emailFiled=document.getElementById('user-email');
    const email=emailFiled.value;

    const passwordFiled=document.getElementById('user-password');
    const password=passwordFiled.value;

    // console.log(email,password);
    if(email==="rs@gmail.com" && password ==="123456"){
        window.location.href='bank.html'
    }
    else{
        alert('wrong email or passwor')
    }
})