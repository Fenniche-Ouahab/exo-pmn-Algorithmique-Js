/* Class Circle
* auteur : Ouahab FENNICHE
* date : 14/04/2021
*/

const Point = require('./Point.js');

class Circle extends Point {
    constructor(point, radius) {
        super();
        this.point = point;
        this.radius = radius;
    }

    // calculer l'aire du cercle
    area() {
        let air = Math.PI * (this.radius * this.radius);
        return air;
    }

    // transformer l'objet en string
    toString() {
        console.log(`Le cercle a un rayon de ${this.radius}cm , et les coordonnées du point sont:  (x = ${this.point.getX()}; y = ${this.point.getY()})`);
    }

    // méthode pour déterminer si le point est dans le cercle ou pas
    containsPoint(p) {
        const difX = this.point.getX() - p.getX();
        const difY = this.point.getY() - p.getY();
        const length = Math.sqrt((difX * difX) + (difY * difY));

        if (length >= 0 && length <= this.radius) {
            console.log('Le point est dans le cercle.');
        } else {
            console.log("Le point n'est pas dans ce cercle");
        }
    }


}

module.exports = Circle;