import '../scss/main.scss';

const curiosidadesContainer = document.getElementById('curiosidades-container');
const searchInput = document.getElementById('search');

async function carregarCuriosidades() {
  const res = await fetch('/src/assets/curiosidades.json');
  const dados = await res.json();
  exibirCuriosidades(dados);
  searchInput.addEventListener('input', () => {
    const termo = searchInput.value.toLowerCase();
    const filtradas = dados.filter((item) =>
      item.titulo.toLowerCase().includes(termo)
    );
    exibirCuriosidades(filtradas);
  });
}

function exibirCuriosidades(lista) {
  curiosidadesContainer.innerHTML = '';
  lista.forEach((curio) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <h2>${curio.titulo}</h2>
      <p>${curio.descricao}</p>
    `;
    curiosidadesContainer.appendChild(card);
  });
}

carregarCuriosidades();
