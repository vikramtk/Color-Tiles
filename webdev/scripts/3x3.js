let myButton = document.getElementById('b1');
myButton.onclick = function() 
{
    setcolour();
}

function setcolour()
{
    colors = ['FF0000','00FF00','21D4ED','FFA500','FFFF00','D412A1','FF0000','00FF00','21D4ED','FFA500','FFFF00','D412A1','FF0000','00FF00','21D4ED','FFA500','FFFF00','D412A1','FF0000','00FF00','21D4ED','FFA500','FFFF00','D412A1'];
    
    for(var i=1 ; i < 4 ; i++)
    {
        for(var j=1 ; j < 4 ; j++)
        {
            var cells = document.getElementById("m"+i+j);
            let a=Math.floor(Math.random() * colors.length);
            cells.style.backgroundColor = '#' + colors[a];
            colors.splice(a,1);
        }
    }
}