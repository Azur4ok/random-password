function main() {
  const passwordField = document.getElementById('password');
  const alertBox = document.querySelector('.wrapper-alert-box');
  const copyItem = document.querySelector('.copy');
  const generateButton = document.querySelector('.wrapper-button');

  generateButton.addEventListener('click', () => randomPassword(passwordField));
  copyItem.addEventListener('click', () => copyPassword(passwordField, alertBox));
}

function randomPassword(input) {
  const chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ@#$%^_-';
  const password = [];
  const length = 14;
  for (let i = 0; i <= length; i++) {
    randomChar = Math.floor(Math.random() * chars.length);
    password.push(chars.substring(randomChar, randomChar + 1));
  }
  input.value = password.join('');
}

function copyPassword(input, alertBox) {
  input.select();
  input.setSelectionRange(0, 99999);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(input.value).then(() => {
      alertBox.classList.add('active');
      alertBox.textContent = 'Copied!';
    });
  } else {
    console.log('browser is not compatible');
  }
  setTimeout(() => alertBox.classList.remove('active'), 1000);
}

main();
