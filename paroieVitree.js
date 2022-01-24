let PVData;
let erreurVitrage = true; // variable pour vérifier que le vitrage renseigné est présent dans la base de donnée

// import des données de paroiVitreeData
// base de données vitrages:

const vitrages = [
  {
    type: "SV",
    orientation: "",
    remplissage: "",
    VIR: false,
    epaisseur: "",
    UgSV: 5.8,
  },
  {
    type: "DV",
    orientation: "vertical",
    remplissage: "airSec",
    VIR: false,
    epaisseur: {
      6: 3.3,
      8: 3.1,
      10: 2.9,
      12: 2.8,
      14: 2.8,
      15: 2.7,
      16: 2.7,
      18: 2.7,
      20: 2.7,
    },
  },
  {
    type: "DV",
    orientation: "vertical",
    remplissage: "airSec",
    VIR: true,
    epaisseur: {
      6: 2.45,
      8: 2.1,
      10: 1.8,
      12: 1.6,
      14: 1.5,
      15: 1.4,
      16: 1.4,
      18: 1.4,
      20: 1.4,
    },
  },
  {
    type: "DV",
    orientation: "vertical",
    remplissage: "ArKr",
    VIR: false,
    epaisseur: {
      6: 3,
      8: 2.9,
      10: 2.8,
      12: 2.7,
      14: 2.6,
      15: 2.6,
      16: 2.6,
      18: 2.6,
      20: 2.6,
    },
  },
  {
    type: "DV",
    orientation: "vertical",
    remplissage: "ArKr",
    VIR: true,
    epaisseur: {
      6: 2,
      8: 1.7,
      10: 1.4,
      12: 1.3,
      14: 1.2,
      15: 1.1,
      16: 1.1,
      18: 1.1,
      20: 1.1,
    },
  },
  {
    type: "DV",
    orientation: "horizontal",
    remplissage: "airSec",
    VIR: false,
    epaisseur: {
      6: 3.7,
      8: 3.4,
      10: 3.2,
      12: 3.1,
      14: 3.1,
      15: 2.9,
      16: 2.9,
      18: 2.9,
      20: 2.9,
    },
  },
  {
    type: "DV",
    orientation: "horizontal",
    remplissage: "airSec",
    VIR: true,
    epaisseur: {
      6: 2.6,
      8: 2.2,
      10: 1.9,
      12: 1.7,
      14: 1.6,
      15: 1.5,
      16: 1.5,
      18: 1.5,
      20: 1.5,
    },
  },
  {
    type: "DV",
    orientation: "horizontal",
    remplissage: "ArKr",
    VIR: false,
    epaisseur: {
      6: 3.3,
      8: 3.2,
      10: 3.1,
      12: 2.9,
      14: 2.8,
      15: 2.8,
      16: 2.8,
      18: 2.8,
      20: 2.8,
    },
  },
  {
    type: "DV",
    orientation: "horizontal",
    remplissage: "ArKr",
    VIR: true,
    epaisseur: {
      6: 2.1,
      8: 1.8,
      10: 1.5,
      12: 1.4,
      14: 1.2,
      15: 1.1,
      16: 1.1,
      18: 1.1,
      20: 1.1,
    },
  },
  {
    type: "TV",
    orientation: "vertical",
    remplissage: "AirSec",
    VIR: false,
    epaisseur: {
      6: 2.3,
      8: 2.1,
      10: 2,
      12: 1.9,
      14: 1.8,
      15: 1.8,
      16: 1.8,
      18: 1.7,
      20: 1.7,
    },
  },
  {
    type: "TV",
    orientation: "vertical",
    remplissage: "AirSec",
    VIR: true,
    epaisseur: {
      6: 1.7,
      8: 1.4,
      10: 1.2,
      12: 1.1,
      14: 1,
      15: 0.9,
      16: 0.9,
      18: 0.8,
      20: 0.8,
    },
  },
  {
    type: "TV",
    orientation: "vertical",
    remplissage: "ArKr",
    VIR: false,
    epaisseur: {
      6: 2.1,
      8: 1.9,
      10: 1.8,
      12: 1.8,
      14: 1.7,
      15: 1.7,
      16: 1.7,
      18: 1.6,
      20: 1.6,
    },
  },
  {
    type: "TV",
    orientation: "vertical",
    remplissage: "ArKr",
    VIR: true,
    epaisseur: {
      6: 1.5,
      8: 1.2,
      10: 1,
      12: 0.9,
      14: 0.8,
      15: 0.7,
      16: 0.7,
      18: 0.6,
      20: 0.6,
    },
  },
  {
    type: "TV",
    orientation: "horizontal",
    remplissage: "airSec",
    VIR: false,
    epaisseur: {
      6: 2.5,
      8: 2.2,
      10: 2.1,
      12: 2,
      14: 1.9,
      15: 1.9,
      16: 1.9,
      18: 1.8,
      20: 1.8,
    },
  },
  {
    type: "TV",
    orientation: "horizontal",
    remplissage: "airSec",
    VIR: true,
    epaisseur: {
      6: 1.8,
      8: 1.5,
      10: 1.2,
      12: 1.1,
      14: 1,
      15: 0.9,
      16: 0.9,
      18: 0.8,
      20: 0.8,
    },
  },
  {
    type: "TV",
    orientation: "horizontal",
    remplissage: "ArKr",
    VIR: false,
    epaisseur: {
      6: 2.2,
      8: 2,
      10: 1.9,
      12: 1.9,
      14: 1.8,
      15: 1.8,
      16: 1.8,
      18: 1.7,
      20: 1.7,
    },
  },
  {
    type: "TV",
    orientation: "horizontal",
    remplissage: "ArKr",
    VIR: true,
    epaisseur: {
      6: 1.6,
      8: 1.2,
      10: 1,
      12: 0.9,
      14: 0.8,
      15: 0.7,
      16: 0.7,
      18: 0.6,
      20: 0.6,
    },
  },
];

