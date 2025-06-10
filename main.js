/*document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Here you can handle the form submission, e.g., send data to a server
        console.log('Form submitted:', data);

        // Reset the form after submission
        contactForm.reset();
        alert('Thank you for your message!');
    });
});*/
