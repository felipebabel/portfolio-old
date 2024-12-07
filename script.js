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

function toggleLanguageModal() {
  var modal = document.getElementById("languageModal");
  var overlay = document.getElementById("languageModalOverlay");

  // Toggle the modal and overlay visibility
  modal.classList.toggle("show");
  overlay.classList.toggle("show");

  // Add or remove the scroll event listener based on modal state
  if (modal.classList.contains("show")) {
    window.addEventListener("scroll", closeLanguageModalOnScroll);
  } else {
    window.removeEventListener("scroll", closeLanguageModalOnScroll);
  }
}

function closeLanguageModalOnScroll() {
  var modal = document.getElementById("languageModal");
  var overlay = document.getElementById("languageModalOverlay");

  // Remove the 'show' class to hide the modal and overlay
  modal.classList.remove("show");
  overlay.classList.remove("show");

  // Remove the scroll event listener
  window.removeEventListener("scroll", closeLanguageModalOnScroll);
}


function showLanguageOptions() {
  document.getElementById("languageModal").style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("languageModal");
  var overlay = document.getElementById("languageModalOverlay");

  modal.classList.remove("show");
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
        const inter_title = document.getElementById('variable_inter_title');
        const inter_dt = document.getElementById('variable_inter_dt');
        const inter_ds = document.getElementById('variable_inter_ds');
        const dev_title = document.getElementById('variable_dev_title');
        const dev_dt = document.getElementById('variable_dev_dt');
        const dev_ds = document.getElementById('variable_dev_ds');
        const copyright = document.getElementById('copyright');
        copyright.innerHTML = `Copyright © ` + currentYear + ` Felipe Babel. All Rights Reserved.`;
        experience.innerHTML = `${data.home.experience}`;
        dev_title.innerHTML = `${data.DEV_PHILIPS_TITLE}`;
        dev_dt.innerHTML = `${data.DEV_PHILIPS_DT}`;
        dev_ds.innerHTML = `${data.DEV_PHILIPS_DS}`;
        inter_title.innerHTML = `${data.INTERN_PHILIPS_TITLE}`;
        inter_dt.innerHTML = `${data.INTERN_PHILIPS_DT}`;
        inter_ds.innerHTML = `${data.INTERN_PHILIPS_DS}`;
        graduating.innerHTML = `${data.home.degree}`;
        aboutme.innerHTML = `${data.about_me}`;

        const headerPortfolio = document.querySelector('.headerportfolio');

  // Aplica o estilo ao header do portfólio
  headerPortfolio.style.marginBottom = '1rem';
  headerPortfolio.style.color = '#fff';
  headerPortfolio.style.textAlign = 'center';
  headerPortfolio.style.fontSize = '2.25rem';
  headerPortfolio.style.fontWeight = '600';

    
    const showMoreBtn = document.getElementById('portfolioShowMoreBtn');
    const showLessBtn = document.getElementById('portfolioShowLessBtn');
    const projects = data.projects;

    // Função para criar os cards dos projetos
    function createProjectCards(projects) {
      const portfolioContainer = document.getElementById('portfolio');
      portfolioContainer.innerHTML = '';
      if (window.matchMedia('(max-width: 600px)').matches) {
        // Ajusta a coluna do grid para 1 quando a largura for menor que 600px
        if (portfolioContainer) {
          portfolioContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
        }
      } else {
        // Restaura para 3 colunas para telas maiores
        if (portfolioContainer) {
          portfolioContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        }
      }
      projects.forEach(project => {
        
        portfolioContainer.style.display = 'grid';
        portfolioContainer.style.marginTop = '3rem';
        portfolioContainer.style.gap = '2rem';
        
        // Cria o card
        const card = document.createElement('div');
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
        card.classList.add('card');  // Aplica a classe 'card'

        // Cria o div da imagem
        const imageDiv = document.createElement('div');
        imageDiv.style.width = '100%';
        imageDiv.style.height = '80%';
        imageDiv.style.overflow = 'hidden';
        imageDiv.classList.add('image');

        const image = document.createElement('img');
        image.src = project.image;
        image.alt = project.title;  
        image.style.width = '100%';
        image.style.height = '100%';
        image.style.objectFit = 'cover';

        imageDiv.appendChild(image);

        // Cria o link do GitHub
        const linkDiv = document.createElement('div');
        linkDiv.style.display = 'flex'; // Garante que o flexbox funcione
        linkDiv.style.justifyContent = 'center';
        linkDiv.style.alignItems = 'center';
        linkDiv.style.height = '20%';
        linkDiv.classList.add('link-github');

        const link = document.createElement('a');
        link.href = project.link;
        link.target = '_blank';

        const icon = document.createElement('i');
        icon.classList.add('ri-github-line');
        link.appendChild(icon);
        linkDiv.appendChild(link);
        card.style.backgroundColor = '#27272a';
        card.style.flexDirection = 'column';
        card.style.border = '2px solid transparent';
        card.style.overflow = 'hidden';
        card.style.display = 'flex';
        card.style.borderRadius = '15px';
        card.style.alignItems = 'stretch';
        card.style.transition = 'all 0.3s ease';

        
        // Define o comportamento de hover
        card.addEventListener('mouseenter', () => {
          card.style.backgroundColor = '#323232';
          card.style.borderColor = 'rgb(255, 127, 38)';
        });

        card.addEventListener('mouseleave', () => {
          card.style.backgroundColor = '#27272a';
          card.style.borderColor = 'transparent';
        });
        // Adiciona a imagem e o link ao card
        card.appendChild(imageDiv);
        card.appendChild(linkDiv);

        // Adiciona o card ao container do portfólio
        portfolioContainer.appendChild(card);
      });
    }

    // Inicialmente mostra apenas 3 projetos
    createProjectCards(projects, 0, 3);

    // Ao clicar em "Show More", mostra todos os projetos
    showMoreBtn.addEventListener('click', () => {
      createProjectCards(projects, 0, 3);  // Mostra todos os projetos
      showMoreBtn.style.display = 'none';  // Esconde o botão "Show More"
      showLessBtn.style.display = 'block';  // Exibe o botão "Show Less"
    });

    // Ao clicar em "Show Less", mostra apenas os 3 primeiros projetos
    showLessBtn.addEventListener('click', () => {
      createProjectCards(projects);  // Mostra apenas os 3 primeiros projetos
      showMoreBtn.style.display = 'block';  // Exibe o botão "Show More"
      showLessBtn.style.display = 'none';  // Esconde o botão "Show Less"
    });
  })

        

      .catch(error => {
        console.error('Error loading JSON:', error);
      });