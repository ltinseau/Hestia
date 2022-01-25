import * as Baie from "./DB/baie.js";
/* fonction importées de Baie: 
    ---> determineUg(type,orientation,remplissage,VIR,epaisseur1,epaisseur2)
    ---> determineUw(menuiserie,ouverture,porteFenetre,rupturePT,soubassement,Ug)
    ---> determineUwDF(Uw1, Uw2)
    ---> determineDeltaR(id)
    ---> determineUjn(Uw, deltaR)
    ---> determineUp(nature, type)

*/

import * as Mur from "./DB/mur.js";
/* fonctions importées de Mur:
    ---> determineUmur0(id, epaisseur, enduit)
    ---> determineRisolant(zoneClimatique, effetJoule, anConstruction, anIsolationConnue, anIsolation)
    ---> determineUmur(Umur0, rIsolant, epIsolant, anConstruction, anIsolant)
    remarque: besoin des variables globales zoneClimatique, effetJoule et variable locale anIsolationConnue
*/
