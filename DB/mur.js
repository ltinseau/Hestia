// données Résistancethermique des murs
const murs = [
  {
    id: 0,
    type: "Murs en pierre de taille et moellons (granit, gneiss, porphyres, pierres calcaires, grès, meulières, schistes, pierres volcaniques)",
    sousType: "Murs constitués d’un seul matériau / inconnu",
    Umur0: {
      "≤ 20": 3.2,
      25: 2.85,
      30: 2.65,
      35: 2.45,
      40: 2.3,
      45: 2.15,
      50: 2.05,
      55: 1.9,
      60: 1.8,
      65: 1.75,
      70: 1.65,
      75: 1.55,
      "≥ 80": 1.5,
    },
  },
  {
    id: 1,
    type: "Murs en pierre de taille et moellons (granit, gneiss, porphyres, pierres calcaires, grès, meulières, schistes, pierres volcaniques)",
    sousType: "Murs avec remplissage tout venant",
    Umur0: {
      50: 1.9,
      55: 1.75,
      60: 1.6,
      65: 1.5,
      70: 1.45,
      75: 1.3,
      "≥ 80": 1.25,
    },
  },
  {
    id: 2,
    type: "Murs en pisé ou béton de terre stabilisé",
    Umur0: {
      "≤ 40": 1.75,
      45: 1.65,
      50: 1.55,
      55: 1.45,
      60: 1.35,
      65: 1.25,
      70: 1.2,
      75: 1.15,
      "≥ 80": 1.1,
    },
  },
  {
    id: 3,
    type: "Murs en pans de bois",
    sousType: "Sans remplissage tout venant",
    Umur0: {
      10: 2.7,
      13: 2.35,
      18: 1.98,
      24: 1.65,
      "≤ 8": 3,
      "≥ 32": 1.35,
    },
  },
  {
    id: 4,
    type: "Murs en pans de bois",
    sousType: "Avec remplissage tout venant",
    Umur0: {
      10: 1.7,
      13: 1.7,
      18: 1.7,
      24: 1.7,
      "≤ 8": 1.7,
      "≥ 32": 1.7,
    },
  },
  {
    id: 5,
    type: "Murs bois (rondins)",
    sousType: "",
    Umur0: {
      15: 1.2,
      20: 0.95,
      "≤ 10": 1.6,
      "≥ 25": 0.8,
    },
  },
  {
    id: 6,
    type: "Murs en briques pleines simples",
    sousType: "",
    Umur0: {
      12: 3.45,
      15: 3.05,
      19: 2.75,
      23: 2.5,
      28: 2.25,
      34: 2,
      45: 1.65,
      55: 1.45,
      60: 1.35,
      "≤ 9": 3.9,
      "≥ 70": 1.2,
    },
  },
  {
    id: 7,
    type: "Murs en briques pleines doubles avec lame d’air",
    sousType: "",
    Umur0: {
      25: 1.85,
      30: 1.65,
      35: 1.55,
      45: 1.35,
      50: 1.25,
      "≤ 20": 2,
      "≥ 60": 1.2,
    },
  },
  {
    id: 8,
    type: "Murs en briques creuses",
    sousType: "",
    Umur0: {
      18: 2.05,
      20: 2,
      23: 1.85,
      25: 1.7,
      28: 1.68,
      33: 1.65,
      38: 1.55,
      "≤ 15": 2.15,
      "≥ 43": 1.4,
    },
  },
  {
    id: 9,
    type: "Murs en blocs de béton pleins",
    sousType: "",
    Umur0: {
      23: 2.75,
      25: 2.6,
      28: 2.5,
      30: 2.4,
      33: 2.3,
      35: 2.2,
      38: 2.1,
      "≤ 20": 2.9,
      "≥ 40": 2.05,
    },
  },
  {
    id: 10,
    type: "Murs en blocs de béton creux",
    sousType: "",
    Umur0: {
      23: 2.65,
      "≤ 20": 2.8,
      "≥ 25": 2.3,
    },
  },
  {
    id: 11,
    type: "Murs en béton banché",
    sousType: "",
    Umur0: {
      25: 2.65,
      28: 2.5,
      30: 2.4,
      35: 2.2,
      40: 2.05,
      "≤ 20": 2.9,
      22.5: 2.75,
      "≥ 45": 1.9,
    },
  },
  {
    id: 12,
    type: "Murs en béton de mâchefer",
    sousType: "",
    Umur0: {
      "≤ 20": 2.75,
      25: 2.4,
      28: 2.25,
      30: 2.15,
      35: 1.95,
      40: 1.8,
      22.5: 2.5,
      "≥ 45": "-",
    },
  },
  {
    id: 13,
    type: "Murs sandwich béton/isolant/béton (sans isolation rapportée)",
    sousType: "",
    Umur0: {
      20: 0.48,
      "≤15": 0.9,
      "≥ 25": 0.45,
    },
  },
  {
    id: 14,
    type: "Murs en ossature bois (sans isolation rapportée)",
    sousType: "",
    Umur0: {
      10: 0.45,
      15: 0.35,
      20: 0.26,
      25: 0.21,
      30: 0.17,
      35: 0.15,
      40: 0.13,
      "≥ 45": 0.11,
    },
  },
  {
    id: 15,
    type: "Cloison de plâtre",
    sousType: "",
    Umur0: {
      0: 3.33,
    },
  },
];

// fonction pour déterminer Umur0 (id, epaisseur, enduit)
function determineUmur0(id, epaisseur, enduit) {
  let output = 2.5;
  let Umur0 = murs[id].Umur0[epaisseur];
  enduit
    ? (output = Math.round(100 / (1 / Umur0 + 0.7)) / 100)
    : (output = Umur0);
  return output;
}

/*---------------------------------------*/
// contrôle affichage bases de données
console.log("base de données murs :");
console.log(murs);
console.log(murs[4].Umur0[18]);

// contrôle fonction determineUmur0
let Umur0 = determineUmur0(0, 60, true);
console.log(`Umur0 = ${Umur0}`);

/*---------------------------------------*/
export {};
