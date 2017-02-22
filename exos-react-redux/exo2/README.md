EXO 2
=====

But
-----

- JSX

Consignes
-----

Editez App.js pour afficher le HTML suivant :

    <div class="myDiv">
        <h1 class="hello">Hello Max!</h1>
        <ul>
            <li>George</li>
            <li>Suzie</li>
            <li>Fred</li>   
        </ul>
        <button>Click me!</button>
    </div>


Puis créer un objet JS au dessus du JSX contenant les paramètres suivants :

    const params = {
        shouldDisplayTitle : true,
        titleClass : "hello",
        name : "Max",
        namesList : ["George", "Suzie", "Fred"],
        onButtonClick : () => {
            console.log("Button clicked !");
        }
    }
    
Puis dynamiser le JSX pour utiliser tous ces paramètres aux endroits appropriés. Vérifiez qu'en les changeant le HTML produit change bien comme attendu.




