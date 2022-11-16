var btn=document.getElementById("btn");
var container=document.getElementById("container");


function fun(){
    btn.innerHTML='Goldenrod';
    if(container.style.backgroundColor.match("goldenrod"))
    
        
        {
            container.style.backgroundColor="gold";
            btn.innerHTML='gold';
        }
        else if(container.style.backgroundColor.match("gold"))
        {
            container.style.backgroundColor="green";
            btn.innerHTML='green';
        }
        else if(container.style.backgroundColor.match("green"))
        {
            container.style.backgroundColor="pink";
            btn.innerHTML='pink';
        }
        else if(container.style.backgroundColor.match("pink"))
        {
            container.style.backgroundColor="brown";
            btn.innerHTML='brown';
        }
        else if(container.style.backgroundColor.match("brown"))
        {
            container.style.backgroundColor="purple";
            btn.innerHTML='purple';
        }
        else{
            container.style.backgroundColor="goldenrod";

        }
    }




// }