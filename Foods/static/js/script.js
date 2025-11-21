document.querySelectorAll('.quantity').forEach(counter => {
  const input = counter.querySelector('.quantity__input');
  const sum = counter.querySelector('.sum');
  const minus = counter.querySelector('.quantity__btn--minus');
  const plus = counter.querySelector('.quantity__btn--plus');
  let price = counter.querySelector('.food-card__price').textContent;
  let count = 0;
  plus.addEventListener('click', () => {
    let value = parseInt(input.value);
    input.value = ++value;
    count++
    console.log( Number(input.value), Number(price) );
    sum.textContent = Number(input.value) * Number(price);
    if (value > 1) minus.classList.remove('min');
  });
  minus.addEventListener('click', () => {
    
    sum.textContent = Number(input.value) * Number(price);
    let value = parseInt(input.value);
    count--
    if (value > 1) {
      input.value = --value;
      if (value === 1) minus.classList.add('min');
    }
  });
});