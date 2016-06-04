window.onload = function()
{
    var a = document.getElementsByTagName("a");
    for(var i=0; i<a.length; i++)
    {
        a[i].onmouseover = function()
        {
            var href = this.getAttribute("href");
            var title = this.getAttribute("title");
            var description = document.getElementById("description");
            var placeholder = document.getElementById("placeholder");
            placeholder.setAttribute("src", href);
            description.innerHTML = title;
        }
        
        a[i].onmouseout = function()
        {
            var placeholder = document.getElementById("placeholder");
            placeholder.setAttribute("src", "images/0.gif");
            
        }
    }   
}