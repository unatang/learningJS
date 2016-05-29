window.onload = function()
{
    var content = document.getElementById("content");
    var pic = document.createElement("img");
    pic.setAttribute("src", "images/haha.gif");
    // 给pic设置id
    pic.setAttribute("id", "placeholder");
    image.appendChild(pic);
    // 给<div id="content">添加鼠标事件
    content.onmouseover = function()
    {
        // 选取img元素
        var img = document.getElementById("placeholder");
        // 修改img元素src属性的值
        img.setAttribute("src", "images/4.jpg");
    }
    
    // content.onmouseout = function()
    // {
        // var img = document.getElementById("placeholder");
        // img.setAttribute("src", "images/haha.gif");
    // }
}