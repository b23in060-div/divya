// Typing Effect
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

// Particle Configuration
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ff1e1e" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ff1e1e",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 3 }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  }
});
