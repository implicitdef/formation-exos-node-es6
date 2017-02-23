EXO 8
=====

But
-----

- Ecrire du redux asynchrone, et se brancher sur une API externe

Consignes
-----

Installer json-server : https://github.com/typicode/json-server

    npm install -g json-server
    
Créer un fichier db.json avec ces données :
    
    {
      "columns": [
        { "id": 1, "name": "Tomorrow"},
        { "id": 2, "name": "Today"}
      ],
      "tasks": [
        { "id": 1, "columnId": 1, "text": "Buy plane tickets" },
        { "id": 2, "columnId": 1, "text": "Call mom" },
        { "id": 3, "columnId": 2, "text": "Send email to Lucy" },
        { "id": 4, "columnId": 2, "text": "Buy groceries" },
        { "id": 5, "columnId": 2, "text": "Go to the gym" }
      ]
    }

    
Démarrer le server sur le port 4000:


    json-server --watch db.json --port 4000


Les endpoints qui nous intéresseront :

    GET http://localhost:4000/columns/?_embed=tasks
    DELETE http://localhost:4000/columns/[id]
    DELETE http://localhost:4000/tasks/[id]
    POST http://localhost:4000/columns/
        request body : {
            name : [xxx]
        }
    POST http://localhost:4000/tasks/
        request body : {
            columnId : [x],
            text : [xxx]
        }

Se brancher sur ces endpoints avec une librarie HTTP, par exemple axios https://github.com/mzabriskie/axios

Integrér redux-thunk à votre appli Redux et revoir tout votre code Redux pour se brancher sur cette API.

