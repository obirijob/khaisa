function changeImage(p) {
  let img = document.querySelector('#img_placeholder');
  img['src'] = `assets/${p}.jpg`;
}

let buttons = document.querySelectorAll('.options button');
buttons.forEach((b, i) =>
  b.addEventListener('click', () => changeImage(i + 1))
);
