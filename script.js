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

    emailjs.send("service_w5cwp4r", "template_sqf5oh7", params)
        .then(response => {
            alert("We have received your message and will get back to you shortly!");  
            document.getElementById("contactForm").reset();
        })
        .catch(error => {
            alert("We are unable to recieve your request " + error);
        });
});
