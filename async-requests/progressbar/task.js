const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const fileInput = document.getElementById('file'); 
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);


    xhr.upload.addEventListener('progress', function(e){
        progress.value = e.loaded / e.total
        if (progress.value === 1){
            alert(`Файл успешно загружен!`)
        }
    });
    xhr.send(formData);
})