const order1 = [
    `English Ale`,
    `medium Ribeye`,
    `sweet potato`
     ];

    function createOrder1ItemList(arr) {
        let items = '';
        for (let i= 0; i < arr.length; i++ ) {
            items += `<li>${arr[i]}</li>`
        }
        return items;
    }
    document.querySelector('main').innerHTML = `
    <ol>
    ${createOrder1ItemList(order1)}
    </ol>`;

    const scores = [ 20, 50, 75, 100, 115 ];
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    console.log( total / scores.length);

//      console.log(order1.length)
//      console.log(order1[0])
//      console.log(order1[1])
//      console.log(order1[2])

//      order1.push('Diet coke', 'Small Pizza');
//      console.log(order1.length)

//      order1.unshift('Sweet tea', `Dressed Cheese Burger`)
//      console.log(order1.length)

//      order1.pop();
//      console.log(order1.length)

//      let lastItem = order1.pop();
//      console.log(lastItem)
//      console.log(order1.length)

//      let secondItem = order1.shift();
//      console.log(secondItem)
//      console.log(order1.length)

// var numbers = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10];
//      console.log(numbers)


//      // Spread operator combine arrays, or lists

//      const mathStudents = [
//          'Marty',
//          'Jennifer',
//          'Lorraine',
//          'Goldie'
//      ];

//      const scienceStudents = [
//          'Emmett',
//          'Clara',
//          'Needles',
//          'Strickland'
//      ];

//      const students= [...mathStudents, ...scienceStudents];
//      console.log(students)


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Math.min(...numbers));
