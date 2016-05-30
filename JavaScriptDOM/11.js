window.onload = function()
{
    var pone = document.getElementsByClassName("pone");
    for(i=0; i<pone.length; i++)
    {
        pone[i].onmouseover = function()
        {
            var source = this.getAttribute("title");
            var placeholder = document.getElementById("placeholder");
            placeholder.innerHTML = source;            
        }
        pone[i].onmouseout = function()
        {
           var placeholder = document.getElementById("placeholder");
           placeholder.innerHTML = "查看全称";
        }
    }
    
   
}