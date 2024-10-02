// Function to show greeting message based on time of day
function showGreeting() {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    greetingElement.textContent = greeting;
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";

    if (currentTheme === "light") {
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
    }
}

// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to show a message when the resume is downloaded
function resumeDownloaded() {
    alert("Thank you for downloading my resume! I look forward to connecting with you.");
}

// Initialize the greeting message on page load
window.onload = function() {
    showGreeting();
};
