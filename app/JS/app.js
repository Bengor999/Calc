'use strict';
/* -------------------------------------------------------------------------
   begin Calc
 * ------------------------------------------------------------------------- */

// Ищем нужные кнопки

var buttonSeven = document.querySelector('.number_tabl_seven');
var buttonEight = document.querySelector('.number_tabl_eight');
var buttonNine = document.querySelector('.number_tabl_nine');
var buttonDivision = document.querySelector('.number_tabl_division');
var buttonFour = document.querySelector('.number_tabl_four');
var buttonFive = document.querySelector('.number_tabl_five');
var buttonSix = document.querySelector('.number_tabl_six');
var buttonMult = document.querySelector('.number_tabl_multiplication');
var buttonOne = document.querySelector('.number_tabl_one');
var buttonTwo = document.querySelector('.number_tabl_two');
var buttonThree = document.querySelector('.number_tabl_three');
var buttonSubtraction = document.querySelector('.number_tabl_subtraction');
var buttonZero = document.querySelector('.number_tabl_zero');
var buttonEquals = document.querySelector('.number_tabl_equals');
var buttonAddition = document.querySelector('.number_tabl_addition');
var buttonClear = document.querySelector('.number_tabl_clear');
var buttonPoint = document.querySelector('.number_tabl_point');
var buttonK = document.querySelector('.number_tabl_K');


//Добавляем слушателей событий на кнопки

buttonSeven.addEventListener('click', onButtonSevenClick)
buttonEight.addEventListener('click', onButtonEightClick)
buttonNine.addEventListener('click', onButtonNineClick)
buttonDivision.addEventListener('click', onButtonDivisionClick)
buttonFour.addEventListener('click', onButtonFourClick)
buttonFive.addEventListener('click', onButtonFiveClick)
buttonSix.addEventListener('click', onButtonSixClick)
buttonMult.addEventListener('click', onButtonMultClick)
buttonOne.addEventListener('click', onButtonOneClick)
buttonTwo.addEventListener('click', onButtonTwoClick)
buttonThree.addEventListener('click', onButtonThreeClick)
buttonSubtraction.addEventListener('click', onButtonSubtractionClick)
buttonZero.addEventListener('click', onButtonZeroClick)
buttonEquals.addEventListener('click', onButtonEqualsClick)
buttonAddition.addEventListener('click', onButtonAdditionClick)
buttonClear.addEventListener('click', onButtonClearClick)
buttonPoint.addEventListener('click', onButtonPointClick)
buttonK.addEventListener('click', onButtonKClick)

//функция для нажатия на цифры, точки и буквы
function onButtonSevenClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 7;
  InputError();
}
function onButtonEightClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 8;
  InputError();

}
function onButtonNineClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 9;
  InputError();
}
function onButtonFourClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 4;
  InputError();
}
function onButtonFiveClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 5;
  InputError();

}
function onButtonSixClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 6;
  InputError();

}
function onButtonOneClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 1;
  InputError();

}
function onButtonTwoClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 2;
  InputError();

}
function onButtonThreeClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 3;
  InputError();

}
function onButtonZeroClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 0;
  InputError();

}
function onButtonPointClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + '.';
  InputError();

}
function onButtonKClick() {
  var inputAction = document.querySelector('.text_area .action');
  inputAction.value = inputAction.value + 'K';
  InputError();

}




//функция для деления
function onButtonDivisionClick() {
  // console.log('onButtonDivisionClick');
  var signAction = document.querySelector('.text_area .center_text_area');
  signAction.innerHTML = '/';
  actualAction();
}
//функция для умножения
function onButtonMultClick() {
  // console.log('onButtonMultClick');
  var signAction = document.querySelector('.text_area .center_text_area');
  signAction.innerHTML = '*';
  actualAction();
}
//функция для вычитания
function onButtonSubtractionClick() {
  // console.log('onButtonSubtractionClick');
  var signAction = document.querySelector('.text_area .center_text_area');
  signAction.innerHTML = '-';
  actualAction();
}
//функция для сложения
function onButtonAdditionClick() {
  // console.log('onButtonAdditionClick');
  var signAction = document.querySelector('.text_area .center_text_area');
  signAction.innerHTML = '+';
  actualAction();
}


