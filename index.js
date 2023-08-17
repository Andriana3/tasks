const subscribers = ["user1", "user2", "user4"];

function congratsIfMoreThan100(arr) {
    if(arr.length > 4){
        alert("HELLO");
    } else {
        alert ("BYE")
    }
}

congratsIfMoreThan100(subscribers);


const numbers = [1, 2, 3, 4, 5, 6, 7];

function squareNumber(arr) {
    for (const arr of numbers) {
        console.log(Math.pow(arr, 2));
    }
}

squareNumber(numbers);


// 1. написати функцію, яка приймає масив обєктів, пробігається по ньому,
// і додає прикментики відповідно до її статі handsome and beautiful

const people = [
    {
        name: "Ross",
        sex: "male"
    },
    {
        name: "Monica",
        sex: "female"
    },
    {
        name: "Phoebe",
        sex: "female"
    },
    {
        name: "Chandler",
        sex: "male"
    },
    {
        name: "Rachel",
        sex: "female"
    },
    {
        name: "Joey",
        sex: "male"
    },

];

function genderOfBeauty(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sex === "male") {
            arr[i].adjective = "handsome";
        } else {
            arr[i].adjective = "beautiful";
        }
    }
     return arr;
}
console.log(genderOfBeauty(people));


// написати функцію, яка приймає 2 агрументи: масив чисел і число.
//Функція повертає кількість повторювань переданого числа в масиві.
// якщо даного числа там немає, функція повертає текст "Даного числа в масиві немає!"

const numbers = [1, 3, 5, 7, 9, 2, 8, 9, 1];

function getNumber(numbersArr, number) {
    let counter = 0;
    for (item of numbersArr) {
        if (item === number) {
            counter +=1;
        }
    }
    return counter > 0 ? counter : "даного числа немає";
}
console.log(getNumber([1, 3, 5, 7, 9, 2, 8, 9, 1], 1));

// 3333333
