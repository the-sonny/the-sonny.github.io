var answers = [
    'Yes', 'No']

function Answer() {
    var answerselect = Math.floor(Math.random() * (answers.length))
    document.getElementById('answered').innerHTML = answers[answerselect];
}