//функция для равно
function onButtonEqualsClick() {
  if (finishInputError() !== true) {
    return false;
  } else {
    var input1 = document.querySelector('.text_area .left_text_area');
    var input2 = document.querySelector('.text_area .right_text_area');
    input1.classList.remove('error');
    input2.classList.remove('error');
    var sign = document.querySelector('.text_area .center_text_area');
//Запишем хорошие исходники в массив
    signArrowResult();
if (sign.innerHTML === '/') {
      input1.value = +input1.value / +input2.value;
      input2.value = '';
    } else if (sign.innerHTML === '*') {
      input1.value = +input1.value * +input2.value;
      input2.value = '';
    } else if (sign.innerHTML === '-') {
      input1.value = +input1.value - +input2.value;
      input2.value = '';
    } else if (sign.innerHTML === '+') {
      input1.value = +input1.value + +input2.value;
      input2.value = '';
    };
  };
  actualAction();
  //Запишем в массив результат вычислений
  signArrowResultEquals();
  showResults();
}
//функция для очистки
function onButtonClearClick() {
  //Ищем все нужное
  var input1 = document.querySelector('.text_area .left_text_area');
  var input2 = document.querySelector('.text_area .right_text_area');
  var sign = document.querySelector('.text_area .center_text_area');
  var actualAction = document.querySelector('.text_area .action');
  //Подчищаем ошибки
  input1.classList.remove('error');
  input2.classList.remove('error');
  document.querySelector('.text_area .error_left_text_area').style.display = "none";
  document.querySelector('.text_area .error_right_text_area').style.display = "none";
  //Проверяем класс Action
  if (actualAction === document.querySelector('.text_area .left_text_area')) {
    //Или ничего не делаем, нам и так норм
  } else {
        //Удаляем Action справа и добавляем его слева
    actualAction.classList.remove('action');
    // console.log(actualAction.className);
    document.querySelector('.text_area .left_text_area').classList.add('action');
  };
  //Удаляем все заполнения полей
  input1.value = '';
  input2.value = '';
  sign.innerHTML = '';
}

//Проверка активного поля
function actualAction() {
  var actualAction = document.querySelector('.text_area .action');
  if (actualAction === document.querySelector('.text_area .left_text_area')) {
    //Удаляем Action слева и добавляем его справа
    actualAction.classList.remove('action');
    document.querySelector('.text_area .right_text_area').classList.add('action');
  } else {
    //Или ничего не делаем, нам и так норм
    // console.log(actualAction.className);
  }
}

//Проверка валидности значений во время ввода цифр
const validOne = /^[1-9]|^(0\.)|^[-]{1}/g;
const validTwo = /^[-]|^\d{0,}\.{0,1}\d{0,}$/g;

function InputError() {
  let number = document.querySelector('.text_area .action').value;
  // console.log(number);
  if (number.length > 0 &&
    ((number.match(validOne))) &&
    ((number.match(validTwo)))
  ) {
    document.querySelector('.text_area .action').classList.remove('error');
  } else {
    document.querySelector('.text_area .action').classList.add('error');
  }
}

