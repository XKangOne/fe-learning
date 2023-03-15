    const one=document.getElementById("value")
    var counter = document.getElementById("value").innerHTML;
    function add(){
        counter++;
        if(counter>0&&counter<10){
            one.style.color="gray";
            document.getElementById("value").innerHTML = counter;
        }else if(counter>10){
            one.style.color="green"
            document.getElementById("value").innerHTML = counter;
        }
       
    }
    function sub(){
        counter--;
        if(counter>0&&counter<10){
            one.style.color="gray";
            document.getElementById("value").innerHTML = counter;
        }else if(counter<10){
            one.style.color="red";
            document.getElementById("value").innerHTML = counter;
        }
        document.getElementById("value").innerHTML = counter;
    }
function zero(){
    counter = 0;
    if(counter==0){
        one.style.color="gray";
        document.getElementById("value").innerHTML = counter;
    }
 
} 