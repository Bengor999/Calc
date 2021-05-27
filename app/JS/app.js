'use strict';
/* -------------------------------------------------------------------------
   begin Calc
 * ------------------------------------------------------------------------- */

// Ищем нужные кнопки

// let buttonSeven = document.querySelector('.number_tabl_seven');
// let buttonEight = document.querySelector('.number_tabl_eight');
// let buttonNine = document.querySelector('.number_tabl_nine');
// let buttonDivision = document.querySelector('.number_tabl_division');
// let buttonFour = document.querySelector('.number_tabl_four');
// let buttonFive = document.querySelector('.number_tabl_five');
// let buttonSix = document.querySelector('.number_tabl_six');
// let buttonMult = document.querySelector('.number_tabl_multiplication');
// let buttonOne = document.querySelector('.number_tabl_one');
// let buttonTwo = document.querySelector('.number_tabl_two');
// let buttonThree = document.querySelector('.number_tabl_three');
// let buttonSubtraction = document.querySelector('.number_tabl_subtraction');
// let buttonZero = document.querySelector('.number_tabl_zero');
// let buttonEquals = document.querySelector('.number_tabl_equals');
// let buttonAddition = document.querySelector('.number_tabl_addition');
// let buttonClear = document.querySelector('.number_tabl_clear');
// let buttonPoint = document.querySelector('.number_tabl_point');
// let buttonK = document.querySelector('.number_tabl_K');

//Ищем нужные поля
let inputLeft = document.querySelector('.text_area .left_text_area');
let inputRight = document.querySelector('.text_area .right_text_area');
let sign = document.querySelector('.text_area .center_text_area');
let showErrorLeft = document.querySelector('.text_area .error_left_text_area');
let showErrorRight = document.querySelector('.text_area .error_right_text_area');

//Добавляем слушателей событий на кнопки

// buttonSeven.addEventListener('click', onButtonNamberClick)
// buttonEight.addEventListener('click', onButtonNamberClick)
// buttonNine.addEventListener('click', onButtonNamberClick)
// buttonDivision.addEventListener('click', onButtonNamberClick)
// buttonFour.addEventListener('click', onButtonNamberClick)
// buttonFive.addEventListener('click', onButtonNamberClick)
// buttonSix.addEventListener('click', onButtonNamberClick)
// buttonMult.addEventListener('click', onButtonNamberClick)
// buttonOne.addEventListener('click', onButtonNamberClick)
// buttonTwo.addEventListener('click', onButtonNamberClick)
// buttonThree.addEventListener('click', onButtonNamberClick)
// buttonSubtraction.addEventListener('click', onButtonNamberClick)
// buttonZero.addEventListener('click', onButtonNamberClick)
// buttonEquals.addEventListener('click', onButtonNamberClick)
// buttonAddition.addEventListener('click', onButtonNamberClick)
// buttonClear.addEventListener('click', onButtonNamberClick)
// buttonPoint.addEventListener('click', onButtonNamberClick)
// buttonK.addEventListener('click', onButtonNamberClick)

//Много кнопок выполняют одну и ту же функцию, попробуем их собрать в одну

//Создаем массив кнопок ручками
// let arrowButton = [
//   buttonSeven,
//   buttonEight,
//   buttonNine,
//   buttonDivision,
//   buttonFour,
//   buttonFour,
//   buttonFive,
//   buttonSix,
//   buttonMult,
//   buttonOne,
//   buttonTwo,
//   buttonThree,
//   buttonSubtraction,
//   buttonZero,
//   buttonEquals,
//   buttonAddition,
//   buttonClear,
//   buttonPoint,
//   buttonK,
// ];

//Заменим самодельный массив коллекцией формируемой автоматически. Ищем все баттоны в элементе вс классом number_tabl
let arrowButton = document.querySelectorAll('.number_tabl button');

//Создаем цикл для перебора массива и приклеивания функции нашим кнопкам
for (let i = 0; i < arrowButton.length; i++) {
  let button = arrowButton[i];
  button.addEventListener('click', onButtonNamberClick);
}
//отдельно слушатели инпутов, пригодятся позже.
inputLeft.addEventListener('click', oninputLeftClick)
inputRight.addEventListener('click', oninputRightClick)

