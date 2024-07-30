const menuBtn = document.getElementById("menu");

function change(){
    if(menuBtn.classList.contains('fa-bars')){
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-xmark');
    } else {
        menuBtn.classList.remove('fa-xmark');
        menuBtn.classList.add('fa-bars');
    }
}
