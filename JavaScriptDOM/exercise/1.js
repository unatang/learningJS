window.onload = function()
{
    var a = document.getElementsByTagName("a");
    for(var i=0; i<a.length; i++)
    {
        a[i].onmouseover = function()
        {
            var href = this.getAttribute("href")
            var placeholder = document.getElementById("placeholder");
            placeholder.setAttribute("src", href);
            
        }    
    }   
}   