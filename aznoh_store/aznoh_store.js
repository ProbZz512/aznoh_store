
fetch("zaklad.html")
.then(response => response.text())
.then(data => document.getElementById("obsah").innerHTML = data);

function $(x){
    return document.getElementById(x)
}
function backtomenu(){
    
    setTimeout(() => {
        $("setupmenu").style.zIndex ="-1"
    }, 680);
   
    $("setupmenu").style.animation = "slideRightFrom0 0.7s"
    
}
function toinsidemenu(){
    
    $("setupmenu").style.zIndex = "1"
    $("setupmenu").style.transform = 'translateX(0)'
    $("setupmenu").style.animation = "slideLeft 0.7s"
}