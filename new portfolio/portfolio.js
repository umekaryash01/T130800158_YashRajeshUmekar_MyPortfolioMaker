// Show Contact Details
function showdetails(){
    alert("Contact No : 7517028911");
    alert("Email : umekaryash01@gmail.com");
}

// Thank You with Validation
function validateForm(){
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all the fields before submitting.");
        return;
    }

    alert("Thanks " + name + "! Your message has been submitted.");
    document.getElementById("contactFormElement").reset();
}

// Smooth Scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
}

// Greeting based on time
window.onload = function(){
    let hour = new Date().getHours();
    let greet = "Hello!";
    if(hour < 12){
        greet = "Good Morning ☀️, I'm a Fullstack Developer";
    } else if(hour < 18){
        greet = "Good Afternoon 🌞, I'm a Fullstack Developer";
    } else {
        greet = "Good Evening 🌙, I'm a Fullstack Developer";
    }
    document.getElementById("greetingText").innerText = greet;
};
