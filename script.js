document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const section = document.querySelector(this.getAttribute("href"));
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Blood Request Form Submission
    const bloodRequestForm = document.getElementById("bloodRequestForm");
    if (bloodRequestForm) {
        bloodRequestForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Blood Request Submitted Successfully!");
            bloodRequestForm.reset();
        });
    }

    // Blood Donation Form Submission
    const donateBloodForm = document.getElementById("donateBloodForm");
    if (donateBloodForm) {
        donateBloodForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you for donating blood!");
            donateBloodForm.reset();
        });
    }

    // Admin Login Form
    const adminLoginForm = document.getElementById("adminLoginForm");
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "admin" && password === "admin123") {
                alert("Admin Logged In Successfully!");
                window.location.href = "blood-details.html"; // Redirect after login
            } else {
                alert("Invalid Admin Credentials!");
            }
        });
    }
});
