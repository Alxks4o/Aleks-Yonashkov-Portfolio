// Scroll fade in/out for mobile using Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible'); // fade in
            } else {
                entry.target.classList.remove('visible'); // fade out
            }
        });
    }, { threshold: 0.2 }); // triggers when 20% of card is visible

    cards.forEach(card => observer.observe(card));
});