// Selecionando os ícones
let infeliz = document.querySelector('#emoji-item-0');
let triste = document.querySelector('#emoji-item-1');
let neutro = document.querySelector('#emoji-item-2');
let feliz = document.querySelector('#emoji-item-3');
let satisfeito = document.querySelector('#emoji-item-4');

// Função para adicionar o destaque de seleção
function selecionarRating(ratingGroup) {
  // Remover a classe 'checked' de todas as opções
  [infeliz, triste, neutro, feliz, satisfeito].forEach(item => item.classList.remove('checked'));

  // Adicionar a classe 'checked' à opção clicada
  ratingGroup.classList.add('checked');
}

// Adicionando eventos de clique a cada ícone
[infeliz, triste, neutro, feliz, satisfeito].forEach(item => {
  item.addEventListener('click', function () {
    selecionarRating(item);
  });
});


// Função para efeito de hover
function adicionarHoverEffect(element) {
  element.addEventListener('mouseover', function () {
    element.classList.add('hover');
  });
  element.addEventListener('mouseout', function () {
    element.classList.remove('hover');
  });
}

// Aplicando o efeito de hover aos ícones
[infeliz, triste, neutro, feliz, satisfeito].forEach(adicionarHoverEffect);

// Adicionar eventos de clique para seleção de rating
infeliz.addEventListener('click', function () {
  selecionarRating(infeliz);
});
triste.addEventListener('click', function () {
  selecionarRating(triste);
});
neutro.addEventListener('click', function () {
  selecionarRating(neutro);
});
feliz.addEventListener('click', function () {
  selecionarRating(feliz);
});
satisfeito.addEventListener('click', function () {
  selecionarRating(satisfeito);
});
