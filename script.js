// Create sakura petals
function createSakura() {
    const container = document.getElementById('sakura-container');
    const petal = document.createElement('div');
    petal.classList.add('sakura');
    
    // Random position
    const startX = Math.random() * window.innerWidth;
    petal.style.left = `${startX}px`;
    petal.style.top = '-10px';
    
    // Random size
    const size = Math.random() * 5 + 5;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    
    // Random animation duration
    const duration = Math.random() * 10 + 5;
    petal.style.animationDuration = `${duration}s`;
    
    container.appendChild(petal);
    
    // Remove petal after animation completes
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Create initial petals
for (let i = 0; i < 30; i++) {
    setTimeout(createSakura, i * 300);
}

// Keep creating petals
setInterval(createSakura, 500);

// Floating text positions
const floatingTexts = document.querySelectorAll('.floating-text');
floatingTexts.forEach(text => {
    // Random delay
    text.style.animationDelay = `${Math.random() * 10}s`;
});