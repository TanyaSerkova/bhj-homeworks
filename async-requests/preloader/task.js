let xhr = new XMLHttpRequest();
const loader = document.getElementById('loader');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const items = document.getElementById('items');
        let responseData = JSON.parse(xhr.responseText);
        Object.keys(responseData.response.Valute).forEach(function(key) {
            items.insertAdjacentHTML('afterbegin',
                `<div class="item">
                <div class="item__code">${responseData.response.Valute[key].CharCode}</div>
                <div class="item__value">${responseData.response.Valute[key].Value}</div>
                <div class="item__currency">руб.</div>
                </div>`);
        })
        
        loader.classList.remove('loader_active');
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
