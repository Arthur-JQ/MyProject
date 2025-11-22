document.querySelectorAll('.quantity').forEach((counter, index) => {
  const input = counter.querySelector('.quantity__input');
  const minus = counter.querySelector('.quantity__btn--minus');
  const plus = counter.querySelector('.quantity__btn--plus');
  const sum = counter.querySelector('.sum');
  const name = counter.querySelector('.food-card__name').textContent.trim();
  const price = Number(counter.querySelector('.food-card__price').textContent);

  const storageKey = `card-${index}`;

  // Загружаем данные из localStorage или создаём новые
  let item = JSON.parse(localStorage.getItem(storageKey)) || {
    id: index,
    name,
    price,
    count: Number(input.value) || 1,
  };

  // Синхронизируем UI с данными
  input.value = item.count;
  sum.textContent = item.count * item.price;
  if (item.count > 1) {
    minus.classList.remove('min');
  }

  const saveToStorage = () => {
    localStorage.setItem(storageKey, JSON.stringify(item));
  };

  plus.addEventListener('click', () => {
    item.count++;
    input.value = item.count;
    sum.textContent = item.count * item.price;
    minus.classList.remove('min');
    saveToStorage();
  });

  minus.addEventListener('click', () => {
    if (item.count > 1) {
      item.count--;
      input.value = item.count;
      sum.textContent = item.count * item.price;
      if (item.count === 1) {
        minus.classList.add('min');
      }
      saveToStorage();
    }
  });
});