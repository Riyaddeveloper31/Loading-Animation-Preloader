document.addEventListener('DOMContentLoaded', function () {
    // Simulate a delay before showing the content
    setTimeout(function () {
        const preloader = document.querySelector('.preloader');
        const content = document.querySelector('.content');

        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 3000); // Change this value to set the delay in milliseconds
});
