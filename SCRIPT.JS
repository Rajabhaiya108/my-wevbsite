function loginUser() {
  var email = document.getElementById('email').value.trim();
  var pass = document.getElementById('password').value.trim();
  var error = document.getElementById('loginError');
  if(email === "user@example.com" && pass === "12345") {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    error.textContent = '';
  } else {
    error.textContent = "Invalid Email or Password. (Try user@example.com / 12345)";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelectorAll('.sidebar ul li');
  const sections = document.querySelectorAll('.section');

  menu.forEach(item => {

    item.onclick = function() {
      menu.forEach(m => m.classList.remove('active'));
      this.classList.add('active');
      sections.forEach(sec => sec.classList.remove('active'));
      document.getElementById(this.getAttribute('data-section')).classList.add('active');
    };
    item.ondblclick = function() {
      this.classList.remove('active');
      document.getElementById(this.getAttribute('data-section')).classList.remove('active');
    };
  });
});

function changePhoto(event){
  const input = event.target;
  const file = input.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = function(e){
      document.getElementById('profilePic').src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
}
function deletePhoto(){
  document.getElementById('profilePic').src = 'RAJA.jpeg'; 
}