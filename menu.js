// const order1 = [
//     `English Ale`,
//     `Medium Ribeye`,
//     `sweet potato`
//      ];

//     function createOrder1ItemList(arr) {
//         let items = '';
//         for (let i= 0; i < arr.length; i++ ) {
//             items += `<li>${arr[i]}</li>`
//         }
//         return items;
//     }
//     document.querySelector('main').innerHTML = `
//     <ol>
//     ${createOrder1ItemList(order1)}
//     </ol>`;

//     const scores = [ 20, 50, 75, 100, 115 ];
//     let total = 0;

//     for (let i = 0; i < scores.length; i++) {
//         total += scores[i];
//     }

//     console.log( total / scores.length);

    // const order = ['pizza', 'cookies', 'eggs', 'apples', 'milk',
    //                'cheeze', 'bread', 'lettuce', 'carrots', 'broccoli',
    //                'potatoes', 'crackers', 'tofu', 'limes', 'cucumbers'];
    // const search = prompt('Search for a product.');
    // let message; 

    // if (!search) {
    //     message = `<strong> Our menu consists of </strong> ${order.join(', ')}.`;

    // }
    // else if (order.includes(search.toLowerCase())) {
    //     message = `Yes, we have <strong> ${search} </strong>. it's # ${menu.indexOf(search.toLowerCase()) + 1} on the list.`;
    // }   else {
    //     message = `Sorry, we do not have <strong> ${search} </strong>.`;
    // }
    // document.querySelector('main').innerHTML = `<p>${message}</p>`;


 // 1. Create a Multidemensional array ot hold quiz questions

 const questions = [
     ['How many planets are in the Solar Syatem?', '8'],
     ['How many continents are there?', '7'],
     ['How many legs does an insect have?', '6'],
     ['What year was JavaScript created', '1995']
 ];

 // 2. Store the number of questions answered correctly
 const correct = [];
 const incorrect = [];
 let correctAnswers = 0;

 // 3. use a loop to cycle through

 for ( let i = 0; i < questions.length; i++ ) {
     let question = questions[i][0];
     let answer = questions[i][1];
     let response = prompt(question);

     if ( response === answer ) {
         correctAnswers++;
         correct.push(question);
     } else {
         incorrect.push(question);
     }
 }

 function createListItems(arr) {
     let items = '';
     for (let i = 0; i < arr.length; i++) {
         items += `<li>${arr[i]}</li>`;
     }
     return items;
 }


 let html = `
<h1>You Got ${correctAnswers} Question(s) Correct</h1>
<h2> You got these questions right:</h2>
<ol>${createListItems(correct)}</ol>
<h2>You got these questions wrong:</h2>
<ol>${createListItems(incorrect)}</ol>`;

document.querySelector('main').innerHTML = html;
