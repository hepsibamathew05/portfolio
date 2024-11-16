// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom >= 0
    );
}

// Function to handle adding/removing the 'visible' class based on scroll position
function handleScroll() {
    const sections = document.querySelectorAll('.hidden');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Add event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case the sections are already in view
document.addEventListener('DOMContentLoaded', handleScroll);




function showDescription(id) {
    // Remove 'active' class from all description divs and title buttons
    document.querySelectorAll('.experience-description').forEach(desc => desc.classList.remove('active'));
    document.querySelectorAll('.experience-title-btn').forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the selected description and button
    document.getElementById(id).classList.add('active');
    document.querySelector(`.experience-title-btn[onclick="showDescription('${id}')"]`).classList.add('active');
}

// Set default description to show
document.addEventListener('DOMContentLoaded', () => {
    showDescription('telusinternational'); // Default to Verzeo description
});




(function() {
    emailjs.init("fVqtKqbzin2lvxzfk"); // Replace with your actual EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_2a9oysh', 'template_r5118pl', this)
        .then(function(response) {
            console.log('Success!', response.status, response.text);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('Failed...', error);
            alert('Failed to send message. Please try again.');
        });
});
