function login(){
    var name=document.forms["Login"]["ten"].value;
    var password=document.forms["Login"]["mat_khau"].value;
    console.log(name,password);
    var object={
        name:name,
        password:password,
    }
    confirm("Bạn muốn hiện mật khẩu" + object.password);
}