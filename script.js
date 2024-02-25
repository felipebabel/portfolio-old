// Função para rolar suavemente para um elemento específico
function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: 'smooth' });
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

// Controle dos botões "Show More" e "Show Less" para os cards
const cards = document.querySelectorAll('.portfolio .card');
const showMoreBtn = document.getElementById('showMoreBtn');
const showLessBtn = document.getElementById('showLess');
const initialVisibleCards = 6;
let visibleCards = initialVisibleCards;

// Mostra os primeiros 'initialVisibleCards' cards e esconde o resto
for (let i = initialVisibleCards; i < cards.length; i++) {
  cards[i].style.display = 'none';
}

// Mostra o botão 'Show More' se houver mais cards do que os inicialmente visíveis
if (cards.length > initialVisibleCards) {
  showMoreBtn.style.display = 'block';
}

// Mostra mais cards quando o botão 'Show More' é clicado
showMoreBtn.addEventListener('click', function () {
  for (let i = visibleCards; i < visibleCards + 3; i++) {
    if (cards[i]) {
      cards[i].style.display = 'block';
    }
  }
  visibleCards += 3;

  // Se não houver mais cards para mostrar, esconde o botão 'Show More'
  if (visibleCards >= cards.length) {
    showLessBtn.style.display = 'block';

    showMoreBtn.style.display = 'none';
  }
});

// Esconde cards extras quando o botão 'Show Less' é clicado
showLessBtn.addEventListener('click', function () {
  for (let i = visibleCards - 1; i >= initialVisibleCards; i--) {
    cards[i].style.display = 'none';
  }
  visibleCards = initialVisibleCards;
  showMoreBtn.style.display = 'block';
  showLessBtn.style.display = 'none';
});

const skillsCards = document.querySelectorAll('.skills .card');
const showMoreSkillsBtn = document.getElementById('showMoreSkills');
const showLessSkillsBtn = document.getElementById('showLessSkills');
const initialVisibleSkills = 8; // Alterado para 8
let visibleSkills = initialVisibleSkills;

// Mostra os primeiros 'initialVisibleSkills' cards e esconde o resto
for (let i = initialVisibleSkills; i < skillsCards.length; i++) {
  skillsCards[i].style.display = 'none';
}

// Mostra o botão 'Show More' se houver mais habilidades do que as inicialmente visíveis
if (skillsCards.length > initialVisibleSkills) {
  showMoreSkillsBtn.style.display = 'block';
}

// Mostra mais habilidades quando o botão 'Show More' é clicado
showMoreSkillsBtn.addEventListener('click', function () {
  for (let i = visibleSkills; i < visibleSkills + 3; i++) {
    if (skillsCards[i]) {
      skillsCards[i].style.display = 'block';
    }
  }
  visibleSkills += 3;

  // Se não houver mais habilidades para mostrar, esconde o botão 'Show More'
  if (visibleSkills >= skillsCards.length) {
    showLessSkillsBtn.style.display = 'block';
    showMoreSkillsBtn.style.display = 'none';
  }
});

// Esconde habilidades extras quando o botão 'Show Less' é clicado
showLessSkillsBtn.addEventListener('click', function () {
  for (let i = visibleSkills - 1; i >= initialVisibleSkills; i--) {
    skillsCards[i].style.display = 'none';
  }
  visibleSkills = initialVisibleSkills;
  showMoreSkillsBtn.style.display = 'block';
  showLessSkillsBtn.style.display = 'none';
});
