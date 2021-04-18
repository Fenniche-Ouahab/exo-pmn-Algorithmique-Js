
# ✨Exercices 1  ✨

  
-  Écrire un programme demandant à l'utilisateur de saisir deux chaînes de caractères au clavier. Voir si la première est deux fois plus grande que la deuxième et afficher un message approprié.

```
        \* programme comparaison
        * but:  demander à l'utilisateur de saisir deux chaînes 
        * de caractères, puis les comparer et dire si la taille de la première 
        * est deux  fois plus grande que la taille de la deuxième
        * auteur : Ouahab FENNICHE
        * date : 13/04/2020 */
        
        	programme comparaison
        		premiereChaine : chaîne
        		deuxiemeChaine : chaîne
        		
        	debut
        		afficher "Entrez la première chaine : "
        		saisir premiereChaine
        		afficher "Entrez la deuxième chaine : "
        		saisir deuxiemeChaine
        
                // faire une comparaison
        		si taille(premiereChaine) >= (2 * taille(deuxiemeChaine)) alors
        			afficher "La taille de la  première chaine est deux 
        			fois plus grande que la deuxième"
        		sinon
        			afficher "La taille de la première chaine n'est pas deux 
        			fois plus grande que la première
        		finsi
        
             fin
```


  

	

  
  

# ✨Exercices 2✨

-  Ecrire un programme permettant de calculer la somme des nombres compris entre 1 et un entier demandé à l'utilisateur.
-  Exemple si l'utilisateur entre 10 : 1+2+3+4+5+6+7+8+9+10 --> 55

```
        \* programme sommeEntier
        * but:  demander à l'utilisateur de saisir un entier, 
        * ensuite calculer la somme entre 1 et le nombre saisit
        * auteur : Ouahab FENNICHE
        * date : 13/04/2020 */
        
        	programme sommeEntier
        		nombreEntier: entier
				somme : entier
        		
        	debut
        	    tantque nombreEntier < 1
                    afficher "Entrez un entier : "
		            saisir nombreEntier
                fin tantque
        		
		        
		        affecter à somme = 0
		    	pour i   de 1 à nombreEntier
			        affecter à somme = somme + i
			    finpour

		    	afficher "La somme est de : " + somme
            
             fin
```

# ✨Exercices  3✨
-  Ecrire un programme qui demande à l'utilisateur de saisir 5 entiers stockés dans un tableau.
-  Le programme doit ensuite afficher l'indice du plus grand élément, puis la moyenne des entiers.

```
        \* programme indicePlusGrandElementTab
        * but:  demander à l'utilisateur de saisir 5 entiers, 
        * puis afficher l'indice du plus grand élément dans le tableau,
        * enfin, afficher la moyenne des entiers saisit
        * auteur : Ouahab FENNICHE
        * date : 13/04/2020 */
        
        	programme indicePlusGrandElementTab
        		elements[0..4] : entier
				unNombre: entier
				indice : entier
				plusGrand : entier
				moyenne : float
				total : entier
        		
        	debut
        	    tantque taille(elements) <= 5
			         afficher "Saisir un entier :"
                     saisir unNombre
        			     si unNombre n'est pas un entier
                            afficher "Il fait saisir un entier :"
                            saisir unNombre
                         finsi
                    elements[i] = unNombre
                    i++
                fin tantque
                // Initialisé le plus grand entier au premier élement du tableau
        		affecter à plusGrand : elements[0]
		        
		        affecter à total = 0
		        affecter à indice = 0
		    	pour i de 0 à taille(elements)
				    affecter à total : total + elements[i]
				    si elements[i] > plusGrand alors
					    affecter à plusGrand : elements[i]
					    affecter à indice = i
				    finsi
			    finpour
			    retourner indice
			    afficher "l'indice du plus grand élement est : " + (indice)
			    
			    // calculer la moyenne
			    affecter à moyenne = total/5
				Afficher "La moyenne des élements est = " + (moyenne)
            
             fin
```