/* 
    对07.js进行模块分离，分为两个函数 
 */
window.onload = function()
{    
    insertElement(createText(10));
}

var createText = function(num)         
{
    var txt = [];    // create an array
    for(var i=1; i<num; i++)
    {
        txt.push("paragraph" + i);
    }
    return txt;
}

var insertElement = function(text)
{
    var content = document.getElementById("content");
    for(var i=0; i<text.length; i++)
    {
        var p = document.createElement("p");
        var txt = document.createTextNode(text[i]);
        p.appendChild(txt);
        content.appendChild(p);
    }   
}