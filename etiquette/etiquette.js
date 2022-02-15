const labelColors = [
  "rgb(0, 156, 109)",
  "rgb(82, 177, 83)",
  "rgb(120, 189, 118)",
  "rgb(244, 231, 15)",
  "rgb(240, 181, 15)",
  "rgb(235, 130, 53)",
  "rgb(215, 34, 31)",
];
const lettres = ["A", "B", "C", "D", "E", "F", "G"];
const DPEcvsWidth = 700;
const DPEcvsHeight = 700;
const DPEgraphWidth = (DPEcvsWidth - 20) / 1.56;
const padX = 10 + DPEgraphWidth * 0.56;
const padY = (DPEcvsHeight - DPEgraphWidth) / 2;
const DPE_label_pos = [0, 0, DPEgraphWidth, DPEgraphWidth];
//[82, 109, 137, 166, 195, 224, 252];

const DPE_rating = 240;
const GLS_rating = 62;

console.log("padX = " + padX);
console.log("padY = " + padY);
console.log("DPEgraphWidth = " + DPEgraphWidth);

// ----------------------------------------------
//   etiquette via un CANVAS
// ----------------------------------------------

// fonction pour déterminer la classe DPE (DPE_rating)
// return une lettre ou un chiffre
// -----> à revoir avec la prise en compte du GLS
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
  let font1 = "bold " + DPEcvsWidth / 200 + "rem verdana";
  let font2 = " " + (0.7 * DPEcvsWidth) / 400 + "rem verdana";
  let fontL = "bold " + DPEcvsWidth / 130 + "rem verdana";
  let fontl = "bold " + DPEcvsWidth / 240 + "rem verdana";
  let fontSub = " " + (0.5 * DPEcvsWidth) / 400 + "rem verdana";
  let fontConso = "bold" + DPEcvsWidth / 500 + "rem verdana";

  const DPEcvs = document.getElementById("DPEcvs");
  if (index == classDPE) {
    if (DPEcvs.getContext) {
      ctx = DPEcvs.getContext("2d");
      ctx.fillStyle = "rga(0,0,0,1)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(padX + label_pos[0][0], padY + label_pos[0][1]); //pt A
      ctx.lineTo(padX + label_pos[1][0], padY + label_pos[1][1]); // pt B
      ctx.lineTo(padX + label_pos[2][0], padY + label_pos[2][1]); // pt C
      ctx.lineTo(padX + label_pos[3][0], padY + label_pos[3][1]); // pt D
      ctx.lineTo(padX + label_pos[4][0], padY + label_pos[4][1]); // pt E
      ctx.closePath();
      // rectangle pour le texte:
      ctx.moveTo(padX + label_pos[0][0], padY + label_pos[0][1]);
      ctx.lineTo(
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth + 8,
        padY + label_pos[0][1]
      );
      ctx.quadraticCurveTo(
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth,
        padY + label_pos[0][1],
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth,
        padY + label_pos[0][1] + 8
      );
      ctx.lineTo(
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth,
        padY + label_pos[4][1] - 8
      );
      ctx.quadraticCurveTo(
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth,
        padY + label_pos[4][1],
        padX + label_pos[0][0] - 0.56 * DPEgraphWidth + 8,
        padY + label_pos[4][1]
      );
      ctx.lineTo(padX + label_pos[0][0], padY + label_pos[4][1]);
      ctx.closePath();
      ctx.stroke();
      // trait de séparation :
      ctx.moveTo(
        padX + label_pos[0][0] - DPEgraphWidth / 3.8,
        padY + label_pos[0][1] + 4
      );
      ctx.lineTo(
        padX + label_pos[4][0] - DPEgraphWidth / 3.8,
        padY + label_pos[4][1] - 4
      );
      ctx.stroke();
      // texte lettrage DPE
      //let font1 = "bold " + DPEcvsWidth / 200 + "rem verdana";
      ctx.fillStyle = "black";
      ctx.font = font1;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(
        DPE_rating,
        padX + label_pos[0][0] - 0.42 * DPEgraphWidth,
        padY + label_pos[2][1] - 0.025 * DPEgraphWidth,
        0.25 * DPEgraphWidth
      );
      // texte unités DPE
      //let font2 = " " + (0.7 * DPEcvsWidth) / 400 + "rem verdana";
      ctx.fillStyle = "black";
      ctx.font = font2;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(
        "kWh/m²/an",
        padX + label_pos[0][0] - 0.42 * DPEgraphWidth,
        padY + label_pos[2][1] + 0.06 * DPEgraphWidth,
        0.26 * DPEgraphWidth
      );
      // texte titre consommation
      ctx.fillStyle = "black";
      ctx.font = fontConso;
      ctx.fillText(
        "consommation",
        padX + label_pos[0][0] - 0.41 * DPEgraphWidth,
        padY + label_pos[2][1] - 0.23 * DPEgraphWidth,
        0.25 * DPEgraphWidth
      );
      ctx.fillStyle = "grey";
      ctx.font = fontConso;
      ctx.fillText(
        "(énergie primaire)",
        padX + label_pos[0][0] - 0.41 * DPEgraphWidth,
        padY + label_pos[2][1] - 0.18 * DPEgraphWidth,
        0.31 * DPEgraphWidth
      );
      // texte lettrage GLS
      //let fontSub = " " + (0.5 * DPEcvsWidth) / 400 + "rem verdana";
      ctx.fillStyle = "black";
      ctx.font = font1;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(
        GLS_rating,
        padX + label_pos[0][0] - 0.13 * DPEgraphWidth,
        padY + label_pos[2][1] - 0.025 * DPEgraphWidth,
        0.23 * DPEgraphWidth
      );
      // texte unités GLS
      ctx.fillStyle = "black";
      ctx.font = font2;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(
        "kgCO",
        padX + label_pos[0][0] - 0.2 * DPEgraphWidth,
        padY + label_pos[2][1] + 0.06 * DPEgraphWidth,
        0.1 * DPEgraphWidth
      );
      ctx.textBaseline = "top";
      ctx.font = fontSub;
      ctx.fillText(
        "2",
        padX + label_pos[0][0] - 0.145 * DPEgraphWidth,
        padY + label_pos[2][1] + 0.065 * DPEgraphWidth,
        0.014 * DPEgraphWidth
      );
      ctx.textBaseline = "middle";
      ctx.font = font2;
      ctx.fillText(
        "/m²/an",
        padX + label_pos[0][0] - 0.075 * DPEgraphWidth,
        padY + label_pos[2][1] + 0.06 * DPEgraphWidth,
        0.12 * DPEgraphWidth
      );
      // texte titre émission
      ctx.fillStyle = "black";
      ctx.font = fontConso;
      ctx.fillText(
        "émission",
        padX + label_pos[0][0] - 0.13 * DPEgraphWidth,
        padY + label_pos[2][1] - 0.18 * DPEgraphWidth,
        0.19 * DPEgraphWidth
      );
      // incrustation de la lettre
      //let fontL = "bold " + DPEcvsWidth / 130 + "rem verdana";
      ctx.font = fontL;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      ctx.fillStyle = "white";
      ctx.fillText(
        lettres[i],
        padX + label_pos[0][0] + 0.02 * DPEgraphWidth,
        padY + label_pos[2][1] + 0.013 * DPEgraphWidth,
        0.15 * DPEgraphWidth
      );
      ctx.strokeText(
        lettres[i],
        padX + label_pos[0][0] + 0.02 * DPEgraphWidth,
        padY + label_pos[2][1] + 0.013 * DPEgraphWidth,
        0.15 * DPEgraphWidth
      );
    }
  } else {
    // incrustation des autres lettres
    if (DPEcvs.getContext) {
      ctx = DPEcvs.getContext("2d");
      //let fontl = "bold " + DPEcvsWidth / 240 + "rem verdana";
      ctx.font = fontl;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      ctx.fillStyle = "white";
      ctx.fillText(
        lettres[i],
        padX + 0.024 * DPEgraphWidth,
        padY + 0.01 * DPEgraphWidth + label_pos[2][1],
        0.14 * DPEgraphWidth
      );
    }
  }
}

