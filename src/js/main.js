const form = document.forms[0];
const payButton = form.elements.submit;

payButton.addEventListener('click', function(e) {
  e.preventDefault();
  form.classList.toggle('modal--full');
  setTimeout('3000');
});
