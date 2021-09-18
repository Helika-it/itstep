/*
7. Дан объект 
let user = {
  name: "Иван",
  age: 30
};
Написать код, который создает его точный клон (новый объект с такой же структурой).
*/

let user = {
  name: "Иван",
  age: 30
};

let cloneUser = {};

for(let key in user) {
  cloneUser[key] = user[key];
}
console.log(user, cloneUser);
