// Image Toggle functionality (only on index page)
const imageToggle = document.getElementById('imageToggle');
const imageContainer = document.getElementById('imageContainer');

if (imageToggle && imageContainer) {
    let imageVisible = false;

    // Placeholder images - you can replace these with actual image URLs
    const placeholderImages = [
        'https://via.placeholder.com/600x400/000000/ffffff?text=Image+1',
        'https://via.placeholder.com/600x400/ffffff/000000?text=Image+2',
        'https://via.placeholder.com/600x400/cccccc/000000?text=Image+3'
    ];

    let currentImageIndex = 0;

    imageToggle.addEventListener('click', () => {
        if (!imageVisible) {
            // Show image
            const img = document.createElement('img');
            img.src = placeholderImages[currentImageIndex];
            img.alt = 'Toggle image';
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
            imageVisible = true;
            imageToggle.textContent = 'Hide Image';
        } else {
            // Hide image
            imageContainer.innerHTML = '';
            imageVisible = false;
            imageToggle.textContent = 'Image Toggle';
            currentImageIndex = (currentImageIndex + 1) % placeholderImages.length;
        }
    });
}

// Back to Top functionality
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark mode toggle functionality
const seasonImages = ['photos/winter.jpg', 'photos/spring.jpg', 'photos/summer.jpg', 'photos/fall.jpg'];

function updateImages(isDark) {
    const imageItems = document.querySelectorAll('.image-item img');
    if (isDark) {
        // Dark mode: use fig.jpg for all images
        imageItems.forEach(img => {
            img.src = 'photos/fig.jpg';
        });
    } else {
        // Light mode: restore original season images
        imageItems.forEach((img, index) => {
            if (seasonImages[index]) {
                img.src = seasonImages[index];
            }
        });
    }
}

// Initialize dark mode
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    
    if (darkModeToggle) {
        // Check for saved dark mode preference
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        
        if (isDarkMode) {
            body.classList.add('dark-mode');
            updateImages(true);
        } else {
            // Ensure light mode images are set
            updateImages(false);
        }

        darkModeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');
            
            // Save preference
            localStorage.setItem('darkMode', isDark);
            
            // Switch images
            updateImages(isDark);
        });
    }
});

// Note: Smooth scrolling for anchor links removed since we're using separate pages now

