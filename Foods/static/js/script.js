document.querySelectorAll('.quantity').forEach((counter, index) => {
  const input = counter.querySelector('.quantity__input');
  const minus = counter.querySelector('.quantity__btn--minus');
  const plus = counter.querySelector('.quantity__btn--plus');
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
  if (item.count > 1) {
    minus.classList.remove('min');
  }

  const saveToStorage = () => {
    localStorage.setItem(storageKey, JSON.stringify(item));
  };

  plus.addEventListener('click', () => {
    item.count++;
    input.value = item.count;
    minus.classList.remove('min');
    saveToStorage();
  });

  minus.addEventListener('click', () => {
    if (item.count > 1) {
      item.count--;
      input.value = item.count;
      if (item.count === 1) {
        minus.classList.add('min');
      }
      saveToStorage();
    }
  });
});

let all = document.querySelectorAll('*');
let but = document.querySelector('.but');

but.addEventListener('click', () => {
  if(but.textContent == 'Светлая тема') { 
    for(let item of all) {
      but.textContent = 'Темная тема';
      item.style.color = 'white';
      if(item.classList.contains('food-card')) { 
        item.style.backgroundColor = 'black';
      }
      document.body.style.backgroundColor = 'black';
    } } else {
    for(let item of all) {
      but.textContent = 'Светлая тема';
      item.style.color = 'black';
      document.body.style.backgroundColor = 'white';
    }
  }
})