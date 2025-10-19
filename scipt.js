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

// function transfromJSON (jsonString) {
//     const object = JSON.parse(jsonString);

//     if(isUndefined(object)) {
//         throw new Error ('Не удалось преобразовать Json')

//     }
// }

// try {

//     console.log(transfromJSON(abc));

// } catch(error) {

//     console.log('Ошибка:', error.message);

// }


// Задание 3

function checkAccess (age) {

    const number = parseInt(age);

    if (isNaN(number)) {
        
        throw new Error('Некорректный ввод, ожидается число')
    }

    if (age < 18) {

        throw new Error ('Доступ запрещен')

    }
}

try {

    console.log(checkAccess(17))

} catch (e) {

    console.log(e.message)

}
