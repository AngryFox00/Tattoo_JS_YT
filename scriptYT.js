document.addEventListener('DOMContentLoaded', function(){
// відображення поп-апу логування при натисканні на іконку логування
document.getElementById('loginImage').onclick = function() {
  document.getElementById('loginModal').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function() {
  document.getElementById('loginModal').style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == document.getElementById('loginModal')) {
      document.getElementById('loginModal').style.display = 'none';
  }
}
// валідація емейлу 

  const loginForm = document.querySelector('form');
  loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const userEmail = document.getElementById('useremail').value;

    if(!validateEmail(userEmail)) {
      alert('Будь ласка, введіть дійсну електрону адресу.');
      return;
    }
    console.log('Email:', userEmail);
  });
 

 function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());  
 }
// валідація паролю
  loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    const  password = document.getElementById('password').value;

    if(!validatePassword(password)) {
      alert('Пароль повинен містити від 6 до 12 символів, включаючи літери та цифри.');
      return;
    }
   
    console.log('Password',password);
   });
   
   function validatePassword(password) {
    const  passWord = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    return passWord.test(password);
   }

    var modal = document.getElementById('loginModal');
    var closeButton = modal.querySelector('.close');

    closeButton.addEventListener('click', function() {
      var form = modal.querySelector('form');
      form.reset();
    });

    // відображення паролю
  document.getElementById("togglePasswordOne").addEventListener("click", function() {
  const passwordInput = document.getElementById("password");
  passwordInput.type = "text";
  this.style.display = "none";
  document.getElementById("togglePasswordTwo").style.display = "block";
});

document.getElementById("togglePasswordTwo").addEventListener("click", function() {
  const passwordInput = document.getElementById("password");
  passwordInput.type = "password";
  this.style.display = "none";
  document.getElementById("togglePasswordOne").style.display = "block";
});


});