window.onload = function()
{
    var title = ["a firework show", "a beatuiful rose", "the famous clock", "a cup of coffee"];
    var content = document.getElementById("content");
    for(i=1; i<5; i++)
    {
        var a = document.createElement("a");
        var txt = document.createTextNode("picture" + i);
        var br = document.createElement("br");
        a.setAttribute("href", "#");
        a.setAttribute("title", title[i-1]);
        a.onmouseover = function()
        {
            var img = document.getElementById("placeholder");
            img.setAttribute("src", "images/4.jpg");
        }
        a.onmouseout = function()
        {
            var img = document.getElementById("placeholder");
            img.setAttribute("src", "images/haha.gif"); 
        }
        a.appendChild(txt);
        a.appendChild(br);
        content.appendChild(a);  
    }
    var gallery = document.getElementById("gallery");
    var img = document.createElement("img");
    img.setAttribute("src", "images/haha.gif");
    img.setAttribute("id", "placeholder");
    gallery.appendChild(img);
    
}



