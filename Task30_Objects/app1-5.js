//!1. Создайте пустой объект user.
//2. Добавьте свойство name со значением John
//3. Добавьте свойство surname со значением Smith.
//4. Измените значение свойства name на Pete.
//5. Удалите свойство name из объекта.

let user = {};

user.name = "John";

user.surname = "Smith";

user.name = "Pete";

console.log(user);

delete(user.name);

console.log(user);

//-----------------------------------------

