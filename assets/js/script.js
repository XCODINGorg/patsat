 // Function to handle form submission
 function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input value from the email input field
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim(); // Trim whitespace from the input

    // Validate the email format
    if (isValidEmail(email)) {
      alert('Thank you for subscribing!');
      emailInput.value = ''; // Clear the input field after successful submission
    } else {
      alert('Please enter a valid email address.');
    }
  }

  // Function to validate email format
  function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Add event listener to the form for form submission handling
  const subscribeForm = document.getElementById('subscribe-form');
  subscribeForm.addEventListener('submit', handleFormSubmit);