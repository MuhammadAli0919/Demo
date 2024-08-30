document.addEventListener('DOMContentLoaded', function() {
    // JavaScript for animations and interactivity goes here

    // Example: Simple 3D animation using CSS and JS
    const bannerAnimation = document.querySelector('.banner-animation');

    function rotateBanner() {
        bannerAnimation.style.transform = 'rotateY(360deg)';
        setTimeout(() => {
            bannerAnimation.style.transform = 'rotateY(0deg)';
        }, 2000);
    }

    setInterval(rotateBanner, 4000);
});
