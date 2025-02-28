document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('click', function() {
    const content = document.querySelector('.dropdown-content');
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
      document.getElementById('error').textContent = 'Invalid email format';
      return;
    }
    document.getElementById('error').textContent = '';
    alert('Form submitted successfully');
  });

  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newsletterEmail = document.getElementById('newsletterEmail').value;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(newsletterEmail)) {
      document.getElementById('newsletterError').textContent = 'Invalid email format';
      return;
    }
    document.getElementById('newsletterError').textContent = '';
    alert('Newsletter form submitted successfully');
  });
});

  