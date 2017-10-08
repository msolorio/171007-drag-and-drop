window.onload = function() {

  const items = document.querySelectorAll('.item');
  const cart = document.querySelector('.cart');

  const itemsInCart = {};

  function handleDragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

  function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  function buildItemsInCart() {
    cart.innerHTML = '';

    for (itemId in itemsInCart) {
      const item = document.getElementById(itemId);
      const itemClone = item.cloneNode(true);
      const span = document.createElement('span');
      span.classList.add('itemAmount');
      span.innerHTML = `${itemsInCart[itemId]}x`;
      itemClone.appendChild(span);
      cart.appendChild(itemClone);
    }
  }

  function handleDrop(event) {
    event.preventDefault();

    const itemId = event.dataTransfer.getData('text');

    if (!itemsInCart[itemId]) itemsInCart[itemId] = 1;
    else itemsInCart[itemId]++;

    buildItemsInCart();
  }

  items.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
  });

  cart.addEventListener('dragover', handleDragOver);
  cart.addEventListener('drop', handleDrop);
}