// base de données fenêtres:
const fenetres = [
  {
    menuiserie: "metal",
    rupturePontThermique: true,
    ouverture: "battante",
    epaisseur: {
      1: 1.7,
      2: 2.6,
      3: 3.4,
      4: 4.3,
      6: 6,
      0.5: 1.3,
      0.6: 1.4,
      0.7: 1.5,
      0.8: 1.6,
      0.9: 1.6,
      1.1: 1.8,
      1.2: 1.9,
      1.3: 2,
      1.4: 2.1,
      1.5: 2.1,
      1.6: 2.2,
      1.7: 2.3,
      1.8: 2.4,
      1.9: 2.5,
      2.1: 2.7,
      2.2: 2.7,
      2.3: 2.8,
      2.4: 2.9,
      2.5: 3,
      2.6: 3.1,
      2.7: 3.2,
      2.8: 3.3,
      2.9: 3.3,
      3.1: 3.5,
      3.2: 3.6,
      3.3: 3.7,
      3.4: 3.8,
      3.5: 3.8,
      3.6: 3.9,
      3.7: 4,
      3.8: 4.1,
      3.9: 4.2,
      5.7: 5.7,
      5.8: 5.8,
      5.9: 5.9,
    },
  },
  {
    menuiserie: "metal",
    rupturePontThermique: true,
    ouverture: "coulissante",
    porteFenetre: false,
    epaisseur: {
      1: 1.8,
      2: 2.6,
      3: 3.5,
      4: 4.3,
      6: 6,
      0.5: 1.4,
      0.6: 1.5,
      0.7: 1.6,
      0.8: 1.6,
      0.9: 1.7,
      1.1: 1.9,
      1.2: 2,
      1.3: 2,
      1.4: 2.1,
      1.5: 2.2,
      1.6: 2.3,
      1.7: 2.4,
      1.8: 2.4,
      1.9: 2.5,
      2.1: 2.8,
      2.2: 2.9,
      2.3: 2.9,
      2.4: 3,
      2.5: 3.1,
      2.6: 3.2,
      2.7: 3.3,
      2.8: 3.3,
      2.9: 3.4,
      3.1: 3.6,
      3.2: 3.7,
      3.3: 3.7,
      3.4: 3.8,
      3.5: 3.9,
      3.6: 4,
      3.7: 4.1,
      3.8: 4.1,
      3.9: 4.2,
      5.7: 5.7,
      5.8: 5.8,
      5.9: 5.9,
    },
  },
  {
    menuiserie: "metal",
    rupturePontThermique: true,
    ouverture: "battante",
    porteFenetre: true,
    epaisseur: {
      1: 1.5,
      2: 2.4,
      3: 3.3,
      4: 4.2,
      6: 6,
      0.5: 1,
      0.6: 1.1,
      0.7: 1.2,
      0.8: 1.3,
      0.9: 1.4,
      1.1: 1.6,
      1.2: 1.7,
      1.3: 1.7,
      1.4: 1.8,
      1.5: 1.9,
      1.6: 2,
      1.7: 2.1,
      1.8: 2.2,
      1.9: 2.3,
      2.1: 2.5,
      2.2: 2.6,
      2.3: 2.6,
      2.4: 2.7,
      2.5: 2.8,
      2.6: 2.9,
      2.7: 3,
      2.8: 3.1,
      2.9: 3.2,
      3.1: 3.4,
      3.2: 3.5,
      3.3: 3.5,
      3.4: 3.6,
      3.5: 3.7,
      3.6: 3.8,
      3.7: 3.9,
      3.8: 4,
      3.9: 4.1,
      5.7: 5.7,
      5.8: 5.8,
      5.9: 5.9,
    },
  },
  {
    menuiserie: "metal",
    rupturePontThermique: true,
    ouverture: "coulissante",
    porteFenetre: true,
    epaisseur: {
      1: 1.6,
      2: 2.5,
      3: 3.4,
      4: 4.3,
      6: 6.1,
      0.5: 1.2,
      0.6: 1.3,
      0.7: 1.4,
      0.8: 1.5,
      0.9: 1.6,
      1.1: 1.7,
      1.2: 1.8,
      1.3: 1.9,
      1.4: 2,
      1.5: 2.1,
      1.6: 2.2,
      1.7: 2.3,
      1.8: 2.4,
      1.9: 2.5,
      2.1: 2.6,
      2.2: 2.7,
      2.3: 2.8,
      2.4: 2.9,
      2.5: 3,
      2.6: 3.1,
      2.7: 3.2,
      2.8: 3.3,
      2.9: 3.4,
      3.1: 3.5,
      3.2: 3.6,
      3.3: 3.7,
      3.4: 3.8,
      3.5: 3.9,
      3.6: 3.9,
      3.7: 4.1,
      3.8: 4.2,
      3.9: 4.3,
      5.7: 5.8,
      5.8: 5.9,
      5.9: 6,
    },
  },
  {
    menuiserie: "metal",
    rupturePontThermique: false,
    ouverture: "battante",
    porteFenetre: false,
    epaisseur: {
      1: 2.3,
      2: 3.2,
      3: 4,
      4: 4.9,
      6: 6.6,
      0.5: 1.9,
      0.6: 2,
      0.7: 2.1,
      0.8: 2.2,
      0.9: 2.2,
      1.1: 2.4,
      1.2: 2.5,
      1.3: 2.6,
      1.4: 2.7,
      1.5: 2.7,
      1.6: 2.8,
      1.7: 2.9,
      1.8: 3,
      1.9: 3.1,
      2.1: 3.3,
      2.2: 3.3,
      2.3: 3.4,
      2.4: 3.5,
      2.5: 3.6,
      2.6: 3.7,
      2.7: 3.8,
      2.8: 3.9,
      2.9: 3.9,
      3.1: 4.1,
      3.2: 4.2,
      3.3: 4.3,
      3.4: 4.4,
      3.5: 4.4,
      3.6: 4.5,
      3.7: 4.6,
      3.8: 4.7,
      3.9: 4.8,
      5.7: 6.3,
      5.8: 6.4,
      5.9: 6.5,
    },
  },
  {
    menuiserie: "metal",
    rupturePontThermique: false,
    ouverture: "coulissante",
    soubassement: true,
    epaisseur: {
      1: 2.6,
      2: 3.4,
      3: 4.2,
      4: 5,
      6: 6.6,
      0.5: 2.2,
      0.6: 2.3,
      0.7: 2.4,
      0.8: 2.4,
      0.9: 2.5,
      1.1: 2.7,
      1.2: 2.8,
      1.3: 2.8,
      1.4: 2.9,
      1.5: 3,
      1.6: 3.1,
      1.7: 3.2,
      1.8: 3.2,
      1.9: 3.3,
      2.1: 3.5,
      2.2: 3.6,
      2.3: 3.6,
      2.4: 3.7,
      2.5: 3.8,
      2.6: 3.9,
      2.7: 4,
      2.8: 4,
      2.9: 4.1,
      3.1: 4.3,
      3.2: 4.4,
      3.3: 4.4,
      3.4: 4.5,
      3.5: 4.6,
      3.6: 4.7,
      3.7: 4.8,
      3.8: 4.8,
      3.9: 4.9,
      5.7: 6.4,
      5.8: 6.4,
      5.9: 6.5,
    },
  },
  {
    menuiserie: "metal",
    rupturePontThermique: false,
    ouverture: "battante",
    porteFenetre: true,
    epaisseur: {
      1: 1.9,
      2: 2.8,
      3: 3.7,
      4: 4.6,
      6: 6.4,
      0.5: 1.4,
      0.6: 1.5,
      0.7: 1.6,
      0.8: 1.7,
      0.9: 1.8,
      1.1: 2,
      1.2: 2.1,
      1.3: 2.1,
      1.4: 2.2,
      1.5: 2.3,
      1.6: 2.4,
      1.7: 2.5,
      1.8: 2.6,
      1.9: 2.7,
      2.1: 2.9,
      2.2: 3,
      2.3: 3,
      2.4: 3.1,
      2.5: 3.2,
      2.6: 3.3,
      2.7: 3.4,
      2.8: 3.5,
      2.9: 3.6,
      3.1: 3.8,
      3.2: 3.9,
      3.3: 3.9,
      3.4: 4,
      3.5: 4.1,
      3.6: 4.2,
      3.7: 4.3,
      3.8: 4.4,
      3.9: 4.5,
      5.7: 6.1,
      5.8: 6.2,
      5.9: 6.3,
    },
  },
  {
    menuiserie: "metal",
    rupturePontThermique: false,
    ouverture: "coulissante",
    porteFenetre: true,
    epaisseur: {
      1: 1.9,
      2: 2.8,
      3: 3.7,
      4: 4.6,
      6: 6.4,
      0.5: 1.5,
      0.6: 1.6,
      0.7: 1.7,
      0.8: 1.8,
      0.9: 1.9,
      1.1: 2,
      1.2: 2.1,
      1.3: 2.2,
      1.4: 2.3,
      1.5: 2.4,
      1.6: 2.5,
      1.7: 2.6,
      1.8: 2.7,
      1.9: 2.8,
      2.1: 2.9,
      2.2: 3,
      2.3: 3.1,
      2.4: 3.2,
      2.5: 3.3,
      2.6: 3.4,
      2.7: 3.5,
      2.8: 3.6,
      2.9: 3.7,
      3.1: 3.8,
      3.2: 3.9,
      3.3: 4,
      3.4: 4.1,
      3.5: 4.2,
      3.6: 4.3,
      3.7: 4.4,
      3.8: 4.5,
      3.9: 4.6,
      5.7: 6.2,
      5.8: 6.3,
      5.9: 6.4,
    },
  },
  {
    menuiserie: "PVC",
    ouverture: "battante",
    porteFenetre: false,
    epaisseur: {
      1: 1.3,
      2: 2.1,
      3: 2.8,
      4: 3.6,
      6: 5.1,
      0.5: 0.9,
      0.6: 1,
      0.7: 1.1,
      0.8: 1.2,
      0.9: 1.2,
      1.1: 1.4,
      1.2: 1.5,
      1.3: 1.5,
      1.4: 1.6,
      1.5: 1.7,
      1.6: 1.8,
      1.7: 1.8,
      1.8: 1.9,
      1.9: 2,
      2.1: 2.1,
      2.2: 2.2,
      2.3: 2.3,
      2.4: 2.4,
      2.5: 2.4,
      2.6: 2.5,
      2.7: 2.6,
      2.8: 2.7,
      2.9: 2.7,
      3.1: 2.9,
      3.2: 3,
      3.3: 3,
      3.4: 3.1,
      3.5: 3.2,
      3.6: 3.3,
      3.7: 3.3,
      3.8: 3.4,
      3.9: 3.5,
      5.7: 4.8,
      5.8: 4.9,
      5.9: 5,
    },
  },
  {
    menuiserie: "PVC",
    ouverture: "coulissante",
    porteFenetre: false,
    epaisseur: {
      1: 1.7,
      2: 2.4,
      3: 3.1,
      4: 3.8,
      6: 5.2,
      0.5: 1.3,
      0.6: 1.4,
      0.7: 1.5,
      0.8: 1.5,
      0.9: 1.6,
      1.1: 1.7,
      1.2: 1.8,
      1.3: 1.9,
      1.4: 2,
      1.5: 2,
      1.6: 2.1,
      1.7: 2.2,
      1.8: 2.2,
      1.9: 2.3,
      2.1: 2.4,
      2.2: 2.5,
      2.3: 2.6,
      2.4: 2.7,
      2.5: 2.7,
      2.6: 2.8,
      2.7: 2.9,
      2.8: 2.9,
      2.9: 3,
      3.1: 3.1,
      3.2: 3.2,
      3.3: 3.3,
      3.4: 3.4,
      3.5: 3.4,
      3.6: 3.5,
      3.7: 3.6,
      3.8: 3.6,
      3.9: 3.7,
      5.7: 5,
      5.8: 5,
      5.9: 5.1,
    },
  },
  {
    menuiserie: "PVC",
    ouverture: "battante",
    porteFenetre: true,
    soubassement: false,
    epaisseur: {
      1: 1.2,
      2: 2,
      3: 2.8,
      4: 3.6,
      6: 5.2,
      0.5: 0.8,
      0.6: 0.9,
      0.7: 1,
      0.8: 1,
      0.9: 1.1,
      1.1: 1.3,
      1.2: 1.4,
      1.3: 1.4,
      1.4: 1.5,
      1.5: 1.6,
      1.6: 1.7,
      1.7: 1.8,
      1.8: 1.8,
      1.9: 1.9,
      2.1: 2.1,
      2.2: 2.2,
      2.3: 2.2,
      2.4: 2.3,
      2.5: 2.4,
      2.6: 2.5,
      2.7: 2.6,
      2.8: 2.6,
      2.9: 2.7,
      3.1: 2.9,
      3.2: 3,
      3.3: 3,
      3.4: 3.1,
      3.5: 3.2,
      3.6: 3.3,
      3.7: 3.4,
      3.8: 3.4,
      3.9: 3.5,
      5.7: 5,
      5.8: 5,
      5.9: 5.1,
    },
  },
  {
    menuiserie: "PVC",
    ouverture: "coulissante",
    porteFenetre: true,
    soubassement: false,
    epaisseur: {
      1: 1.5,
      2: 2.3,
      3: 3.1,
      4: 3.9,
      6: 5.5,
      0.5: 1.1,
      0.6: 1.2,
      0.7: 1.2,
      0.8: 1.3,
      0.9: 1.4,
      1.1: 1.6,
      1.2: 1.6,
      1.3: 1.7,
      1.4: 1.8,
      1.5: 1.9,
      1.6: 2,
      1.7: 2,
      1.8: 2.1,
      1.9: 2.2,
      2.1: 2.4,
      2.2: 2.4,
      2.3: 2.5,
      2.4: 2.6,
      2.5: 2.7,
      2.6: 2.8,
      2.7: 2.8,
      2.8: 2.9,
      2.9: 3,
      3.1: 3.2,
      3.2: 3.2,
      3.3: 3.3,
      3.4: 3.4,
      3.5: 3.5,
      3.6: 3.6,
      3.7: 3.6,
      3.8: 3.7,
      3.9: 3.8,
      5.7: 5.2,
      5.8: 5.3,
      5.9: 5.4,
    },
  },
  {
    menuiserie: "PVC",
    ouverture: "battante",
    porteFenetre: true,
    soubassement: true,
    epaisseur: {
      1: 1.3,
      2: 2,
      3: 2.7,
      4: 3.4,
      6: 4.8,
      0.5: 0.9,
      0.6: 1,
      0.7: 1.1,
      0.8: 1.1,
      0.9: 1.2,
      1.1: 1.4,
      1.2: 1.4,
      1.3: 1.5,
      1.4: 1.6,
      1.5: 1.6,
      1.6: 1.7,
      1.7: 1.8,
      1.8: 1.8,
      1.9: 1.9,
      2.1: 2.1,
      2.2: 2.1,
      2.3: 2.2,
      2.4: 2.3,
      2.5: 2.3,
      2.6: 2.4,
      2.7: 2.5,
      2.8: 2.5,
      2.9: 2.6,
      3.1: 2.8,
      3.2: 2.8,
      3.3: 2.9,
      3.4: 3,
      3.5: 3,
      3.6: 3.1,
      3.7: 3.2,
      3.8: 3.2,
      3.9: 3.3,
      5.7: 4.6,
      5.8: 4.6,
      5.9: 4.7,
    },
  },
  {
    menuiserie: "bois",
    ouverture: "battante",
    porteFenetre: false,
    epaisseur: {
      1: 1.5,
      2: 2.3,
      3: 3.1,
      4: 3.9,
      6: 5.5,
      0.5: 1.1,
      0.6: 1.2,
      0.7: 1.3,
      0.8: 1.4,
      0.9: 1.4,
      1.1: 1.6,
      1.2: 1.7,
      1.3: 1.8,
      1.4: 1.8,
      1.5: 1.9,
      1.6: 2,
      1.7: 2.1,
      1.8: 2.2,
      1.9: 2.2,
      2.1: 2.4,
      2.2: 2.5,
      2.3: 2.6,
      2.4: 2.6,
      2.5: 2.7,
      2.6: 2.8,
      2.7: 2.9,
      2.8: 3,
      2.9: 3,
      3.1: 3.2,
      3.2: 3.3,
      3.3: 3.4,
      3.4: 3.4,
      3.5: 3.5,
      3.6: 3.6,
      3.7: 3.7,
      3.8: 3.8,
      3.9: 3.8,
      5.7: 5.3,
      5.8: 5.4,
      5.9: 5.4,
    },
  },
  {
    menuiserie: "bois",
    ouverture: "coulissante",
    porteFenetre: false,
    epaisseur: {
      1: 1.6,
      2: 2.4,
      3: 3.2,
      4: 3.9,
      6: 5.5,
      0.5: 1.2,
      0.6: 1.3,
      0.7: 1.4,
      0.8: 1.4,
      0.9: 1.5,
      1.1: 1.7,
      1.2: 1.8,
      1.3: 1.9,
      1.4: 2,
      1.5: 2.1,
      1.6: 2.1,
      1.7: 2.2,
      1.8: 2.3,
      1.9: 2.4,
      2.1: 2.5,
      2.2: 2.6,
      2.3: 2.7,
      2.4: 2.7,
      2.5: 2.8,
      2.6: 2.9,
      2.7: 3,
      2.8: 3,
      2.9: 3.1,
      3.1: 3.3,
      3.2: 3.3,
      3.3: 3.4,
      3.4: 3.5,
      3.5: 3.6,
      3.6: 3.6,
      3.7: 3.7,
      3.8: 3.8,
      3.9: 3.9,
      5.7: 5.3,
      5.8: 5.4,
      5.9: 5.4,
    },
  },
  {
    menuiserie: "bois",
    ouverture: "battante",
    porteFenetre: true,
    soubassement: false,
    epaisseur: {
      1: 1.3,
      2: 2.2,
      3: 3,
      4: 3.9,
      6: 5.6,
      0.5: 0.9,
      0.6: 1,
      0.7: 1.1,
      0.8: 1.2,
      0.9: 1.2,
      1.1: 1.4,
      1.2: 1.5,
      1.3: 1.6,
      1.4: 1.7,
      1.5: 1.8,
      1.6: 1.8,
      1.7: 1.9,
      1.8: 2,
      1.9: 2.1,
      2.1: 2.3,
      2.2: 2.3,
      2.3: 2.4,
      2.4: 2.5,
      2.5: 2.6,
      2.6: 2.7,
      2.7: 2.8,
      2.8: 2.9,
      2.9: 2.9,
      3.1: 3.1,
      3.2: 3.2,
      3.3: 3.3,
      3.4: 3.4,
      3.5: 3.5,
      3.6: 3.5,
      3.7: 3.6,
      3.8: 3.7,
      3.9: 3.8,
      5.7: 5.3,
      5.8: 5.4,
      5.9: 5.5,
    },
  },
  {
    menuiserie: "bois",
    ouverture: "coulissante",
    porteFenetre: true,
    soubassement: false,
    epaisseur: {
      1: 1.4,
      2: 2.3,
      3: 3.1,
      4: 4,
      6: 5.7,
      0.5: 1,
      0.6: 1.1,
      0.7: 1.2,
      0.8: 1.2,
      0.9: 1.3,
      1.1: 1.5,
      1.2: 1.6,
      1.3: 1.7,
      1.4: 1.7,
      1.5: 1.8,
      1.6: 1.9,
      1.7: 2,
      1.8: 2.1,
      1.9: 2.2,
      2.1: 2.3,
      2.2: 2.4,
      2.3: 2.5,
      2.4: 2.6,
      2.5: 2.7,
      2.6: 2.8,
      2.7: 2.9,
      2.8: 2.9,
      2.9: 3,
      3.1: 3.2,
      3.2: 3.3,
      3.3: 3.4,
      3.4: 3.4,
      3.5: 3.5,
      3.6: 3.6,
      3.7: 3.7,
      3.8: 3.8,
      3.9: 3.9,
      5.7: 5.4,
      5.8: 5.5,
      5.9: 5.6,
    },
  },
  {
    menuiserie: "bois",
    ouverture: "battante",
    porteFenetre: true,
    soubassement: true,
    epaisseur: {
      1: 1.4,
      2: 2.1,
      3: 2.8,
      4: 3.5,
      6: 4.9,
      0.5: 1.1,
      0.6: 1.2,
      0.7: 1.2,
      0.8: 1.3,
      0.9: 1.4,
      1.1: 1.5,
      1.2: 1.6,
      1.3: 1.7,
      1.4: 1.7,
      1.5: 1.8,
      1.6: 1.9,
      1.7: 1.9,
      1.8: 2,
      1.9: 2.1,
      2.1: 2.2,
      2.2: 2.3,
      2.3: 2.4,
      2.4: 2.4,
      2.5: 2.5,
      2.6: 2.6,
      2.7: 2.6,
      2.8: 2.7,
      2.9: 2.8,
      3.1: 2.9,
      3.2: 3,
      3.3: 3.1,
      3.4: 3.1,
      3.5: 3.2,
      3.6: 3.3,
      3.7: 3.3,
      3.8: 3.4,
      3.9: 3.5,
      5.7: 4.7,
      5.8: 4.8,
      5.9: 4.9,
    },
  },
];

