const productSelect = document.getElementById('product');
const quantityInput = document.getElementById('quantity');
const warrantyCheck = document.getElementById('warranty');
const deliveryCheck = document.getElementById('delivery');
const giftCheck = document.getElementById('gift');
const promoInput = document.getElementById('promo');
const calcBtn = document.getElementById('calcOrderBtn');
const resultDiv = document.getElementById('orderResult');

calcBtn.addEventListener('click', () => {
    // Получаем цену товара
    const productPrice = parseFloat(productSelect.value);
    const quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity < 1) {
        resultDiv.style.background = '#f8d7da';
        resultDiv.style.color = '#721c24';
        resultDiv.textContent = 'Пожалуйста, укажите корректное количество (минимум 1).';
        return;
    }

    // Сумма за товары
    let total = productPrice * quantity;

    // Дополнительные услуги
    if (warrantyCheck.checked) total += parseFloat(warrantyCheck.value);
    if (deliveryCheck.checked) total += parseFloat(deliveryCheck.value);
    if (giftCheck.checked) total += parseFloat(giftCheck.value);

    // Промокод
    const promo = promoInput.value.trim().toUpperCase();
    if (promo === 'SKIDKA10') {
        total *= 0.9; // скидка 10%
    } else if (promo !== '') {
        // Неверный промокод, но не блокируем расчёт
        // Можно показать сообщение, но оставим как есть
    }

    // Форматируем итог
    resultDiv.style.background = '#e9ecef';
    resultDiv.style.color = '#333';
    resultDiv.innerHTML = `<strong>Итоговая стоимость:</strong> ${total.toFixed(2)} руб.`;
});