let infeliz = document.querySelector('.emoji-item-0');
let triste = document.querySelector('.emoji-item-1');
let neutro = document.querySelector('.emoji-item-2');
let feliz = document.querySelector('.emoji-item-3');
let satisfeito = document.querySelector('.emoji-item-4');

// Função para adicionar o destaque de seleção
function selecionarRating(ratingGroup) {
  // Remover a classe 'checked' de todas as opções
  infeliz.forEach((item) => item.classList.remove('checked'));
  triste.forEach((item) => item.classList.remove('checked'));
  neutro.forEach((item) => item.classList.remove('checked'));
  feliz.forEach((item) => item.classList.remove('checked'));
  satisfeito.forEach((item) => item.classList.remove('checked'));

  // Adicionar a classe 'checked' à opção clicada
  ratingGroup.forEach((item) => item.classList.add('checked'));
}

// Adicionar eventos de clique a cada grupo de rating
infeliz.forEach((item) => {
  item.addEventListener('click', function () {
    selecionarRating(infeliz);
  });
});

triste.forEach((item) => {
  item.addEventListener('click', function () {
    selecionarRating(triste);
  });
});

neutro.forEach((item) => {
  item.addEventListener('click', function () {
    selecionarRating(neutro);
  });
});

feliz.forEach((item) => {
  item.addEventListener('click', function () {
    selecionarRating(feliz);
  });
});

satisfeito.forEach((item) => {
  item.addEventListener('click', function () {
    selecionarRating(satisfeito);
  });
});