//Проверка валидности значений во время нажатия "="
function finishInputError() {

  //Сбрасываем старые ошибки
  let errorImput1 = document.querySelector('.text_area .error_left_text_area');
  let errorImput2 = document.querySelector('.text_area .error_right_text_area');
  errorImput1.innerHTML = ""; // Сбросить содержимое сообщения
  errorImput1.style.display = "none"; //Скрыть табло с ошибкой
  errorImput2.innerHTML = ""; // Сбросить содержимое сообщения
  errorImput2.style.display = "none"; //Скрыть табло с ошибкой
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
  let imput1 = document.querySelector('.text_area .left_text_area');
  let errorImput1 = document.querySelector('.text_area .error_left_text_area');
  if (imput1.value.length === 0) {
    errorImput1.innerHTML = "Заполни поле"; // Сбросить содержимое сообщения
    errorImput1.style.display = "block";
    return false;
  } else {
    errorImput1.innerHTML = ""; // Сбросить содержимое сообщения
    errorImput1.style.display = "none"; //Скрыть табло с ошибкой
    return true;
  };
}
function errorSpaseRight() {
  let imput2 = document.querySelector('.text_area .right_text_area');
  let errorImput2 = document.querySelector('.text_area .error_right_text_area');
  if (imput2.value.length === 0) {
    errorImput2.innerHTML = "Заполни поле"; // Сбросить содержимое сообщения
    errorImput2.style.display = "block";
    return false;
  } else {
    errorImput2.innerHTML = ""; // Сбросить содержимое сообщения
    errorImput2.style.display = "none"; //Скрыть табло с ошибкой
    return true;
  };
}
//Не делим на ноль
function errorZeroRight() {
  let imput2 = document.querySelector('.text_area .right_text_area');
  let errorImput2 = document.querySelector('.text_area .error_right_text_area');
  let sign = document.querySelector('.text_area .center_text_area');

  if (sign.innerHTML === '/' && imput2.value == 0) {
    errorImput2.innerHTML = "На ноль делить непродуктивно"; // Сбросить содержимое сообщения
    errorImput2.style.display = "block";
    return false;
  } else {
    errorImput2.innerHTML = ""; // Сбросить содержимое сообщения
    errorImput2.style.display = "none"; //Скрыть табло с ошибкой
    return true;
  };
}
//Проверяем регулярки
function errorRegularLeft() {
  let imput1 = document.querySelector('.text_area .left_text_area').value;
  let errorImput1 = document.querySelector('.text_area .error_left_text_area');

  if (imput1.match(validOne) && imput1.match(validTwo)) {
    errorImput1.innerHTML = ""; // Сбросить содержимое сообщения
    errorImput1.style.display = "none";
    return true;
  } else {
    errorImput1.innerHTML = "Только цифры и одна точка. Ноль в начале нежелателен."; // Сбросить содержимое сообщения
    errorImput1.style.display = "block"; //Скрыть табло с ошибкой
    return false;
  };
}

function errorRegularRight() {
  let imput2 = document.querySelector('.text_area .right_text_area').value;
  let errorImput2 = document.querySelector('.text_area .error_right_text_area');

  if (imput2.match(validOne) && imput2.match(validTwo)) {
    errorImput2.innerHTML = ""; // Сбросить содержимое сообщения
    errorImput2.style.display = "none";
    return true;
  } else {
    errorImput2.innerHTML = "Только цифры и одна точка. Ноль в начале нежелателен."; // Сбросить содержимое сообщения
    errorImput2.style.display = "block"; //Скрыть табло с ошибкой
    return false;
  };
}


//Ведем учет вычисленных значений
let arrowResult = [];
function signArrowResult() {
let input1 = document.querySelector('.text_area .left_text_area');
let sign = document.querySelector('.text_area .center_text_area');
let input2 = document.querySelector('.text_area .right_text_area');
arrowResult.push(input1.value);
arrowResult.push(sign.innerHTML);
arrowResult.push(input2.value);
}
function signArrowResultEquals() {
  let input1 = document.querySelector('.text_area .left_text_area');
  arrowResult.push(input1.value);
  console.log(arrowResult)
}
//Создаем Div с полученными данными
function showResults() {
  let showResult = document.querySelector('.base .show_results');
  let divFirst = document.createElement('div');
  divFirst.innerHTML = arrowResult[arrowResult.length - 1] + " = " + arrowResult[arrowResult.length - 2] + " " + arrowResult[arrowResult.length - 3] + " " + arrowResult[arrowResult.length - 4];
  console.log(divFirst);
  showResult.prepend(divFirst);

}





//Функция записи в массив


/* -------------------------------------------------------------------------
   end Calc
 * ------------------------------------------------------------------------- */


