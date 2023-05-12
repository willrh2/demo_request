// Get the form and add an event listener to handle form submission
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// Define the handleSubmit function
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the form fields
  const branch = document.getElementById('branch').value;
  const salesman = document.getElementById('salesman').value;
  const brand = document.getElementById('brand').value;
  const machine = document.getElementById('machine').value;
  const machinePurpose = document.getElementById('machinePurpose').value;
  const additionalEquipment = document.getElementById('additionalEquipment').value;
  const date = document.getElementById('date').value;
  const contactName = document.getElementById('contactName').value;
  const farmName = document.getElementById('farmName').value;
  const address = document.getElementById('address').value;
  const postcode = document.getElementById('postcode').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Create a new FormData object and append the form field values
  const formData = new FormData();
  formData.append('branch', branch);
  formData.append('salesman', salesman);
  formData.append('brand', brand);
  formData.append('machine', machine);
  formData.append('machinePurpose', machinePurpose);
  formData.append('additionalEquipment', additionalEquipment);
  formData.append('date', date);
  formData.append('contactName', contactName);
  formData.append('farmName', farmName);
  formData.append('address', address);
  formData.append('postcode', postcode);
  formData.append('email', email);
  formData.append('phone', phone);

  // Make a POST request to the server with the form data
  fetch('/submit', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      alert('Form submitted successfully!');
      form.reset(); // Reset the form fields
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    console.error('There was a problem submitting the form:', error);
  });
}
