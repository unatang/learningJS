window.onload = function()
{
    var content = document.getElementById("content");       
    for(i=0; i<=9; i++)
    {
        var para = document.createElement("p");
        var txt = document.createTextNode(i);
        para.appendChild(txt);
        content.appendChild(para);
    }  
    
}