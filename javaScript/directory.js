const main = document.querySelector('main');
let html = '';

for (let i = 0; i < items.length; i++) {
    let menuItem = items[i];
    html += `
    <h2>${menuItem.item}</h2>
    <img src = "${menuItem.photo}" alt="${menuItem.item}">
    <p> cost: ${menuItem.cost}</p>`;
}

main.insertAdjacentHTML('beforeend', html);