// buttonSeven.addEventListener('click', onButtonSevenClick)
// buttonEight.addEventListener('click', onButtonEightClick)
// buttonNine.addEventListener('click', onButtonNineClick)
// buttonDivision.addEventListener('click', onButtonDivisionClick)
// buttonFour.addEventListener('click', onButtonFourClick)
// buttonFive.addEventListener('click', onButtonFiveClick)
// buttonSix.addEventListener('click', onButtonSixClick)
// buttonMult.addEventListener('click', onButtonMultClick)
// buttonOne.addEventListener('click', onButtonOneClick)
// buttonTwo.addEventListener('click', onButtonTwoClick)
// buttonThree.addEventListener('click', onButtonThreeClick)
// buttonSubtraction.addEventListener('click', onButtonSubtractionClick)
// buttonZero.addEventListener('click', onButtonZeroClick)
// buttonEquals.addEventListener('click', onButtonEqualsClick)
// buttonAddition.addEventListener('click', onButtonAdditionClick)
// buttonClear.addEventListener('click', onButtonClearClick)
// buttonPoint.addEventListener('click', onButtonPointClick)
// buttonK.addEventListener('click', onButtonKClick)
// inputLeft.addEventListener('click', oninputLeftClick)
// inputRight.addEventListener('click', oninputRightClick)

//функция для нажатия на цифры, точки и буквы
//Заменили все одной функцией
function onButtonNamberClick(eventObject) {
  let clickedEl = eventObject.currentTarget;
  let operation = clickedEl.innerHTML;
  if (operation > -1 ||
    operation === '.' ||
    operation === 'K') {
      let actualAction = document.querySelector('.text_area .action');
      actualAction.value = actualAction.value + operation;
    InputError();
  } else if (operation === '/' ||
    operation === '*' ||
    operation === '+' ||
    operation === '-') {
    // let signAction = document.querySelector('.text_area .center_text_area');
    sign.innerHTML = operation;
    actualFuncAction();
  } else if (operation === '=') {
    onButtonEqualsClick();
  } else if (operation === 'Очистить') {
    onButtonClearClick()
  }
}

//функция для нажатия на цифры, точки и буквы

// function onButtonEightClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 8;
//   InputError();
// }
// function onButtonNineClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 9;
//   InputError();
// }
// function onButtonFourClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 4;
//   InputError();
// }
// function onButtonFiveClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 5;
//   InputError();

// }
// function onButtonSixClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 6;
//   InputError();

// }
// function onButtonOneClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 1;
//   InputError();

// }
// function onButtonTwoClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 2;
//   InputError();

// }
// function onButtonThreeClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 3;
//   InputError();

// }
// function onButtonZeroClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 0;
//   InputError();

// }
// function onButtonPointClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + '.';
//   InputError();

// }
// function onButtonKClick() {
//   let inputAction = document.querySelector('.text_area .action');
//   inputAction.value = inputAction.value + 'K';
//   InputError();

// }

//Переносим внимание "action" на импуты при клике 
function oninputLeftClick() {
  // let actualAction = document.querySelector('.text_area .action');
  //Удаляем Action где бы он ни был
  inputRight.classList.remove('action');
  //Добавляем Action в левый импут
  inputLeft.classList.add('action');
}
function oninputRightClick() {
  // let actualAction = document.querySelector('.text_area .action');
  //Удаляем Action где бы он ни был
  inputLeft.classList.remove('action');
  //Добавляем Action в правый импут
  inputRight.classList.add('action');
}



//функция для деления
// function onButtonDivisionClick() {
//   // console.log('onButtonDivisionClick');
//   let signAction = document.querySelector('.text_area .center_text_area');
//   signAction.innerHTML = '/';
//   actualAction();
// }
// //функция для умножения
// function onButtonMultClick() {
//   // console.log('onButtonMultClick');
//   let signAction = document.querySelector('.text_area .center_text_area');
//   signAction.innerHTML = '*';
//   actualAction();
// }
// //функция для вычитания
// function onButtonSubtractionClick() {
//   // console.log('onButtonSubtractionClick');
//   let signAction = document.querySelector('.text_area .center_text_area');
//   signAction.innerHTML = '-';
//   actualAction();
// }
// //функция для сложения
// function onButtonAdditionClick() {
//   // console.log('onButtonAdditionClick');
//   let signAction = document.querySelector('.text_area .center_text_area');
//   signAction.innerHTML = '+';
//   actualAction();
// }


