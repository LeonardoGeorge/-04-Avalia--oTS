// Seleciona todos os elementos de label que contêm carinhas e texto
const emojiItems = document.querySelectorAll('.emoji-item');

// Adiciona eventos de destaque
emojiItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.classList.add('highlight'); // Adiciona classe de destaque
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('highlight'); // Remove classe de destaque
  });
});


// Seleciona todos os inputs de radio e os labels associados
const ratings = document.querySelectorAll('input[type="radio"]');
const labels = document.querySelectorAll('label');

// Adiciona evento de clique para destacar a opção selecionada
ratings.forEach((rating, index) => {
    rating.addEventListener('change', () => {
        // Remove a classe de destaque de todas as opções
        labels.forEach(label => label.classList.remove('selected'));
        
        // Adiciona a classe de destaque à opção selecionada
        labels[index].classList.add('selected');
    });
});
