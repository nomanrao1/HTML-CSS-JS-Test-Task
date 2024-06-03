
// JavaScript to handle click event and toggle 'active' class
document.addEventListener('DOMContentLoaded', function () {
  const sidenavItems = document.querySelectorAll('.li_a_sidenav_wselect');

  sidenavItems.forEach(item => {
    item.addEventListener('click', function () {
      sidenavItems.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });