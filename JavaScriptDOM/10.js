/*
    画廊onmouseover事件
 */
window.onload = function()
{
    var a = document.getElementsByTagName("a");  //得到一个数组
    for(i=0; i<a.length; i++)
    {
        a[i].onmouseover = function()  //a是一个数组
        {
        var source = this.getAttribute("href");  //必须用this 不能用a[i],执行环境原因。获取地址
        var placeholder = document.getElementById("placeholder");
        placeholder.setAttribute("src", source);
        }
        //鼠标离开事件
        a[i].onmouseout = function()
        {
            var placeholder = document.getElementById("placeholder");   
            placeholder.setAttribute("src", "images/haha.gif");
        }
    }
    
    
}