const boxes = document.querySelectorAll('.box');

boxes.forEach(element => {
    const icon = element.querySelector('.icon');

    element.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
        }
        else {
            icon.classList.add('active');
        }
    })
});

boxes.forEach(element => {
    const answer = element.querySelector('.answer');

    element.addEventListener('click', () => {
        if (answer.classList.contains('ans')) {
            answer.classList.remove('ans');

        }
        else {
            answer.classList.add('ans');
        }
    })
});
