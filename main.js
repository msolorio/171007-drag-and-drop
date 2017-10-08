window.onload = function() {

  const items = document.querySelectorAll('.item');
  const cart = document.querySelector('.cart');

  function handleDragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  function handleDrop(event) {
    event.preventDefault();

    const itemId = event.dataTransfer.getData('text');
    const item = document.getElementById(itemId);
    const itemClone = item.cloneNode(true);
    cart.appendChild(itemClone);
  }

  items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
  });

  cart.addEventListener('dragover', handleDragOver);
  cart.addEventListener('drop', handleDrop);
}
