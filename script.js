// Kesan pudar (Fade In) apabila skrol
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Guna pada semua kotak tech-box
document.querySelectorAll('.tech-box').forEach(box => {
    box.style.opacity = "0";
    box.style.transform = "translateY(30px)";
    box.style.transition = "all 0.6s ease-out";
    observer.observe(box);
});

// Log ringkas untuk memastikan sistem berjalan
console.log("Agro X Space System Active...");
