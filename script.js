const text = "B.Tech Student | MERN Stack Learner | AI Enthusiast";
let i = 0;
function typing(){
    if(i < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// Scroll Reveal
window.addEventListener("scroll", function(){
    document.querySelectorAll(".reveal").forEach(el=>{
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
});
