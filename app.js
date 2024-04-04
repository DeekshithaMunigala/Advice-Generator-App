document.addEventListener('DOMContentLoaded', function () {
    const adviceElement = document.querySelector('.content .advice h1');
    const generatorButton = document.querySelector('.content .dice-img .dice');
    const idElement = document.querySelector('.content .heading span')

    generatorButton.addEventListener('click', getAdvice);

    function getAdvice() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                const advice = data.slip.advice;
                const id = data.slip.id;
                displayAdvice(advice, id);
            })
            .catch(error => {
                console.error('Error fetching advice: ', error);
            });
    }

    function displayAdvice(advice, id) {
        idElement.textContent = `${id}`
        adviceElement.textContent = `"${advice}"`;
    }
})