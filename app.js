// Form 1

const emailInput = document.getElementById('email');
const form = document.getElementById('email-form-content');
const submitButton = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');


submitButton.addEventListener('click', (e) => {
  if (!checkEmail()) {
    e.preventDefault(); 
  }
});

function checkEmail() {


  if (emailInput.value === '' || emailInput.value === null) {
    errorMessage.textContent = 'Email is required'; 
    errorMessage.style.display = 'block'; 
    successMessage.style.display = 'none'; 
    return false
  } else {
    successMessage.textContent = 'Email submitted successfully!';
    successMessage.style.display = 'block'; 
    errorMessage.style.display = 'none'; 
    return true
  }

}


// Form 2

const secondForm = document.querySelector('.access-form-content');
const email = document.querySelector('#access-email');
const accessBtn = document.querySelector('#submit-btn'); // Corrected ID
const accessError = document.querySelector('#access-error-message');
const accessSuccess = document.querySelector('#access-success-message');

secondForm.addEventListener('submit', (event) => {
    if (!checkForm()) {
        event.preventDefault(); 
    }
});

function checkForm() {
    if (email.value === '' || email.value === null) {
        accessError.textContent = 'Email is required';
        accessError.style.display = 'block';
        accessSuccess.style.display = 'none';
        return false;
    }
    else {
        accessSuccess.textContent = 'Email submitted successfully!';
        accessSuccess.style.display = 'block';
        accessError.style.display = 'none';
        return true;
    }
}