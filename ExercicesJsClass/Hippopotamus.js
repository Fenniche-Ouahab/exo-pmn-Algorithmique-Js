/* Class Hippopotamus
* auteur : Ouahab FENNICHE
* date : 14/04/2021
*/
class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }


    /* fonction perdre 300 g */
    swim() {
        return this.weight -= 300;
    }

    /* fonction perdre 1Kg (1000g) */
    eat() {
        return this.weight += 1000;
    }

    /* méthode permettant de transformer l'objet en string */
    toString() {
        return `Hippopotame ${this.name} pèse ${this.weight} g à des défences de : ${this.tusksSize} cm`
    }
    /**
          si fight, retourne vrai alors, l'hippopotame
          "this" a gagné.
    **/
    fight(Hippopotamus) {
        console.log(this.tusksSize > Hippopotamus.tusksSize ? `\t ${this.name} à gagné` : `\t ${Hippopotamus.name} à gagné`);
    }

    /* cycle de vie d'un Hippopotame */
    cycleDevie() {
        for (let jour = 1; jour < 22; jour++) {
            for (let heure = 0; heure < 15; heure++) {
                // executé 2 fois la méthode eat()
                for (let i = 0; i < 2; i++) {
                    this.eat();
                }
                // executé 2 fois la méthode swim()
                for (let i = 0; i < 3; i++) {
                    this.swim();
                }
            }
            console.log(`${this.toString()}`);
        }
    }
}



module.exports = Hippopotamus;
