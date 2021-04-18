/*  programme pour calculer la moyenne dans un tableau
*	but :       calculer la moyenne des valeurs d'un tableau saisit
*	auteur :    Ouahab FENNICHE
*	date :      14/04/2021
*/


const scanf = require('scanf');

const tablength = 5;
// Initialise les variables
let i = 1;
const tab = [];
let total = 0;

// Ajoute les valeurs dans un tableau
while (i != 6) {
    console.log(`saisir la valeur ${i} :`);
    let number = scanf('%d');
    tab.push(number);
    i++;
}

// Tableau
console.log("tableau = ", tab);

// Indice du plus grand élement & Moyenne
let somme = 0;
let max = tab[0];
let indiceMax = 0;
for (i in tab)
    if (tab[i] > max) {
        somme += tab[i];
        max = tab[i];
        indiceMax = i;
    }
// affichage de l'indice du plus grand élément
console.log(`l'indice de la valeur maximum (${max}) du tableau est : ${indiceMax}`);
// calcul de la moyenne
let moyenne = somme / tab.length;
console.log("moyenne", moyenne);