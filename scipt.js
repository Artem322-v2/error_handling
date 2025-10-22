function safeDivide (a, b) {
    if (b === 0) {
           throw new Error ('деление на 0 невозможно');
    }

    return a / b;
}

try {

    console.log(safeDivide(10, 0));

} 
catch (e) {

    console.log('Ошибка:', e.message);

}


// Задание 2

function transfromJSON (jsonString) {
    
    try {
    
    const object = JSON.parse(jsonString);
    return object;

    } catch (error) {

        console.log ('Ошибка', error.message);
        return null;

    }

}

console.log(transfromJSON('{name: "John", "age": 30}'))


// Задание 3

// function checkAccess (age) {

//     const number = parseInt(age);

//     if (isNaN(number)) {
        
//         throw new Error('Некорректный ввод, ожидается число')
//     }

//     if (age < 18) {

//         throw new Error ('Доступ запрещен')

//     }  console.log('Доступ разрешен')
// }

// try {

//     console.log(checkAccess(17))

// } catch (e) {

//     console.log(e.message)

// }
