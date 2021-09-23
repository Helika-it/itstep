//Использование "this" в литерале объекта

//Здесь функция makeUser возвращает объект.

//Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат? 
//!(undefined!)
//

//!  а так сработает:

function makeUser() {
  return {
    name: "Джон",
    ref() {
      return this;
    }
  };
};

let user = makeUser();

alert( user.ref().name ); // Джон

//!Теперь это работает, поскольку user.ref() вызывается как метод. И значением this становится объект перед точкой ..
