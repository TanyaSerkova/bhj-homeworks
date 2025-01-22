let xhr = new XMLHttpRequest();
let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
    let responseData = JSON.parse(xhr.responseText);
    console.log(responseData)
    pollTitle.textContent = responseData['data']['title'];
    let answers = responseData['data']['answers'];
    for (let i = 0; i < answers.length; i++) {
        pollAnswers.innerHTML += ('afterBegin', 
        `<button class="poll__answer">
          ${answers[i]}
        </button>`);
        let buttons = document.querySelectorAll('button');
        for (let button of buttons){
            button.addEventListener('click', () => {
            alert('«Спасибо, ваш голос засчитан!»');
            })
            pollAnswers.appendChild(button);}
        }
    }
})
    
    
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();