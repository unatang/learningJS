window.onload = function() {
    var button = document.getElementById("button");
    button.onclick = function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username == "" || password == ""){
            alert("用户名密码不能为空");
        } else if(username == "admin" && password == "admin"){
            alert("登录成功");
        } else {
            alert("用户名或密码错误");
        }
    }
}