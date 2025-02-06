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
