document.getElementById("submit").addEventListener("click", heightConverter);



function heightConverter()
{
     var feet = parseInt(document.getElementById("feet").value*12);
     var inches = parseInt(document.getElementById("inches").value);
    
   

    if (inches <0)
    {
        document.getElementById("result").innerHTML = "Undefined";   
    }
    else
    {
        var cm = (feet + inches) * 2.54;
        var n = cm.toFixed(0);
    }
    

    document.getElementById("result").innerHTML = n;
    
}


