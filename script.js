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

  const newsletterForm = document.getElementById('blogForm');
  newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newsletterEmail = document.getElementById('blogEmail').value;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(newsletterEmail)) {
      document.getElementById('blogError').textContent = 'Invalid email format';
      return;
    }
    document.getElementById('blogError').textContent = '';
    alert('Blog form submitted successfully');
  });
});

  