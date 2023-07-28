const darki = document.getElementById("modedarki");
const body = document.querySelector("body");
const contactMe = document.getElementById("contact_Me")

darki.addEventListener("click", function () {
    this.classList.toggle("bi-moon");
    if( this,this.classList.toggle("bi-brightness-high-fill")){
        body.style.background= "white";
         body.style.color= "black";
        body.style.transition= "0.8s";
        contactMe.style.background= "lightyellow";
        // contactMe.style.border= "thick solid yellow";
        contactMe.style.color = "black"

    }else{
        body.style.background= "black";
         body.style.color= "white";
        body.style.transition= "0.8s";
        contactMe.style.background= "black";
        contactMe.style.color = "white"

    }


});