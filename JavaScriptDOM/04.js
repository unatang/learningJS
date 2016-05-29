window.onload = function()
{
    var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
    var titles = ["one", "two", "three", "four"];
    var content = document.getElementById("content");
    for(i=1; i<5; i++)
    {
        var a = document.createElement("a");
        var  txt = document.createTextNode("picture" + i);
        var br = document.createElement("br");
        a.appendChild(txt);
        a.appendChild(br);
        a.setAttribute("href", images[i-1]);
        a.setAttribute("title", titles[i-1]);
        content.appendChild(a);     
    }  
}