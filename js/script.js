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
sr80.reveal('header .image', {delay: 200, origin: 'bottom'});
sr80.reveal('.btn-menu', {delay:200, origin:'right'});

sr.reveal('.name', {delay:200, origin:'top'});
sr20.reveal('.personal-projects', {delay:200, origin:'right'});
sr.reveal('.job', {delay:200, origin:'right'});
sr.reveal('.info-home', {delay:200, origin:'left'});
sr.reveal('.copyright', {delay:200, origin:'left'});
sr.reveal('.socials', {delay:200, origin:'right'});
sr.reveal('.aboutme .card', {delay:200, origin:'right'});
sr.reveal('.headeraboutme', {delay:200, origin:'left'});
sr.reveal('.headerskills', {delay:200, origin:'right'});
sr.reveal('.headerportfolio', {delay:200, origin:'left'});
sr.reveal('.headerexperiences', {delay:200, origin:'right'});

//animation cards portfolio
const cardsportfolio = document.querySelectorAll('.portfolio .card');
if (window.matchMedia("(max-width: 600px)").matches) {
  cardsportfolio.forEach((card, index) => {
    const row = Math.floor(index / 1); // Assume 1 cards por linha
    const origin = row % 2 === 0 ? 'left' : 'right'; // Alterna a origem da animação

    sr.reveal(card, {
      delay: 200, // Delay baseado na posição do card na linha
      origin: origin,
      //easing: 'ease-in-out',
    });
  });
} else if (window.matchMedia("(max-width: 900px)").matches) {
  cardsportfolio.forEach((card, index) => {
    const row = Math.floor(index / 2); // Assume 2 cards por linha
    const origin = row % 2 === 0 ? 'left' : 'right'; // Alterna a origem da animação

    sr.reveal(card, {
      delay: 200, // Delay baseado na posição do card na linha
      origin: origin,
      //easing: 'ease-in-out',
    });
  });
} else {
  cardsportfolio.forEach((card, index) => {
    const row = Math.floor(index / 3); // Assume 4 cards por linha
    const origin = row % 2 === 0 ? 'left' : 'right'; // Alterna a origem da animação

    sr.reveal(card, {
      delay: 200, // Delay baseado na posição do card na linha
      origin: origin,
      //easing: 'ease-in-out',
    });
  });
}


//animation cards skills
const cardsskills = document.querySelectorAll('.skills .card');
if (window.matchMedia("(max-width: 900px)").matches) {
  cardsskills.forEach((card, index) => {
    const row = Math.floor(index / 2); // Assume 4 cards por linha
    const origin = row % 2 === 0 ? 'left' : 'right'; // Alterna a origem da animação

    sr.reveal(card, {
      delay: 200, // Delay baseado na posição do card na linha
      origin: origin,
      //easing: 'ease-in-out',
    });
  });
} else {
  cardsskills.forEach((card, index) => {
    const row = Math.floor(index / 4); // Assume 4 cards por linha
    const origin = row % 2 === 0 ? 'left' : 'right'; // Alterna a origem da animação

    sr.reveal(card, {
      delay: 200, // Delay baseado na posição do card na linha
      origin: origin,
      //easing: 'ease-in-out',
    });
  });
}

//animal cards experiencies
sr.reveal('.experiences .card:nth-child(odd)', { // Aplica a animação no primeiro card
  delay: 200,
  origin: 'left', // Animado da direita para o centro
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
      navMenu.classList.add('hide-menu');
      overlay.classList.remove('show-overlay');
      overlay.classList.add('hide-overlay');
  }

  function openMenu() {
    navMenu.classList.remove('hide-menu'); // Clean up the closing class
    navMenu.classList.add('show-menu');
    overlay.classList.remove('hide-overlay'); // Clean up the closing class
    overlay.classList.add('show-overlay');
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
    if (navMenu.classList.contains('show-menu')) {
      closeMenu();
  } else {
      openMenu();
  }
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

function toggleLanguageModal() {
  var modal = document.getElementById("languageModal");
  var overlay = document.querySelector('.language-modal-overlay');;

  // Toggle the modal and overlay visibility
  modal.classList.toggle("show");
  overlay.classList.toggle("show");
  overlay.classList.remove("hide-overlay");

  // Add or remove the scroll event listener based on modal state
  if (modal.classList.contains("show")) {
    window.addEventListener("scroll", closeLanguageModalOnScroll);
  } else {
    window.removeEventListener("scroll", closeLanguageModalOnScroll);
  }
}

function closeLanguageModalOnScroll() {
  var modal = document.getElementById("languageModal");
  var overlay = document.querySelector('.language-modal-overlay');;

  // Remove the 'show' class to hide the modal and overlay
  modal.classList.remove("show");
  overlay.classList.add("hide-overlay");
  overlay.classList.remove("show");

  // Remove the scroll event listener
  window.removeEventListener("scroll", closeLanguageModalOnScroll);
}


function showLanguageOptions() {
  document.getElementById("languageModal").style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("languageModal");
  var overlay = document.querySelector('.language-modal-overlay');;

  modal.classList.remove("show");
  overlay.classList.add("hide-overlay");
  overlay.classList.remove("show"); // Ensure overlay is hidden
}

function downloadCV(language) {
  if (language === "pt") {
    downloadCVPdf("cv_felipe_babel_pt.pdf", "doc/")
  } else if (language === "en") {
    downloadCVPdf("cv_felipe_babel_en.pdf", "doc/")
  }
  closeModal();
}

function downloadCVPdf(fileName, filePath) {
  var link = document.createElement("a");
  link.href = filePath + fileName;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
} 

document.getElementById("languageModalOverlay").addEventListener("click", closeModal);

//load page when it's full loaded
window.addEventListener('load', function() {
  document.body.style.visibility = 'visible';
  document.body.style.opacity = '1';
});

fetch('config.json')
      .then(response => response.json())
      .then(data => {
        const currentYear = new Date().getFullYear();

        const experience = document.getElementById('variable_experience');
        const graduating = document.getElementById('variable_graduating');
        const aboutme = document.getElementById('variable_aboutme');
        const copyright = document.getElementById('copyright');
        copyright.innerHTML = `Copyright © ` + currentYear + ` Felipe Babel. All Rights Reserved.`;
        experience.innerHTML = `${data.home.experience}`;
        graduating.innerHTML = `${data.home.degree}`;
        aboutme.innerHTML = `${data.about_me}`;

        portfolio(data);
        renderExperiences(data);
      
  })

        

      .catch(error => {
        console.error('Error loading JSON:', error);
      });