/*  programme comparaison de deux chaines
*	but : comparé si la première chaine saisit est deux fois plus grande que la deuxième
*	auteur :    Ouahab FENNICHE
*	date :      14/04/2021
*/


// librairie scanf
const scanf = require('scanf');


console.log("Entrez la première chaine :");
let chaine1 = scanf('%s');
console.log("Entrez la deuxième chaine :");
let chaine2 = scanf('%s');



// // comparaison entre les deux chaine saisit
// en utilisant if else
// if (chaine1.length >= ((chaine2.length) * 2)) {
//     console.log("La taille de la première chaine est deux fois plus grande que la deuxième");
// } else {
//     console.log("La taille de la premièrei chaine n'est pas deux fois plus grande que la deuxième");
// }

// en utilisant l'opérateur ternaire 
(chaine1.length >= ((chaine2.length) * 2)) ? console.log("La taille de la première chaine est deux fois plus grande que la deuxième") : console.log("La taille de la premièrei chaine n'est pas deux fois plus grande que la deuxième");

