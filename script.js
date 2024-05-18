window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var title = document.getElementById('title');
  if (window.scrollY > 50) {
      header.classList.add('navbar-centered');
      title.classList.add('navbar-centered');
  } else {
      header.classList.remove('navbar-centered');
      title.classList.remove('navbar-centered');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});