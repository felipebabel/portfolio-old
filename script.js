function openMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');  
}

//_________________________________PORTFOLIO__________________________________

// Controle dos botões "Show More" e "Show Less" para os cards do portfólio
const portfolioCards = document.querySelectorAll('.portfolio .card');
const portfolioShowMoreBtn = document.getElementById('portfolioShowMoreBtn');
const portfolioShowLessBtn = document.getElementById('portfolioShowLessBtn');
const initialVisiblePortfolioCards = 6;
let visiblePortfolioCards = initialVisiblePortfolioCards;

// Mostra os primeiros 'initialVisiblePortfolioCards' cards e esconde o resto
for (let i = initialVisiblePortfolioCards; i < portfolioCards.length; i++) {
  portfolioCards[i].style.display = 'none';
}

// Mostra o botão 'Show More' se houver mais de 6 cards do portfólio
if (portfolioCards.length > initialVisiblePortfolioCards) {
  portfolioShowMoreBtn.style.display = 'block';
}

// Mostra mais cards do portfólio quando o botão 'Show More' é clicado
portfolioShowMoreBtn.addEventListener('click', function () {
  for (let i = visiblePortfolioCards; i < visiblePortfolioCards + 3; i++) {
    if (portfolioCards[i]) {
      portfolioCards[i].style.display = 'block';
    }
  }
  visiblePortfolioCards += 3;

  // Se o número de cards visíveis for igual ou maior que o total, mostra o botão 'Show Less'
  if (visiblePortfolioCards >= portfolioCards.length) {
    portfolioShowLessBtn.style.display = 'block';
    portfolioShowMoreBtn.style.display = 'none';
  }
});

// Esconde cards extras do portfólio quando o botão 'Show Less' é clicado
portfolioShowLessBtn.addEventListener('click', function () {
  for (let i = initialVisiblePortfolioCards; i < portfolioCards.length; i++) {
    portfolioCards[i].style.display = 'none';
  }
  visiblePortfolioCards = initialVisiblePortfolioCards;

  // Esconde o botão 'Show Less' e mostra o botão 'Show More'
  portfolioShowMoreBtn.style.display = 'block';
  portfolioShowLessBtn.style.display = 'none';
});

//_________________________________OPEN__________________________________

window.onload = function() {
  window.scrollTo(0, 0);
}
//_________________________________ANIMATION__________________________________

const sr = ScrollReveal ({distance :'40px', duration: 2500, reset: true});
const sr20 = ScrollReveal ({distance :'10px', duration: 1500, reset: true});
const sr80 = ScrollReveal ({distance :'80px', duration: 2500, reset: false});

sr80.reveal('.nav-logo-home', {delay: 200, opacity: 0, origin: 'left'});
sr80.reveal('.nav-links-home', {delay:200, origin:'right'});
sr80.reveal('header .image', {delay: 200, opacity: 0});

sr.reveal('.name', {delay:200, origin:'top'});
sr20.reveal('.personal-projects', {delay:200, origin:'right'});
sr.reveal('.job', {delay:200, origin:'right'});
sr.reveal('.info-home', {delay:200, origin:'left'});
sr20.reveal('.btn-menu', {delay:200, origin:'right'});
sr.reveal('.copyright', {delay:200, origin:'left'});
sr.reveal('.socials', {delay:200, origin:'right'});
sr.reveal('.aboutme .card', {delay:200, origin:'right'});
sr.reveal('.headeraboutme', {delay:200, origin:'left'});
sr.reveal('.headerskills', {delay:200, origin:'right'});
sr.reveal('.headerportfolio', {delay:200, origin:'left'});
sr.reveal('.headerexperiences', {delay:200, origin:'right'});
sr.reveal('.experiences .card:nth-child(odd)', { // Aplica a animação no primeiro card
  delay: 200,
  origin: 'left', // Animado da direita para o centro
  easing: 'ease-in-out', // Define uma função de animação
});

