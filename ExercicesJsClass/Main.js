/* programme pour tester toutes les classe créer
* auteur : Ouahab FENNICHE
* date : 14/04/2021
*/

// importation des classes
const Hippopotamus = require('./Hippopotamus');
const Point = require('./Point');
const Circle = require('./Circle');


/* test de la classe Hippoptamus */
console.log("\n ************* Test de la classe Hippopotamus *************\n")
// instanciation de 2 hippopotame
let hippo1 = new Hippopotamus("hippo1", 30000, 80);
let hippo2 = new Hippopotamus("hippo2", 50000, 60);
// afficher les information d'un hippopotame
console.log(hippo1.toString());
// lancer un combat entre les 2 hippopotames
console.log(`\n+++++ Combat : ${hippo1.name}  vs ${hippo1.name}  ++++++`);
hippo1.fight(hippo2);
// affichage du cycle de vie de l'hippopotame
console.log(`\n>>>>>>> Cycle de vie  >>>>>>> :`);
hippo1.cycleDevie();

/* test de la classe Point */
console.log("\n ************* Test de la classe Point *************\n")
// instanciation des 2 point
let point1 = new Point(1, 3);
let point2 = new Point(3, 2);

// affichage du point
point1.toString();
// récupérer la coordonnée x
console.log(point1.getX());
// récupérer la coordonnée y
console.log(point1.getY());
// modifier la coordonnée x
point1.setX(2);
// modifier la coordonnée y
point1.setY(3);

// affichage du point après modification
point1.toString();

/* test de la classe Circle */
console.log("\n ************* Test de la classe Circle *************\n");
// instanciation d'un cercle avec le point1 instancier avant
let cercle = new Circle(point1, 5);
// affichage du cercle
cercle.toString();
// calcul et affichage de l'aire de cercle
console.log(`L'aire du cercle est ${cercle.area()}`);
// dire si le point2 est dans le cercle 
cercle.containsPoint(point1);
console.log("\n ************* FIN ************* \n");