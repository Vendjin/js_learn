const CURRENT_YEAR = new Date().getFullYear();
const ANSWER = {
    correct: 'Ответ правильный',
    error: 'Ответ не правильный'
};

const inputNode = document.querySelector('#year');
const buttonNode = document.querySelector("button");
const outputNode = document.querySelector('.output');

buttonNode.addEventListener('click', () =>{

    if (!inputNode.value){
        return;
    }

    const answer = +inputNode.value;
    if (answer !== CURRENT_YEAR){
        outputNode.innerText = ANSWER.error;
    } else{
        outputNode.innerText = ANSWER.correct;
    }

})