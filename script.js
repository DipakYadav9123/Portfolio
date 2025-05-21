$(document).ready(function(){
    // Sticky navbar
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Scroll-up button
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2, nav: false },
            1000:{ items: 3, nav: false }
        }
    });
});

// Formspree submit logic (plain JS, placed outside jQuery block)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        status.innerHTML = "<p style='color:green;'>Message sent successfully!</p>";
        form.reset();
    } else {
        status.innerHTML = "<p style='color:red;'>Something went wrong. Try again!</p>";
    }
});
// Ensure EmailJS SDK is included in your HTML <head> or before this script:
// <script src="https://cdn.emailjs.com/sdk/3.2/email.min.js"></script>
// <script>emailjs.init("YOUR_USER_ID");</script>

window.onload = function() {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    statusDiv.innerHTML = "Sending message...";

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function() {
        statusDiv.innerHTML = "<span style='color:green;'>Message sent successfully!</span>";
        form.reset();
      }, function(error) {
        statusDiv.innerHTML = "<span style='color:red;'>Failed to send message. Try again later.</span>";
        console.error('FAILED...', error);
      });
  });
};

emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
emailjs.init("YOUR_USER_ID");