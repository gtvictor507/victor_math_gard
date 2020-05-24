var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;

    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;

    answer = n1 + n2;

}

function checkAnswer() {
    const prediction = predictImage(); // from processing.js

    console.log(`answer: ${answer} | prediction: ${prediction}`);

    if (prediction == answer) {
        score++;
        console.log(`correct!! Your score is ${score}`);

        if (score <= 6) {
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        } else {
            alert('Congulations!! Your math garden is in full bloom! Want to start again?');
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;

        }

    } else {
        if (score != 0) {
            score--;
        }

        console.log(`wrong!! Your score is ${score}`);
        alert('Oops! Check your calculationsand try writing the number next time!');

        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);


    }


}