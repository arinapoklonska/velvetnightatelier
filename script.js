const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {

link.addEventListener("mouseenter", () => {
link.style.transform = "translateY(-3px)";
});

link.addEventListener("mouseleave", () => {
link.style.transform = "translateY(0)";
});

});


function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    const size = Math.random() * 5 + 5;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    star.style.left = Math.random() * 100 + 'vw';
    
    const duration = Math.random() * 6 + 6;
    star.style.animationDuration = `${duration}s`;
    
       star.style.opacity = Math.random() * 0.4 + 0.2;

        document.body.appendChild(star);

        setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

setInterval(createStar, 800);