'use strict';

const card = document.querySelector('.question-card');
const getJson = async (URL) => {
    // get difficulty
    const diff = document.querySelector(
        'input[name="difficulty_radio_button"]:checked'
    ).value;
    // get topic
    const topic = document.querySelector('select[name="topic"]').value;
    // console.log(diff, topic);

    // TODO: ADD API HERE
    const ENDPOINT = `https://leetcode-question-picker.herokuapp.com/api/v1/ques?topic=${topic}&difficulty=${diff}`;
    const data = await fetch(ENDPOINT)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.data);
            const { title, acRate, titleSlug, difficulty } = data.data;

            document.getElementById('title').innerHTML = `${title}`;
            document.getElementById('acRate').innerHTML =
                acRate.toFixed(2) + '%';
            document.getElementById(
                'link'
            ).href = `https://leetcode.com/problems/${titleSlug}`;

            // display the question
            if (card.classList.contains('hidden-card'))
                card.classList.remove('hidden-card');
        });
};

function myFunction() {
    const myVar = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('myDiv').style.display = 'block';
}

let getQuestion = document.querySelector('.get-question-button');
getQuestion.addEventListener('click', () => getJson(URL));
