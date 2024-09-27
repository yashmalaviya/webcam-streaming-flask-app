// JavaScript for interactivity

// Toggle webcam feed visibility
document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.webcam-container img');
    const toggleButton = document.getElementById('toggleVideo');

    // Toggle visibility of webcam video
    toggleButton.addEventListener('click', function() {
        if (videoContainer.style.display === 'none') {
            videoContainer.style.display = 'block';
            toggleButton.textContent = 'Hide Webcam';
        } else {
            videoContainer.style.display = 'none';
            toggleButton.textContent = 'Show Webcam';
        }
    });

    // Add simple animation when hovering over the container
    const container = document.querySelector('.container');
    container.addEventListener('mouseover', function() {
        container.style.boxShadow = '0px 10px 20px rgba(0, 0, 0, 0.3)';
    });

    container.addEventListener('mouseout', function() {
        container.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)';
    });
});
