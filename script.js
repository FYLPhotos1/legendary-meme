document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const openBtn = document.getElementById('open-popup');
  const closeBtn = document.getElementById('close-popup');

  openBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.add('hidden');
    }
  });
});
