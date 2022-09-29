const btn = document.querySelector("#btn");

function random() {
  const num = Math.floor(Math.random() * 16);
  switch (num) {
    case 10:
      return "a";
    case 11:
      return "b";
    case 12:
      return "c";
    case 13:
      return "d";
    case 14:
      return "e";
    case 15:
      return "f";
    default:
      return num;
  }
}

function changeBGColor() {
  let bgColor = "#";
  for (let i = 0; i < 6; i++) {
    bgColor = bgColor + random();
  }

  document.body.style.backgroundColor = bgColor;
}

btn.addEventListener("click", changeBGColor);
