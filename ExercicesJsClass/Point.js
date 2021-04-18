/* Class Point
* auteur : Ouahab FENNICHE
* date : 14/04/2021
*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // getter pour obtenir la valeur de x
    getX() {
        return `x = ${this.x} `;
    }
    // getter pour obtenir la valeur de y
    getY() {
        return `y = ${this.y}`;
    }
    // setter pour définir la valeur de x
    setX(x) {
        this.x = x;
        console.log(`x après modification : ${x} `);
    }
    // setter pour définir la valeur de y
    setY(y) {
        this.y = y;
        console.log(`y après modification : ${y}`);
    }

    toString() {
        console.log(`Les coordonées du point sont : (${this.x}, ${this.y})`);
    }
}


module.exports = Point;
