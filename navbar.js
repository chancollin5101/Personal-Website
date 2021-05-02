const navSlide = () => {
    const navBtn = document.getElementById("barBtn")
    const navdiv = document.querySelector(".desktopList")
    const navlinks = document.querySelector(".desktopList li");

    navBtn.onclick = function(event) {
        navdiv.classList.toggle("navActive");
        barBtn.classList.toggle("clicked");

        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';            
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        });
    }
}
    
navSlide();