//функция для равно
function onButtonEqualsClick() {
  if (finishInputError() !== true) {
    return false;
  } else {
    // let inputLeft = document.querySelector('.text_area .left_text_area');
    // let inputRight = document.querySelector('.text_area .right_text_area');
    inputLeft.classList.remove('error');
    inputRight.classList.remove('error');
    // let sign = document.querySelector('.text_area .center_text_area');
    //Запишем хорошие исходники в массив
    signArrowResult();
    //вычислим и выведем нужные значения
    if (sign.innerHTML === '/') {
      inputLeft.value = +inputLeft.value / +inputRight.value;
      inputRight.value = '';
    } else if (sign.innerHTML === '*') {
      inputLeft.value = +inputLeft.value * +inputRight.value;
      inputRight.value = '';
    } else if (sign.innerHTML === '-') {
      inputLeft.value = +inputLeft.value - +inputRight.value;
      inputRight.value = '';
    } else if (sign.innerHTML === '+') {
      inputLeft.value = +inputLeft.value + +inputRight.value;
      inputRight.value = '';
    };
  };
  actualFuncAction();
  //Запишем в массив результат вычислений
  signArrowResultEquals();
  showResults();
}
//функция для очистки
function onButtonClearClick() {
  //Ищем все нужное
  // let inputLeft = document.querySelector('.text_area .left_text_area');
  // let inputRight = document.querySelector('.text_area .right_text_area');
  // let sign = document.querySelector('.text_area .center_text_area');
  // let actualAction = document.querySelector('.text_area .action');
  //Подчищаем ошибки
  inputLeft.classList.remove('error');
  inputRight.classList.remove('error');
  showErrorLeft.style.display = "none";
  showErrorRight.style.display = "none";
  //Проверяем класс Action
  // if (actualAction === document.querySelector('.text_area .left_text_area')) {
  //ничего не делаем, нам и так норм
  // } else {
  //Удаляем Action справа и добавляем его слева
  inputRight.classList.remove('action');
  // console.log(actualAction.className);
  inputLeft.classList.add('action');
  // };
  //Удаляем все заполнения полей
  inputLeft.value = '';
  inputRight.value = '';
  sign.innerHTML = '';
}

//Проверка активного поля для знаков /=*-+
function actualFuncAction() {
  // let actualAction = document.querySelector('.text_area .action');
  // if (actualAction === document.querySelector('.text_area .left_text_area')) {
  //Удаляем Action слева и добавляем его справа
  inputLeft.classList.remove('action');
  inputRight.classList.add('action');
  // } else {
  //   //Или ничего не делаем, нам и так норм
  //   // console.log(actualAction.className);
  // }
}

//Проверка валидности значений во время ввода цифр через кнопки
const validOne = /^[1-9]|^(0\.)|^[-]{1}/g;
const validTwo = /^[-]|^\d{0,}\.{0,1}\d{0,}$/g;

function InputError() {
  let actualAction = document.querySelector('.text_area .action');
  // console.log(number);
  if (actualAction.value.length === 0 ||
    ((actualAction.value.match(validOne))) &&
    ((actualAction.value.match(validTwo)))
  ) {
    actualAction.classList.remove('error');
  } else {
    actualAction.classList.add('error');
  }
}
//Проверка валидности во время ввода с клавиатуры
inputLeft.oninput = function () {
  InputError();
}
inputRight.oninput = function () {
  InputError();
}


