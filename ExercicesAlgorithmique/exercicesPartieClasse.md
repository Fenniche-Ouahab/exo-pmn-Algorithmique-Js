# ✨Exercices 1  ✨

  
-  a) Écrire la classe Hippopotamus suivante :
Un Hippopotame à 3 variables membres :
    - name // son nom
    - weight // son poids
    - tusksSize // la taille des défenses
    
    Ainsi que les méthodes suivants :
    - Un constructeur permettant d’initialiser votre Hippopotame - swim() // perd 300g
    - eat() // gagne 1kg
    - Hippopotamus fight(Hippopotamus) // combat contre un autre Hippopotame, Le gagnant est celui qui possède les plus grandes défenses message approprié.
- b) Ecrire la méthode permettant de transformer votre objet en string
- c) Tester votre classe en simulant un combat
- d) Instancier un Hippopotame puis démarrer son cycle de vie.
Le cycle de vie d’un Hippopotame est le suivant :
2 appels à la méthode eat() suivie de 3 appels à la méthode swim(), toutes les heures pendant 15h
Afficher l’Hippopotame chaque soir pendant 3 semaines.

```
        \* classe Hippopotamus
        * auteur : Ouahab FENNICHE
        * date : 13/04/2020 */
        
        classe Hippopotamus(name, weight, tusksSize)
		    /* constructeur */
		        Hippopotamus(name, weight, tusksSize)
			        affecter à name: name
			        affecter à weight : weight
			        affecter à tusksSize: tusksSize
		debut
		
		/* fonction perdre 300 g */
		fonction swim()
		    debut
			    affecter à weight : weight - 300
		    fin
		    
		/* fonction gagner 1000 g */
		fonction eat()
		    debut
		    	affecter à weight : weight + 1000
		    fin
		
		/* méthode permettant de transformer l'objet en string */
		fonction transformerEnChaine()
		    debut
		    	afficher "L'hippopotame " + name + " pèse " + weight + " et 
		    	possède une défense de : " + tusksSize
		    fin
		    
		/* fonction combat */
		fonction fight(Hippopotamus)
		    debut
        		si this.tusksSize > Hippopotamus.tusksSize
        			Afficher this.name + " gagne le combat"
        		sinon si this.tusksSize = Hippopotamus.tusksSize
        			Afficher "égalité"
        		sinon si this.tusksSize < Hippopotamus.tusksSize
        			Afficher this.name + " perd le combat"
        		    finsi
        		    finsi
        		finsi
		    fin
		  
		/* cycle de vie d'un Hippopotame */
    	fonction cycleDeVie()
        	jour: entier
        	heures: entier
        	i: entier
    		debut
				pour jours de 0 à 21
                      pour heures de 0 à 15
						pour i de 1 a 2
							hippopotamus.eat()
						finpour
						pour i de 1 a 3
							hippopotamus.swim()
						finpour
					finpour
				// Afficher l’Hippopotame chaque soir pendant 3 semaines
				this.transformerEnChaine()
				finpour
		fin
```
```
            // test de la classe Hippopotamus
             classe TestHippopotamus   
             /* instancation */
	        	affecter à hippop1 : new hippopotamus ("hip1", 50000, 30)
	        	affecter à hippop2 : new hippopotamus ("hip2", 35000, 10)
	        	
	        	/* test et simulant d'un combat */
		            hippo1.fight(hippo2)
		      
		      /* test cycle de vie d'un hippopotame
		            hippo1.cycleDeVie()
```


# ✨Exercices 2✨

-  a) Ecrire une classe Point.
La classe sera composé de deux variables membre x (entier) et y (entier) ainsi que des mé-
thodes suivantes :
    - Un Constructeur permettant d’initialiser le Point - getX() & setX(x)
    - getY() & setY(y)
- b) Ecrire la méthode permettant de transformer votre objet en string
- c) Tester votre classe

```
        \* classe Point
        * auteur : Ouahab FENNICHE
        * date : 13/04/2020 */
        
        	classe Point(x, y)
        	x : entier
        	y : entier
        	debut
        		fonction getX()
        			afficher x
        		fonction getY()
        			afficher y
        		fonction setX(x)
        			affecter à x : x
        		fonction setY(y)
        			affecter à x : y
    
    	        /* méthode permettant de transformer l'objet en string */
        		fonction transformerEnChaine()
        			afficher "(" + x + "," + y + ")"

    	fin
```

```
            // test de la classe Point
             classe TestPoint 
             /* instancation */
	        	affecter à  point1 : new Point(10 , 30)
	        	
	        	point1.getX()
	        	point1.getY()
	        	point1.setX()
	        	point1.setY()
	        	
```

# ✨Exercices  3✨
-  a) Ecrire une classe Circle.
La classe sera composé des variables :
    + point (de type Point)
    + radius (entier)
    
    Ainsi que des méthodes suivantes :
    - Un constructeur permettant d’initialiser le Circle
    - area() // Calcul l’aire du cercle
    - containsPoint(point) // true si le Point est dans le Circle, sinon false
-  b) Ecrire la méthode permettant de transformer votre objet en string
- c) Tester votre classe

```
        \* classe Point
        * auteur : Ouahab FENNICHE
        * date : 13/04/2020 */
            classe Circle(centre,radius)
    		radius : entier
    		centre: Point

    		Circle(centre,radius)
    		    affecter à centre : new Point();
    			affecter à radius : radius;

    		debut

    			fonction area()
    				aire : float
    				debut
    					affecter à aire:  Math.PI * (radius * radius)
    				fin

                // dire si  si le Point est dans le Circle, ou non
    			fonction containsPoint(p)
                    début
                        affecter à diffX = point.getX() - p.getX()
                        affecter à diffY = point.getY() - p.getY()
                        affecter à longueur = sqrt((diffX * diffX) + (diffY*diffY))
                
                        si longueur <= this.radius et longueur >= 0
                            retourner true
                        sinon
                            retourner false
                        fin si
                    fin
                
                // transformer l'objet en string
    			fonction transformerEnChaine()
    				debut
    				    // les coordonnées sous forme (x,y,radius)
    				    afficher "(" + x + "," + y + "," + radius ")"
    				fin
```

```
            // test de la classe Circle
             classe TestCircle
             /* instancation */
                affecter à  point1 : new Point(10 , 30)
	        	affecter à  circle1 : new Circle(point1 , 12)
	        
	        // Calcul de l'aire 
	        circle1.area()
            // voir si le point est dans le circle
            circle1.containsPoint(point1)
	        	
	        	
```






				
				
			

			
