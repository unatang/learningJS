window.onload = function()
{
    var p = document.getElementById("para");
    p.onclick = function()
    {
        var content = document.getElementById("content");
        
        for(var i=0; i<10; i++)
        {
            var p = document.createElement("p");
            var txt = document.createTextNode("创建10个标签" + (i+1));
            p.appendChild(txt);
            content.appendChild(p);
        }
    }
    
        
        
    
    
}