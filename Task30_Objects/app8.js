/*
8. Дан объект 
let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50
  }
};
Написать код, который создает его точный клон (новый объект с такой же структурой).
*/

let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50
  }
};

let cloneUser = {};

for(let key in user) {
  if(typeof user[key] != "object"){
    cloneUser[key] = user[key];
  } else {
    cloneUser[key] = {};
    for(let key1 in user[key]) {
      cloneUser[key][key1] = user[key][key1];
    }
  }
}
console.log(user, cloneUser);
