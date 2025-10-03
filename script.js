// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const nav = document.querySelector('.navbar');
const menuBtn = document.createElement('button');
menuBtn.innerText = "☰";
menuBtn.classList.add("menu-btn");
document.body.prepend(menuBtn);

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('show');
});

