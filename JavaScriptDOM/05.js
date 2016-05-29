window.onload = function()
{
    var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
    var text = ["images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg"];
    var content = document.getElementById("content");
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    for(i=0; i<4; i++)
    {
        var a = document.createElement("a");
        var td = document.createElement("td");
        var image = document.createElement("img");
        image.setAttribute("src", text[i]);
        a.setAttribute("href", images[i]);
        a.appendChild(image);
        td.appendChild(a);
        tr.appendChild(td);
        table.appendChild(tr);       
        content.appendChild(table);
    }
    var image = document.getElementById("image");
    var img = document.createElement("img");
    img.setAttribute("src", "images/haha.gif");
    image.appendChild(img);
    
    
    
}
