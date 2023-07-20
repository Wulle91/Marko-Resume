function sendMail(contactForm) {
    emailjs.send("service_gcql1ag","template_t7gppy7", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            if (response.status == 200) {
                document.getElementById('email_sent').textContent = "Email sent successfully!"
                setTimeout(() => {
                    document.getElementById('email_sent').textContent = "Feel free to contact me"
                }, 3000)
                contactForm.name.value = "",
                contactForm.emailaddress.value = "",
                contactForm.projectsummary.value = ""
            }
        },
    );
    return false;  // To block from loading a new page
}