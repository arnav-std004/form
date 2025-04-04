(function() {
    emailjs.init("jqEhZxDGvsNpfdbp4"); // Replace with your Email.js User ID
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_54esn64", "template_sqf5oh7", {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    })
    .then(response => {
        alert("Email Sent Successfully!");
    })
    .catch(error => {
        console.error("Email.js Error:", error); // Log full error in the console
        alert("Failed to send email. Check the console for details.");
    });
    
