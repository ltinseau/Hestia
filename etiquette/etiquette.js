// besoin d'une fonction qui va donner les paramètres des polygones.
// en entrée, la consommation
// en sortie, un tableau de tableau
// exemple clip-path: polygon(0% 0%, 85% 0, 100% 50%, 85% 100%, 0% 100%);

const labelColors = [
  "rgb(0, 156, 109)",
  "rgb(82, 177, 83)",
  "rgb(120, 189, 118)",
  "rgb(244, 231, 15)",
  "rgb(240, 181, 15)",
  "rgb(235, 130, 53)",
  "rgb(215, 34, 31)",
];

const DPE_size_init = [
  [82, 33, "--color-DPE1", "A"],
  [109, 33, "--color-DPE2", "B"],
  [137, 33, "--color-DPE3", "C"],
  [166, 33, "--color-DPE4", "D"],
  [195, 33, "--color-DPE5", "E"],
  [224, 33, "--color-DPE6", "F"],
  [252, 33, "--color-DPE7", "G"],
];

const DPE_label_pos = [0, 0, 288, 288];
//const DPE_label_YPos = [82, 109, 137, 166, 195, 224, 252];

const DPE_rating = 270;

let padX = 100;
let padY = 50;

// function setLabelSize(DPE_rating) {
//   let DPE_size = DPE_size_init;
//   if (DPE_rating == null) {
//     DPE_size = DPE_size_init;
//   } else if (DPE_rating <= 70) {
//     DPE_size[0][0] += 5;
//     DPE_size[0][1] = 68;
//     for (i = 1; i <= 6; i++) {
//       DPE_size[i][0] += 10;
//     }
//   } else if (DPE_rating <= 110) {
//     DPE_size[1][0] += 5;
//     DPE_size[1][1] = 68;
//     for (i = 2; i <= 6; i++) {
//       DPE_size[i][0] += 10;
//     }
//   } else if (DPE_rating <= 180) {
//     DPE_size[2][0] += 5;
//     DPE_size[2][1] = 68;
//     for (i = 3; i <= 6; i++) {
//       DPE_size[i][0] += 10;
//     }
//   } else if (DPE_rating <= 250) {
//     DPE_size[3][0] += 5;
//     DPE_size[3][1] = 68;
//     for (i = 4; i <= 6; i++) {
//       DPE_size[i][0] += 10;
//     }
//   } else if (DPE_rating <= 330) {
//     DPE_size[4][0] += 5;
//     DPE_size[4][1] = 68;
//     for (i = 5; i <= 6; i++) {
//       DPE_size[i][0] += 11;
//     }
//   } else if (DPE_rating <= 420) {
//     DPE_size[5][0] += 5;
//     DPE_size[5][1] = 68;
//     for (i = 6; i <= 6; i++) {
//       DPE_size[i][0] += 11;
//     }
//   } else {
//     DPE_size[6][0] += 4;
//     DPE_size[6][1] = 42;
//   }

//   return DPE_size;
// }

// console.log(setLabelSize(DPE_rating));

// function DPE_labelDisplay() {
//   let id = 0;
//   document.querySelector(".DPE_label").innerHTML = setLabelSize(DPE_rating)
//     .map(
//       (level) => `<li id= "DPE_polygon_${level[3]}" style="
//       clip-path: polygon(
//         0px 0px,
//         ${level[0] - level[1] / 3 - 1}px 0px,
//         ${level[0]}px ${level[1] / 2}px,
//         ${level[0] - level[1] / 3 - 1}px ${level[1]}px,
//         0px ${level[1]}px);
//     background-color: rgba(0, 0, 0, 0.9);
//     width: ${level[0]}px;
//     height: ${level[1]}px;
//     z-index: 1;

//   ">${level[3]}<div class="DPE_label_polygon" style="
//   clip-path: polygon(
//       0% 0%,
//       ${level[0] - level[1] / 3 - 6}px 0px,
//       ${level[0] - 8}px ${level[1] / 2 - 4}px,
//       ${level[0] - level[1] / 3 - 11}px ${level[1]}px,
//       0px ${level[1]}px);
//     background-color: var(${level[2]}) ;

//   width: ${level[0]}px;
//   height: ${level[1] - 8}px;
//   z-index: 2;

// ">${level[3]}</div>

//   </li>`
//     )
//     .join("");
// }

// ----------------------------------------------
//   etiquette via un CANVAS
// ----------------------------------------------

// fonction pour déterminer la classe DPE (DPE_rating)
// return une lettre ou un chiffre
function set_class_DPE(DPE_rating) {
  let class_DPE = ["A", 0];
  if (DPE_rating <= 70) {
    class_DPE = ["A", 0];
  } else if (DPE_rating <= 110) {
    class_DPE = ["B", 1];
  } else if (DPE_rating <= 180) {
    class_DPE = ["C", 2];
  } else if (DPE_rating <= 250) {
    class_DPE = ["D", 3];
  } else if (DPE_rating <= 330) {
    class_DPE = ["E", 4];
  } else if (DPE_rating <= 420) {
    class_DPE = ["F", 5];
  } else {
    class_DPE = ["G", 6];
  }
  return class_DPE;
}

