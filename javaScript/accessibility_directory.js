// taking the document accessibility.js and applying it to the accessibility.html
const main = document.querySelector('main');

let html = '';

// loop through the imgages and put on accessibility.html page

for (let i = 0; i < items.length; i++) {
    let accessibilityItem = items[i];
    html += `
    <h2>${accessibilityItem.item}</h2>
    <img src = "${accessibilityItem.photo}" alt="${accessibilityItem.item}">`;
}

main.insertAdjacentHTML('beforeend', html);