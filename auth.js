function checkAuth() {
  if (!sessionStorage.getItem('authenticated')) {
    window.location.href = 'login.html';
  }
}

function logout() {
  sessionStorage.removeItem('authenticated');
  window.location.href = 'login.html';
}

document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  }
});

function toggleDropdown(el) {
  const menu = el.nextElementSibling;
  const isOpen = menu.classList.contains('open');
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  if (!isOpen) menu.classList.add('open');
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
  }
});