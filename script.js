// Função para rolar suavemente para um elemento específico
function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    const navHeight = document.querySelector('nav').offsetHeight; // Altura da barra de navegação
    const offsetTop = elements[instance].getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
}

// Adiciona o evento de clique aos links
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");

link1.addEventListener('click', () => {
  scrollToElement('.home');
});

link2.addEventListener('click', () => {
  // Scroll para o segundo elemento com a classe "header"
  scrollToElement('.header');
});

link3.addEventListener('click', () => {
  scrollToElement('.header', 1);
});

link4.addEventListener('click', () => {
  scrollToElement('.header', 2);
});

link5.addEventListener('click', () => {
  scrollToElement('.header', 3);
});

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