function fun() {  
    var x = document.getElementById("frm1").value;  
     alert("Hi"+" "+x+" you have successfully submitted the details");  
 }

 function fun1(){
    document.getElementById("intro").innerHTML = "Summary";
    document.getElementById("intro").style.color = "yellow";
    document.getElementById("intro").style.fontSize = "50px";
}

function fun2(){
    document.getElementById("summary").style.backgroundColor = "red";
    document.getElementById("summary").style.fontSize = "30px";
}

function myFunction() {  
    document.getElementById("demo").style.fontSize = "25px";   
    document.getElementById("demo").style.color = "brown";  
    document.getElementById("demo").style.backgroundColor = "lightgreen";   
    document.getElementById("demo").innerHTML = "Dhiraj Thakur";        
}

let stylesmain = 'filter: blur(5px)';

function fun4(){
    document.getElementById("juhi").style = stylesmain;
}

function fun5(){
    document.getElementById("juhi2").style = stylesmain;
}
