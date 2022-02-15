const labelColors = [
  "rgb(0, 156, 109)",
  "rgb(82, 177, 83)",
  "rgb(120, 189, 118)",
  "rgb(244, 231, 15)",
  "rgb(240, 181, 15)",
  "rgb(235, 130, 53)",
  "rgb(215, 34, 31)",
];
const DPEcvsWidth = 400;
const DPEcvsHeight = 400;
const DPEgraphWidth = (DPEcvsWidth - 20) / 1.56;
const padX = 10 + DPEgraphWidth * 0.56;
const padY = (DPEcvsHeight - DPEgraphWidth) / 2;
const DPE_label_pos = [0, 0, DPEgraphWidth, DPEgraphWidth];
//[82, 109, 137, 166, 195, 224, 252];

const DPE_rating = 200;

console.log("padX = " + padX);
console.log("padY = " + padY);
console.log("DPEgraphWidth = " + DPEgraphWidth);

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
  let labelHeight = (33 / 288) * DPE_label_pos[3];
  console.log("labelHeight:" + labelHeight);
  for (i = 0; i <= 6; i++) {
    if (set_class_DPE(DPE_rating)[1] == i && DPE_label_pos[3] != 0) {
      labelHeight = (72 / 288) * DPE_label_pos[3];
    } else {
      labelHeight = (33 / 288) * DPE_label_pos[3];
    }
    i == 0
      ? (labelPos[0] = [
          [DPE_label_pos[0], DPE_label_pos[1]], //pt A
          [
            (82 / 288) * DPE_label_pos[2] -
              (labelHeight / 2) * Math.tan((36 * Math.PI) / 180),
            DPE_label_pos[1],
          ], //pt B
          [(82 / 288) * DPE_label_pos[2], labelHeight / 2], //pt C
          [
            (82 / 288) * DPE_label_pos[2] -
              (labelHeight / 2) * Math.tan((36 * Math.PI) / 180),
            labelHeight,
          ], //pt D
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
  console.log(labelPos);
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

// fonction qui trace le contour du polygone, le cartouche et les lettrages (label_pos, index, DPE Rating)
function draw_DPE_stroke(label_pos, index, rating) {
  let classDPE = set_class_DPE(rating)[1];

  if (index == classDPE) {
    const DPEcvs = document.getElementById("DPEcvs");
    if (DPEcvs.getContext) {
      ctx = DPEcvs.getContext("2d");
      ctx.fillStyle = "rga(0,0,0,1)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(padX + label_pos[0][0], padY + label_pos[0][1]);
      ctx.lineTo(padX + label_pos[1][0], padY + label_pos[1][1]);
      ctx.lineTo(padX + label_pos[2][0], padY + label_pos[2][1]);
      ctx.lineTo(padX + label_pos[3][0], padY + label_pos[3][1]);
      ctx.lineTo(padX + label_pos[4][0], padY + label_pos[4][1]);
      ctx.closePath();
      // rectangle pour le texte:
      ctx.moveTo(padX + label_pos[0][0], padY + label_pos[0][1]);
      ctx.lineTo(
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth - 3,
        padY + label_pos[0][1]
      );
      ctx.quadraticCurveTo(
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth,
        y + hauteur,
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth + 3,
        y + hauteur
      );
      ctx.lineTo(
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth,
        padY + label_pos[4][1]
      );
      ctx.lineTo(padX + label_pos[0][0], padY + label_pos[4][1]);
      ctx.closePath();
      ctx.stroke();
      // trait de séparation :
      ctx.moveTo(
        padX + label_pos[0][0] - DPEgraphWidth / 4,
        padY + label_pos[0][1] + 4
      );
      ctx.lineTo(
        padX + label_pos[4][0] - DPEgraphWidth / 4,
        padY + label_pos[4][1] - 4
      );
      ctx.stroke();
    }
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
