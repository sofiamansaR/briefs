var navBar = document.getElementById("navbar");



var x = 0 ;

window.addEventListener("scroll",stikyNav);

function stikyNav(){
    if(window.pageYOffset > 10){
        navBar.classList.add("navwithcolor");
    }else{
        navBar.classList.remove("navwithcolor");
    }
    
}
function submitform(){
    myForm.submit();
}
