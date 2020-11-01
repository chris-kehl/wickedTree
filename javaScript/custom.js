// Uses javaScript to set the color
const myHeading = document.getElementById('myHeading'); {
    myHeading.style.color = '#ffffff'
}

// using javaScript to change the even and odd colors on the chalkboard 
const evens = document.querySelectorAll('li:nth-child(even)');

for (let i = 0; i < evens.length; i += 1) {
   evens[i].style.color = '#ffffff';
}

const odds = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odds.length; i += 1) {
   odds[i].style.color = '#8BB82D';
}
