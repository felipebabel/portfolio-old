
function portfolio(data) {
  const headerPortfolio = document.querySelector('.headerportfolio');
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
}
