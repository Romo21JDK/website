document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search');
  const submit = document.getElementById('tiom');
  const note = document.getElementById('note');
  const head2 = document.getElementById('head2') || document.querySelector('.head2');
  if (head2) {
    const stored = localStorage.getItem('userName');
    if (stored) head2.textContent = stored;
  }

  if (!input || !submit || !note) return;

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    note.textContent = '';

    const raw = input.value.trim();
    if (!raw) {
      note.textContent = 'Please enter your name.';
      return;
    }

    let valid = false;
    try {
      valid = /^[\p{L}\s]+$/u.test(raw);
    } catch (err) {
      valid = /^[A-Za-z\s]+$/.test(raw);
    }

    if (!valid) {
      note.textContent = 'only letters and spaces (no numbers or symbols).';
      return;
    }
    const userName = raw; 
    localStorage.setItem('userName', userName);
    if (head2) head2.textContent = userName;

    window.location.href = 'home.html';
  });
});