// fonction pour calculer les coordonnées de chaque polygone (DPE_rating)
// return un tableau d'objet avec les coordonnées de chaque polygone
function set_DPE_label_position(DPE_rating) {
  let labelPos = new Array();
  let labelHeight = (33 / 288) * DPE_label_pos[4];
  for (i = 0; i <= 6; i++) {
    if (set_class_DPE(DPE_rating)[1] == i && DPE_label_pos[3] != 0) {
      labelHeight = (72 / 288) * DPE_label_pos[3];
    } else {
      labelHeight = (33 / 288) * DPE_label_pos[3];
    }
    i == 0
      ? (labelPos[0] = [
          [DPE_label_pos[0], DPE_label_pos[1]], //pt A
          [(70 * 288) / DPE_label_pos[2], DPE_label_pos[1]], //pt B
          [(82 * 288) / DPE_label_pos[2], labelHeight / 2], //pt C
          [(70 * 288) / DPE_label_pos[2], labelHeight], //pt D
          [DPE_label_pos[0], labelHeight], //pt E
        ])
      : (labelPos[i] = [
          [DPE_label_pos[0], DPE_label_pos[1] + labelPos[i - 1][3][1] + 3], //pt A
          [
            labelPos[i - 1][2][0] +
              ((labelPos[i - 1][4][1] - labelPos[i - 1][0][1]) / 2) *
                Math.tan((36 * Math.PI) / 180),
            DPE_label_pos[1] + labelPos[i - 1][3][1] + 3,
          ], //pt B
          [
            labelPos[i - 1][2][0] +
              (labelHeight / 2 +
                (labelPos[i - 1][4][1] - labelPos[i - 1][0][1]) / 2) *
                Math.tan((36 * Math.PI) / 180),
            labelHeight / 2 + labelPos[i - 1][3][1] + 3,
          ], //pt C
          [
            labelPos[i - 1][2][0] +
              ((labelPos[i - 1][4][1] - labelPos[i - 1][0][1]) / 2) *
                Math.tan((36 * Math.PI) / 180),
            labelHeight + labelPos[i - 1][3][1] + 3,
          ], //pt D
          [DPE_label_pos[0], labelHeight + labelPos[i - 1][3][1] + 3], //pt E
        ]);
  }
  return labelPos;
}

// fonction qui dessine un polygone (coordonnées)
function draw_DPE_polygon(label_pos, color) {
  const DPEcvs = document.getElementById("DPEcvs");

  ctx = DPEcvs.getContext("2d");
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(padX + label_pos[0][0], padY + label_pos[0][1]);
  ctx.lineTo(padX + label_pos[1][0], padY + label_pos[1][1]);
  ctx.lineTo(padX + label_pos[2][0], padY + label_pos[2][1]);
  ctx.lineTo(padX + label_pos[3][0], padY + label_pos[3][1]);
  ctx.lineTo(padX + label_pos[4][0], padY + label_pos[4][1]);
  ctx.fill();
}

// fonction qui trace le contour du polygone (DPE Rating)
function draw_DPE_stroke(label_pos, index, rating) {
  let classDPE = set_class_DPE(rating)[1];

  if (index == classDPE) {
    console.log("test: " + classDPE);
    const DPEcvs = document.getElementById("DPEcvs");
    ctx = DPEcvs.getContext("2d");
    ctx.fillStyle = "rga(0,0,0,0.9";
    ctx.beginPath();
    ctx.moveTo(padX + label_pos[0][0], padY + label_pos[0][1]);
    ctx.lineTo(padX + label_pos[1][0], padY + label_pos[1][1]);
    ctx.lineTo(padX + label_pos[2][0], padY + label_pos[2][1]);
    ctx.lineTo(padX + label_pos[3][0], padY + label_pos[3][1]);
    ctx.lineTo(padX + label_pos[4][0], padY + label_pos[4][1]);
    ctx.lineTo(padX + label_pos[0][0], padY + label_pos[0][1]);
    ctx.stroke();
  }
}

// fonction qui trace toute l'étiquette (DPE-rating)
function DPE_labelDisplay(DPE_rating) {
  let positions = new Array();
  positions = set_DPE_label_position(DPE_rating);
  for (i = 0; i <= 6; i++) {
    console.log("position = " + positions[i]);
    draw_DPE_polygon(positions[i], `${labelColors[i]}`);
    draw_DPE_stroke(positions[i], i, DPE_rating);
  }
}

window.addEventListener("load", DPE_labelDisplay(DPE_rating));

// console.log(set_class_DPE(500));
console.log(set_DPE_label_position(DPE_rating));
console.log(draw_DPE_stroke(DPE_rating));
