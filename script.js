(function() {
    emailjs.init("jqEhZxDGvsNpfdbp4"); // Replace with your actual Email.js User ID
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Collect form values
    let params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    console.log("Sending email...", params); // Debugging log

    // Send email using Email.js
    emailjs.send("service_54esn64", "template_sqf5oh7", params)
    .then(response => {
        console.log("Email Sent Successfully!", response);
        alert("Email Sent Successfully!");
        document.getElementById("contactForm").reset(); // Clear form after sending
    })
    .catch(error => {
        console.error("Email.js Error:", error);
        alert("Failed to send email. Check the console for details.");
    });
});
