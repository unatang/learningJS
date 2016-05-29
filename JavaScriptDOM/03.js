window.onload = function()
{
    var par = document.getElementById("content");
    for(i=0; i<10; i++)
    {
        var a = document.createElement("a");
        var br = document.createElement("br");
        var big = document.createTextNode(i);
        a.setAttribute("href", "#");
        a.appendChild(big);
        par.appendChild(a);
        par.appendChild(br);
        
    }



}