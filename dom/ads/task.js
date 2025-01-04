function speed(){
    const element = document.querySelector('.rotator__case_active');
    if (element){
        return Number(element.getAttribute('data-speed'));
    }else return Number(1000);
}



function rotator(){
    const rotatorCases = document.querySelectorAll('.rotator__case');

    for (let i = 0; i < rotatorCases.length; i++){
        const rotatorActive = rotatorCases[i];
        rotatorActive.style.color = rotatorActive.getAttribute('data-color');
        if (rotatorActive.classList.contains('rotator__case_active')){
            rotatorActive.classList.remove('rotator__case_active')
            if (rotatorCases[i + 1]){
            rotatorCases[i + 1].classList.add('rotator__case_active')
            } else {
            rotatorCases[0].classList.add('rotator__case_active');
            }
            break;
        }
    }
    setTimeout(rotator, speed())
}

rotator()