// fonctions pour le calcul des déperditions des fenêtres et portes fenêtres

// fonction pour calculer l'epaisseur moyenne du triple vitrage
//  La valeur retenue est egale ou juste inférieure aux valeurs suivantes: 6, 8, 10, 12, 14, 15, 16, 18, 20
function epaisseurMoy(epaisseur1, epaisseur2) {
  let result = Math.floor((epaisseur1 + epaisseur2) / 2);
  console.log(result);
  switch (result) {
    case 7:
      result = 6;
      break;
    case 9:
      result = 8;
      break;
    case 11:
      result = 10;
      break;
    case 13:
      result = 12;
      break;
    case 17:
      result = 16;
      break;
    case 19:
      result = 18;
      break;

    default:
      result = null;
      break;
  }
  console.log(`epaisseur calculée: ${result}`);
  return result;
}

// fonction pour déterminer Ug (type de vitrage)
//    type = 'SV', 'DV', 'TV'
//    orientation = 'horizontal', 'vertical'
//    remplissage = 'airSec', 'ArKr'
//    VIR = true, false
//    epaisseur1 = 6, 8, 10, 12, 14, 15, 16, 18, 20
//    epaisseur2 = 6, 8, 10, 12, 14, 15, 16, 18, 20

function determineUg(
  type,
  orientation,
  remplissage,
  VIR,
  epaisseur1,
  epaisseur2
) {
  let output = 0;

  vitrages.forEach((vitrage) => {
    switch (type) {
      case "SV":
        if (vitrage.type == "SV") {
          output = vitrage.UgSV;
          erreurVitrage = false;
        }
        break;
      case "DV":
        if (
          vitrage.type == "DV" &&
          vitrage.orientation == orientation &&
          vitrage.remplissage == remplissage &&
          vitrage.VIR == VIR
        ) {
          output = vitrage.epaisseur[epaisseur1];
          erreurVitrage = false;
        }
        break;
      case "TV":
        if (
          vitrage.type == "TV" &&
          vitrage.orientation == orientation &&
          vitrage.remplissage == remplissage &&
          vitrage.VIR == VIR
        ) {
          output = vitrage.epaisseur[epaisseurMoy(epaisseur1, epaisseur2)];
          erreurVitrage = false;
        }
        break;
      default:
        output = 5.8;
    }
    // console.log(`N° ${i++}`);
    console.log(output);
  });
  return output;
}
// fonction pour déterminer Uw (Ug, type de paroi, menuiserie)
// fonction pour déterminer Ujn (Uw, type de fermeture)
// fonction pour déterminer U baie (Ujn ou Uw)

// export des données
// export { vitrage, fenetre };

// contrôle affichage bases de données
console.log("base de donnée vitrages :");
console.log(vitrages);
console.log("base de donnée fenêtres :");
console.log(fenetres);
console.log("------->");

let rUg = determineUg("DV", "horizontal", "airSec", false, 6, null);
// contrôle fonction determineUg
erreurVitrage == false
  ? console.log(`Ug =  ${rUg}`)
  : console.log("fenêtre absente de la base");
