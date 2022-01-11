document.querySelector("body > div.page__form.container > div.col-9.btn-block.align-items-center > button").addEventListener('click', function () {
  let catsName = document.querySelector("#inputName").value
  console.log(catsName);
  let catsColor = document.querySelector("#exampleColorInput").value
  console.log(catsColor);

  let catsBreed;
  document.querySelector("body > div.page__form.container > div:nth-child(3) > div > div > select > option").addEventListener("input", function (event) {
    catsBreed = this.value
    return catsBreed;
  });
  console.log(catsBreed);

  const catsSex = document.querySelector(".form-check").querySelectorAll('.form-check-label');
  let sex;
  catsSex.forEach((catSex, i) => {
    catSex.addEventListener('click', () => {
      // тут обработчик клика по чекбоксу
      sex = `${catSex.value} | ${text[i]}`;
      return sex;
    });
  });
  console.log(sex);

})