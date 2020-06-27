let a = document.getElementById("span");
let toggle = 0;
a.addEventListener("click",colorInvert);
function colorInvert(){
    if(toggle === 0){
        this.style.color = "#fda456";
        toggle = 1;
    }
    else{
        this.style.color = "#231223";
        toggle = 0;
    }
}