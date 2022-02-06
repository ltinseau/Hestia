// besoin d'une fonction qui va donner les paramètres des polygones.
// en entrée, la consommation
// en sortie, un tableau de tableau
// exemple clip-path: polygon(0% 0%, 85% 0, 100% 50%, 85% 100%, 0% 100%);
const DPE_size_init = [
  [82, 33, "--color-DPE1", "A"],
  [109, 33, "--color-DPE2", "B"],
  [137, 33, "--color-DPE3", "C"],
  [166, 33, "--color-DPE4", "D"],
  [195, 33, "--color-DPE5", "E"],
  [224, 33, "--color-DPE6", "F"],
  [252, 33, "--color-DPE7", "G"],
];
const DPE_rating = 270;

function setLabelSize(DPE_rating) {
  let DPE_size = DPE_size_init;
  if (DPE_rating == null) {
    DPE_size = DPE_size_init;
  } else if (DPE_rating <= 70) {
    DPE_size[0][0] += 5;
    DPE_size[0][1] = 62;
    for (i = 1; i <= 6; i++) {
      DPE_size[i][0] += 10;
    }
  } else if (DPE_rating <= 110) {
    DPE_size[1][0] += 5;
    DPE_size[1][1] = 62;
    for (i = 2; i <= 6; i++) {
      DPE_size[i][0] += 10;
    }
  } else if (DPE_rating <= 180) {
    DPE_size[2][0] += 5;
    DPE_size[2][1] = 62;
    for (i = 3; i <= 6; i++) {
      DPE_size[i][0] += 10;
    }
  } else if (DPE_rating <= 250) {
    DPE_size[3][0] += 5;
    DPE_size[3][1] = 62;
    for (i = 4; i <= 6; i++) {
      DPE_size[i][0] += 10;
    }
  } else if (DPE_rating <= 330) {
    DPE_size[4][0] += 5;
    DPE_size[4][1] = 62;
    for (i = 5; i <= 6; i++) {
      DPE_size[i][0] += 11;
    }
  } else if (DPE_rating <= 420) {
    DPE_size[5][0] += 5;
    DPE_size[5][1] = 62;
    for (i = 6; i <= 6; i++) {
      DPE_size[i][0] += 11;
    }
  } else {
    DPE_size[6][0] += 4;
    DPE_size[6][1] = 42;
  }

  return DPE_size;
}

console.log(setLabelSize(DPE_rating));

function DPE_labelDisplay() {
  let id = 0;
  document.querySelector(".DPE_label").innerHTML = setLabelSize(DPE_rating)
    .map(
      (level) => `<li style="
    clip-path: polygon(0% 0%, 
        ${level[0] - level[1] / 3 - 1}px 0px, 
        ${level[0]}px ${level[1] / 2}px, 
        ${level[0] - level[1] / 3 - 1}px ${level[1]}px, 
        0px ${level[1]}px);
    background-color: var(${level[2]});
    width: ${level[0]}px;
    height: ${level[1]}px;
  "> ${level[3]} </li>`
    )
    .join("");
}

DPE_labelDisplay();
