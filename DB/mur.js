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
    id: 14,
    type: "Brique terre cuite alvéolaire",
    sousType: "",
    Umur0: {
      30: 0.47,
      37.5: 0.4,
    },
  },
  {
    id: 15,
    type: "Mur en béton cellulaire",
    sousType: "Construction < 2013",
    Umur0: {
      15: 0.9,
      20: 0.7,
      25: 0.57,
      30: 0.49,
      35: 0.42,
      17.5: 0.79,
      22.5: 0.63,
      27.5: 0.53,
      32.5: 0.45,
      37.5: 0.4,
    },
  },
  {
    id: 16,
    type: "Mur en béton cellulaire",
    sousType: "Construction ≥ 2013",
    Umur0: {
      15: 0.69,
      20: 0.53,
      25: 0.43,
      30: 0.36,
      35: 0.28,
      17.5: 0.6,
      22.5: 0.48,
      27.5: 0.4,
      32.5: 0.3,
      37.5: 0.22,
    },
  },
  {
    id: 17,
    type: "Murs sandwich béton/isolant/béton (sans isolation rapportée)",
    sousType: "",
    Umur0: {
      20: 0.48,
      "≤15": 0.9,
      "≥ 25": 0.45,
    },
  },
  {
    id: 18,
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
    id: 19,
    type: "Cloison de plâtre",
    sousType: "",
    Umur0: {
      0: 3.33,
    },
  },
];
// données Résistance thermique des isolations selon l'année de construction ou rénovation
const isolations = [
  {
    zoneClimatique: "H1",
    effetJoule: true,
    Risolant: {
      "avant 1974 ou inconnu": 2.5,
      "1975-1977": 1,
      "1978-1982": 0.8,
      "1983-1988": 0.7,
      "1989-2000": 0.45,
      "2001-2005": 0.4,
      "2006-2012": 0.36,
      "après 2013": 0.23,
    },
  },
  {
    zoneClimatique: "H1",
    effetJoule: false,
    Risolant: {
      "avant 1974 ou inconnu": 2.5,
      "1975-1977": 1,
      "1978-1982": 1,
      "1983-1988": 0.8,
      "1989-2000": 0.5,
      "2001-2005": 0.4,
      "2006-2012": 0.36,
      "après 2013": 0.23,
    },
  },
  {
    zoneClimatique: "H2",
    effetJoule: true,
    Risolant: {
      "avant 1974 ou inconnu": 2.5,
      "1975-1977": 1.05,
      "1978-1982": 0.84,
      "1983-1988": 0.74,
      "1989-2000": 0.47,
      "2001-2005": 0.4,
      "2006-2012": 0.36,
      "après 2013": 0.23,
    },
  },
  {
    zoneClimatique: "H2",
    effetJoule: false,
    Risolant: {
      "avant 1974 ou inconnu": 2.5,
      "1975-1977": 1.05,
      "1978-1982": 1.05,
      "1983-1988": 0.84,
      "1989-2000": 0.53,
      "2001-2005": 0.4,
      "2006-2012": 0.36,
      "après 2013": 0.23,
    },
  },
  {
    zoneClimatique: "H3",
    effetJoule: true,
    Risolant: {
      "avant 1974 ou inconnu": 2.5,
      "1975-1977": 1.11,
      "1978-1982": 0.89,
      "1983-1988": 0.78,
      "1989-2000": 0.5,
      "2001-2005": 0.47,
      "2006-2012": 0.4,
      "après 2013": 0.25,
    },
  },
  {
    zoneClimatique: "H3",
    effetJoule: false,
    Risolant: {
      "avant 1974 ou inconnu": 2.5,
      "1975-1977": 1.11,
      "1978-1982": 1.11,
      "1983-1988": 0.89,
      "1989-2000": 0.56,
      "2001-2005": 0.47,
      "2006-2012": 0.4,
      "après 2013": 0.25,
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

// fonction pour déterminer le Risolant en fonction de l'année de construction ou de rénovation (année, zone cimatique, effet joule)
function determineRisolant(
  zoneClimatique,
  effetJoule,
  anConstruction,
  anIsolationConnue,
  anIsolation
) {
  let output = 2.5;
  let plageAnnee = "avant 1974 ou inconnu";
  let zoneClimAbr;
  // on détermine la plage d'année de construction ou rénovation:
  if (!anIsolationConnue && anConstruction <= 1974) {
    plageAnnee = "1975-1977";
  } else {
    if (!anIsolationConnue) {
      anIsolation = anConstruction;
    }
    if (anIsolation <= 1974) {
      plageAnnee = "avant 1974 ou inconnu";
    } else if (anIsolation <= 1977) {
      plageAnnee = "1975-1977";
    } else if (anIsolation <= 1982) {
      plageAnnee = "1978-1982";
    } else if (anIsolation <= 1988) {
      plageAnnee = "1983-1988";
    } else if (anIsolation <= 2000) {
      plageAnnee = "1989-2000";
    } else if (anIsolation <= 2005) {
      plageAnnee = "2001-2005";
    } else if (anIsolation <= 2013) {
      plageAnnee = "après 2013";
    }
  }
  console.log(`plageAnnée : ${plageAnnee}`);
  // on détermine la zone climatique H1, H2 ou H3:
  switch (zoneClimatique) {
    case "H1a":
    case "H1b":
    case "H1c":
      zoneClimAbr = "H1";
      break;
    case "H2a":
    case "H2b":
    case "H2c":
    case "H2d":
      zoneClimAbr = "H2";
      break;
    default:
      zoneClimAbr = "H3";
      break;
  }
  console.log(`zone climatique abrégée: ${zoneClimAbr}`);
  isolations.forEach((isolation) => {
    if (
      isolation.zoneClimatique == zoneClimAbr &&
      isolation.effetJoule == effetJoule
    ) {
      output = isolation.Risolant[plageAnnee];
    }
  });
  return output;
}

// fonction pour calculer Umur avec isolation (Umur0, rIsolant, epIsolant, anIsolant). Si les valeurs ne sont pas renseignées ou connues, elles devront être mises à 0.
function determineUmur(Umur0, rIsolant, epIsolant, anIsolant) {
  let output = Umur0;
  console.log(`verif du test sur Risolant : ${rIsolant !== 0}`);
  if (rIsolant !== 0) {
    output = Math.round(100 / (1 / Umur0 + rIsolant)) / 100;
    console.log("calcul par R");
  } else if (epIsolant !== 0) {
    output = Math.round(100 / (1 / Umur0 + epIsolant / 0.04)) / 100;
    console.log("calcul par ep");
  } else {
    /* fonction pour donner Risolant avec l'année de contruction*/
    console.log("calcul par AC");
  }

  return output;
}

/*---------------------------------------*/
// contrôle affichage bases de données
console.log("base de données murs :");
console.log(murs);
console.log(murs[4].Umur0[18]);

// contrôle fonction determineUmur0
let Umur0 = determineUmur0(16, 20, false);
console.log(`Umur0 = ${Umur0}`);

// contrôle fonction determineUmur
let Ris = 3.5;
let EpIs = 0.1;
let AC = 1978;
let Umur = determineUmur(Umur0, Ris, EpIs, AC);
console.log(`Pour une isolation R= ${Ris}: Umur = ${Umur}`);
console.log(`Pour une isolation R = 4.5: Umur = ${determineUmur(Umur0, 4.5)}`);
console.log(
  `Pour une isolation ep = ${EpIs}: Umur = ${determineUmur(Umur0, 0, EpIs)}`
);
console.log(
  `Pour une isolation année= ${AC}: Umur = ${determineRisolant(
    "H3",
    true,
    AC,
    true,
    2000
  )}`
);

// contrôle fonction determineRisolant
let Risolant = determineRisolant("H3", true, 1967, true, 1978);
console.log(Risolant);

/*---------------------------------------*/
export {};