// fonction qui trace toute l'étiquette (DPE-rating)
function DPE_labelDisplay(DPE_rating) {
  let positions = new Array();
  let fontl = "normal " + DPEcvsWidth / 600 + "rem verdana";
  positions = set_DPE_label_position(DPE_rating);
  for (i = 0; i <= 6; i++) {
    console.log("position = " + positions[i]);
    draw_DPE_polygon(positions[i], `${labelColors[i]}`);
    draw_DPE_stroke(positions[i], i, DPE_rating);
  }
  // textes en bas et en haut du graph
  const DPEcvs = document.getElementById("DPEcvs");
  if (DPEcvs.getContext) {
    ctx = DPEcvs.getContext("2d");
    ctx.font = fontl;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    ctx.fillStyle = labelColors[0];
    ctx.fillText(
      "logement extrêmement performant",
      padX,
      padY - 0.05 * DPEgraphWidth,
      0.7 * DPEgraphWidth
    );
    ctx.fillStyle = labelColors[6];
    ctx.fillText(
      "logement extrêmement peu performant",
      padX,
      padY + 1.05 * DPEgraphWidth,
      0.7 * DPEgraphWidth
    );
  }
}

window.addEventListener("load", DPE_labelDisplay(DPE_rating));

// console.log(set_class_DPE(500));
console.log(set_DPE_label_position(DPE_rating));
console.log(draw_DPE_stroke(DPE_rating));
