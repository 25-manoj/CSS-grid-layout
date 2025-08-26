
let currentPath = window.location.pathname;

  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {

    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active'); // Add active class
    }
  });

console.log(currentPath)