window.onload = function()
{
    var text = [];   //创建一个空数组
    for(var i=1; i<11; i++)
    {
        var num = 2*i - 1;
        text.push("paragraph" + num );
    }
    
    var content =document.getElementById("content");
    for(i=0; i<10; i++)
    {
    var p = document.createElement("p");
    var txt = document.createTextNode(text[i]);
    p.appendChild(txt);
    content.appendChild(p);
    }
}