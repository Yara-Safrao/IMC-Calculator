const calculateButton = document.getElementById('calculate');
const resultMessage = document.getElementById('result-message');

function calculateIMC() {
  const name = document.getElementById('name').value.trim();
  const height = parseFloat(document.getElementById('height').value.trim());
  const weight = parseFloat(document.getElementById('weight').value.trim());

  resultMessage.textContent = '';

  if (!name) {
    showErrorMessage('Please enter your name.');
    return;
  }
  if (isNaN(height) || height <= 0) {
    showErrorMessage('Please enter a valid height.');
    return;
  }
  if (isNaN(weight) || weight <= 0) {
    showErrorMessage('Please enter a valid weight.');
    return;
  }

  // Calculate IMC and round to the nearest whole number
  const imc = Math.round(weight / Math.pow(height / 100, 2));

  // Generate the Result Message
  let message = `${name}, your IMC is ${imc}. `;
  resultMessage.style.color = determineIMCColor(imc);

  // Determine IMC category
  if (imc < 18.5) {
    message += 'You are underweight.';
  } else if (imc >= 18.5 && imc < 24.9) {
    message += 'You have a normal weight.';
  } else if (imc >= 25 && imc < 29.9) {
    message += 'You are overweight.';
  } else {
    message += 'You are obese.';
  }

  // Display the result message
  resultMessage.textContent = message;
}

// Show Error Message Function
function showErrorMessage(message) {
  resultMessage.textContent = message;
  resultMessage.style.color = '#e74c3c'; // Red color for error
}

// Determine IMC Category Color Function
function determineIMCColor(imc) {
  if (imc < 18.5) {
    return '#f39c12'; // Orange for underweight
  } else if (imc >= 18.5 && imc < 24.9) {
    return '#27ae60'; // Green for normal weight
  } else if (imc >= 25 && imc < 29.9) {
    return '#e67e22'; // Orange for overweight
  } else {
    return '#e74c3c'; // Red for obesity
  }
}

// Add event listener to the Calculate button
calculateButton.addEventListener('click', calculateIMC);
