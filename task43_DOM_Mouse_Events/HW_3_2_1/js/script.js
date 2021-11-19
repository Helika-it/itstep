//! Основы событий мыши
//! HW. Задача 3.2.1 
let tooltip; //(всплывающая подсказка)

document.onmouseover = function (event) { //(мышка над)
  // важно: быстро движущийся курсор может прыгнуть сразу к дочернему элементу, пропустив родительский
  // так что событие mouseover произойдёт сразу на дочернем элементе.

  let anchorElem = event.target.closest('[data-tooltip]');

  if (!anchorElem) return;

  // показываем подсказку и запоминаем её (функция 1)
  tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
}

document.onmouseout = function () {
  // возможно такое, что произошло событие mouseout, но мы всё ещё внутри элемента
  // (оно было где-то внутри и всплыло)
  // но в этом случае сразу же последует событие mouseover,
  // то есть подсказка исчезнет и потом снова покажется
  //
  // к счастью, этого не будет видно,
  // так как оба события происходят почти одновременно
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }

}

//(функция 1)
function showTooltip(anchorElem, html) {
  // создали элемент подсказка ('div')
  let tooltipElem = document.createElement('div');
  // добавили ему класс 'tooltip'
  tooltipElem.className = 'tooltip';
  // ! содержимое HTML = html (вставили содержимое атрибута?)
  tooltipElem.innerHTML = html;
  // ! в body вставили тег элемент подсказка
  document.body.append(tooltipElem);

  // переменная: координаты (элемента)
  let coords = anchorElem.getBoundingClientRect();

  // позиционируем подсказку над центром элемента
  let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + anchorElem.offsetHeight + 5;
  }

  // вычисленные координаты через свойства присвоили подсказке (добавив к цифрам 'px')
  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  // вывели подсказку
  return tooltipElem;
}