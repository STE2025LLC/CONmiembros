document.addEventListener('DOMContentLoaded', () => {
  // Verificar autenticación
  auth.onAuthStateChanged(user => {
    const path = window.location.pathname;
    
    // Si está en página protegida y no logueado
    if (path.includes('dashboard') && !user) {
      window.location.href = '../login.html';
    }
    
    // Si está en login/registro y ya está logueado
    if ((path.includes('login') || path.includes('registro')) && user) {
      window.location.href = 'dashboard/index.html';
    }
  });

  // Logout
  const logoutButtons = document.querySelectorAll('.logout-btn');
  logoutButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      auth.signOut().then(() => {
        window.location.href = '../login.html';
      });
    });
  });
});
