
function doSomethingWithBoredAPI(){
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => document.getElementById('doSomething').innerText = data.activity)
    .catch(error => alert(error));
}
doSomethingWithBoredAPI();




function numbersFact(){
    fetch('http://numbersapi.com/random/math?json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('numbersFact').innerText += data.text.slice(data.text.indexOf('is')+2) + ' ( ' + data.number + ' )';
    })
    .catch(error => console.log(error));

}
numbersFact();


document.getElementById('dateSubmitBtn').addEventListener('click', bDateFact);
function bDateFact(){
    const bDate = document.getElementById('bDate').value;
    const month = bDate.split('-')[1];
    const day = bDate.split('-')[2];
    console.log(bDate)
    fetch('http://numbersapi.com/' + month + '/' + day + '/date?json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('bDateFact').innerText = data.text;
    })
    .catch(error => console.log(error));
}





// const language = require('@google-cloud/language');

// const client = new language.LanguageServiceClient();

// const text1 = 'I am happy!';

// const doc = {
//   content: text1,
//   type: 'PLAIN_TEXT',
// };

// // Detects the sentiment of the document
// const [result] = client.analyzeSentiment({doc});

// const sentiment = result.documentSentiment;
// console.log('Document sentiment:');
