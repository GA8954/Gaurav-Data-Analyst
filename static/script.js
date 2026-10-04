function toggleMenu(){
    const nav = document.getElementById("nav");
    if (nav) nav.classList.toggle("open");
}

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        const nav = document.getElementById("nav");
        if (nav) nav.classList.remove("open");
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
