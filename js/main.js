let nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "black";
    }else{
        nav.style.backgroundColor = "transparent";
    }
})


  // Scroll Reveal
  const sr = ScrollReveal ({
      origin: 'top',
      distance: '60px',
      duration: 3000,
      reset: true
  });
   
   
  sr.reveal(`.newsletter-form, .features, .classes, .pricing, .team`, {
    interval: 100,
  });