//Проверка валидности значений во время нажатия "="
function finishInputError() {

  //Сбрасываем старые ошибки
  // let errorInputLeft = document.querySelector('.text_area .error_left_text_area');
  // let errorInputRight = document.querySelector('.text_area .error_right_text_area');
  showErrorLeft.innerHTML = ""; // Сбросить содержимое сообщения
  showErrorLeft.style.display = "none"; //Скрыть табло с ошибкой
  showErrorRight.innerHTML = ""; // Сбросить содержимое сообщения
  showErrorRight.style.display = "none"; //Скрыть табло с ошибкой
  //Ищем новые
  if (errorSpaseLeft() &&
    errorRegularLeft() &&
    errorSpaseRight() &&
    errorZeroRight() &&
    errorRegularRight() === true) {
    return true;
  } else {
    return false;
  }
}
//Проверяем поля на заполненность
function errorSpaseLeft() {
  // let inputLeft = document.querySelector('.text_area .left_text_area');
  // let errorInputLeft = document.querySelector('.text_area .error_left_text_area');
  if (inputLeft.value.length === 0) {
    showErrorLeft.innerHTML = "Заполни поле"; // Сбросить содержимое сообщения
    showErrorLeft.style.display = "block";
    return false;
  } else {
    showErrorLeft.innerHTML = ""; // Сбросить содержимое сообщения
    showErrorLeft.style.display = "none"; //Скрыть табло с ошибкой
    return true;
  };
}
function errorSpaseRight() {
  // let inputRight = document.querySelector('.text_area .right_text_area');
  // let errorInputRight = document.querySelector('.text_area .error_right_text_area');
  if (inputRight.value.length === 0) {
    showErrorRight.innerHTML = "Заполни поле"; // Сбросить содержимое сообщения
    showErrorRight.style.display = "block";
    return false;
  } else {
    showErrorRight.innerHTML = ""; // Сбросить содержимое сообщения
    showErrorRight.style.display = "none"; //Скрыть табло с ошибкой
    return true;
  };
}
//Не делим на ноль
function errorZeroRight() {
  // let inputRight = document.querySelector('.text_area .right_text_area');
  // let errorInputRight = document.querySelector('.text_area .error_right_text_area');
  let sign = document.querySelector('.text_area .center_text_area');

  if (sign.innerHTML === '/' && inputRight.value == 0) {
    showErrorRight.innerHTML = "На ноль делить непродуктивно"; // Сбросить содержимое сообщения
    showErrorRight.style.display = "block";
    return false;
  } else {
    showErrorRight.innerHTML = ""; // Сбросить содержимое сообщения
    showErrorRight.style.display = "none"; //Скрыть табло с ошибкой
    return true;
  };
}
//Проверяем регулярки
function errorRegularLeft() {
  // let inputLeft = document.querySelector('.text_area .left_text_area').value;
  // let errorInputLeft = document.querySelector('.text_area .error_left_text_area');

  if (inputLeft.value.match(validOne) && inputLeft.value.match(validTwo)) {
    showErrorLeft.innerHTML = ""; // Сбросить содержимое сообщения
    showErrorLeft.style.display = "none";
    return true;
  } else {
    showErrorLeft.innerHTML = "Только цифры и одна точка. Ноль в начале нежелателен."; // Сбросить содержимое сообщения
    showErrorLeft.style.display = "block"; //Скрыть табло с ошибкой
    return false;
  };
}

function errorRegularRight() {
  // let inputRight = document.querySelector('.text_area .right_text_area').value;
  // let errorInputRight = document.querySelector('.text_area .error_right_text_area');

  if (inputRight.value.match(validOne) && inputRight.value.match(validTwo)) {
    showErrorRight.innerHTML = ""; // Сбросить содержимое сообщения
    showErrorRight.style.display = "none";
    return true;
  } else {
    showErrorRight.innerHTML = "Только цифры и одна точка. Ноль в начале нежелателен."; // Сбросить содержимое сообщения
    showErrorRight.style.display = "block"; //Скрыть табло с ошибкой
    return false;
  };
}


//Ведем учет вычисленных значений

//Создадим массив в который это все запишем
let arrowResult = [];
function signArrowResult() {
  // let inputLeft = document.querySelector('.text_area .left_text_area');
  // let sign = document.querySelector('.text_area .center_text_area');
  // let inputRight = document.querySelector('.text_area .right_text_area');
  arrowResult.push(inputLeft.value);
  arrowResult.push(sign.innerHTML);
  arrowResult.push(inputRight.value);
}
function signArrowResultEquals() {
  // let inputLeft = document.querySelector('.text_area .left_text_area');
  arrowResult.push(inputLeft.value);
  console.log(arrowResult)
}
//Создаем Div с полученными данными
function showResults() {
  let showResult = document.querySelector('.base .show_results');
  let divFirst = document.createElement('div');
  divFirst.innerHTML = arrowResult[arrowResult.length - 4] + " " + arrowResult[arrowResult.length - 3] + " " + arrowResult[arrowResult.length - 2] + " = " + arrowResult[arrowResult.length - 1];
  // console.log(divFirst);
  showResult.prepend(divFirst);

}





//Функция записи в массив


/* -------------------------------------------------------------------------
   end Calc
 * ------------------------------------------------------------------------- */


