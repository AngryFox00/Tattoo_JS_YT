document.addEventListener('DOMContentLoaded', function(){

  const loginModal = document.getElementById('loginModal');
  const loginImage = document.getElementById('loginImage');
  const closeButton = loginModal.querySelector('.close');
  const passwordInput = document.getElementById("password");

    // Попап для логування

  loginImage.onclick = function() {
    loginModal.style.display = 'block';
  }

  closeButton.onclick = function() {
    loginModal.style.display = 'none';
    document.querySelector('form').reset(); // Скидання форми
  }

  window.onclick = function(event) {
    if (event.target == loginModal) {
      loginModal.style.display = 'none';
      document.querySelector('form').reset(); // Скидання форми
    }
  }


  // Валідація емейлу та паролю
  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const userEmail = document.getElementById('useremail').value;
    const password = document.getElementById('password').value;

    if(!validateEmail(userEmail)) {
      alert('Будь ласка, введіть дійсну електронну адресу.');
      return;
    }

    if(!validatePassword(password)) {
      alert('Пароль повинен містити від 6 до 12 символів, включаючи літери та цифри.');
      return;
    }

    // Створення об'єкту для відправки на сервер
    const formData = {
      email: userEmail,
      password: password
    };

    // Відправка даних на сервер у форматі JSON
    fetch('https://cool-chat.club/tattoo/app/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log('Server response:', data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

    console.log('Email:', userEmail);
    console.log('Password:', password);
  });

  // Валідація емейлу
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());  
  }

  // Валідація паролю
  function validatePassword(password) {
    const passWord = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    return passWord.test(password);
  }

  // Відображення паролю
  document.getElementById("togglePasswordOne").addEventListener("click", function() {
    passwordInput.type = "text";
    this.style.display = "none";
    document.getElementById("togglePasswordTwo").style.display = "block";
  });

  document.getElementById("togglePasswordTwo").addEventListener("click", function() {
    passwordInput.type = "password";
    this.style.display = "none";
    document.getElementById("togglePasswordOne").style.display = "block";
  });

  //Активація кнопки "Увійти" після заповнення форми

  function updateButtonState() {
     var isEmailValid = emailInput.value.includes('@') && emailInput.value.includes('.valid');
     var isPasswordValid = passwordInput.value.length >=6;
     if (isEmailValid && isPasswordValid) {
      submitButton.classList.add('button-active');
      submitButton.disabled = false;
     } else {
      submitButton.classList.remove('button-active');
      submitButton.disables = true;
     }
  }
  emailInput.addEventListener('input', updateButtonState);
  passwordInput.addEventListener('input',updateButtonState);

     


});