sr.reveal('.experiences .card:nth-child(even)', { // Aplica a animação no segundo card
  delay: 200,
  origin: 'right', // Animado da esquerda para o centro
});



//_________________________________MENU__________________________________


document.addEventListener('DOMContentLoaded', function() {
  var open = document.getElementById('menu-icon');
  var navMenu = document.querySelector('.nav-links-home-menu');
  var btnClose = document.getElementById('btn-close');
  var menuLinks = navMenu.querySelectorAll('a');
  var overlay = document.querySelector('.overlay');

  function closeMenu() {
      navMenu.classList.remove('show-menu');
      overlay.classList.remove('show-overlay');
  }

  btnClose.addEventListener('click', function() {
      closeMenu();
  });

  menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          closeMenu();
      });
  });

  open.addEventListener('click', function() {
      navMenu.classList.toggle('show-menu');
      overlay.classList.toggle('show-overlay');
  });

  overlay.addEventListener('click', function() {
    closeMenu(); // Fecha o menu quando o overlay é clicado
  });

  function toggleMenu() {
      if (window.innerWidth > 750) {
          navMenu.classList.remove('show-menu');
          overlay.classList.remove('show-overlay');
      } 
  }

  document.addEventListener('keyup', function(event) {
    if (event.key === "Escape") { // Fecha o menu se a tecla Esc for pressionada
        closeMenu();
    }
});

  window.addEventListener('resize', function() {
      toggleMenu();
  });

  toggleMenu(); // Chama a função para definir o estado inicial do menu
});

//_________________________________SKILLS__________________________________

// Controle dos botões "Show More" e "Show Less" para os cards de habilidades (skills)
const skillsCards = document.querySelectorAll('.skills .card');
const skillsShowMoreBtn = document.getElementById('skillsShowMoreBtn');
const skillsShowLessBtn = document.getElementById('skillsShowLessBtn');
const initialVisibleSkillsCards = 8;
let visibleSkillsCards = initialVisibleSkillsCards;

// Mostra os primeiros 'initialVisibleSkillsCards' cards e esconde o resto
for (let i = initialVisibleSkillsCards; i < skillsCards.length; i++) {
  skillsCards[i].style.display = 'none';
}

// Mostra o botão 'Show More' se houver mais de 8 cards de habilidades
if (skillsCards.length > initialVisibleSkillsCards) {
  skillsShowMoreBtn.style.display = 'block';
}

// Mostra mais cards de habilidades quando o botão 'Show More' é clicado
skillsShowMoreBtn.addEventListener('click', function () {
  for (let i = visibleSkillsCards; i < visibleSkillsCards + 4; i++) {
    if (skillsCards[i]) {
      skillsCards[i].style.display = 'block';
    }
  }
  visibleSkillsCards += 4;

  // Se o número de cards visíveis for igual ou maior que o total, mostra o botão 'Show Less'
  if (visibleSkillsCards >= skillsCards.length) {
    skillsShowLessBtn.style.display = 'block';
    skillsShowMoreBtn.style.display = 'none';
  }
});

// Esconde cards extras de habilidades quando o botão 'Show Less' é clicado
skillsShowLessBtn.addEventListener('click', function () {
  for (let i = initialVisibleSkillsCards; i < skillsCards.length; i++) {
    skillsCards[i].style.display = 'none';
  }
  visibleSkillsCards = initialVisibleSkillsCards;

  // Esconde o botão 'Show Less' e mostra o botão 'Show More'
  skillsShowMoreBtn.style.display = 'block';
  skillsShowLessBtn.style.display = 'none';
});

function downloadCV() {
  var fileName = "cv_felipe_babel.pdf";
  var filePath = "doc/" + fileName;
  var link = document.createElement("a");
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/*
TODO
ANIMAÇÃO MENU FECHAR ABRIR
ANIMAÇÃO CARDS SKILLS E PORTFOLIO
ARRUMAR PHOTO PHILIPS MOBILE
BUG ANIMAÇÃO FOTO PERFIL E MENU??
*/