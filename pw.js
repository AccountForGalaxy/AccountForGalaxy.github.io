function showPasswordInput() {
  document.getElementById('passwordInput').style.display = 'block';
}

function checkPassword() {
  var enter = document.getElementById('password').value;
  var correct = '1234';

  if (enter === correct) {
    alert('일치');
  } else {
    alert('불일치');
  }
}
