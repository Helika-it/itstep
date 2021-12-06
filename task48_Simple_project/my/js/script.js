const game = document.forms.form__begining.game;
const login = document.forms.form__users.start;
const stats = document.forms.form__begining.stats;

game.addEventListener('click', (event) => {
  document.forms.form__begining.classList.add('d-none');
  document.forms.form__users.classList.remove('d-none');
  event.preventDefault();
  event.stopPropagation();
  return false;
});

login.addEventListener('click', () => {
  document.forms.form__begining.classList.add('was-validated');
  event.preventDefault();
  event.stopPropagation();
  return false;
});