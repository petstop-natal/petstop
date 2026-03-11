const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar ul');

menuIcon.onclick = () => {
  // Alterna o ícone entre 'menu' e 'X' (opcional, se quiser efeito visual)
  menuIcon.classList.toggle('bx-x');
  // Mostra ou esconde o menu
  navbar.classList.toggle('active');
};