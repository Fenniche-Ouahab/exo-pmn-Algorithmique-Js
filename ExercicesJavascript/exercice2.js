/*  programme somme entier 
*	but : calculer la somme des nombres compris entre 1 et un entier saisit par l'utilisateur
*	auteur :    Ouahab FENNICHE
*	date :      14/04/2021
*/

const scanf = require('scanf');

console.log("Entrez un entier > 0  :");

let unEntier = scanf('%d');


if (unEntier > 0) {
    var somme = 0;

    // parcours jusqu'a l'entier saisit
    for (let i = 0; i <= unEntier; i++) {
        somme = i + somme;
    }

    // Afficher la somme
    console.log(`la somme des entiers entre 1 et ${unEntier} est : ${somme}`);
} else {
    console.log("L'entier doit être supérieur à 0 !!");
}


