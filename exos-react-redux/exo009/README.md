EXO 8
=====

But
-----

- Intégrer du routing avec react-router
- créer des liens
- afficher du contenu différent sur certaines URLs
- chargement des données correspondant à l'URL
- rediriger

Consignes
------ 

Partir du dossier "base".

C'est le même code que la dernière fois, mais un component ConnectedUserBlock a été ajouté, avec le code redux qui correspond et les données correspondantes dans db.json.

Le ConnectedUserBlock a été mis à côté du Board, en vrac, mais le but c'est de la placer sur une route dédiée.

Le comportement attendu est le suivant :


- / doit afficher le board, comme avant
- Brancher les liens "Link vers user 1", etc.
- /user/[x] doit afficher le ConnectedUserBlock avec le user [x]
- /user/[x] doit rediriger vers / si le user [x] n'existe pas

Implémentez tout cela en utilisant la lib react-router


Rappel commande pour démarrer le serveur :

    json-server --watch db.json --port 4000


Nouvelle db.json de départ :

    {
      "columns": [
        {
          "id": 1,
          "name": "Tomorrow"
        },
        {
          "id": 2,
          "name": "Today"
        }
      ],
      "tasks": [
        {
          "id": 1,
          "columnId": 1,
          "text": "Buy plane tickets"
        },
        {
          "id": 2,
          "columnId": 1,
          "text": "Call mom"
        },
        {
          "id": 3,
          "columnId": 2,
          "text": "Send email to Lucy"
        },
        {
          "id": 4,
          "columnId": 2,
          "text": "Buy groceries"
        },
        {
          "id": 5,
          "columnId": 2,
          "text": "Go to the gym"
        }
      ],
      "users" : [
        {
          "id" : 1,
          "name" : "Michael",
          "image" : "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Ffullhdpictures.com%2Fwp-content%2Fuploads%2F2015%2F12%2FMichael-Jackson-150x150.jpg&f=1"
        },
        {
          "id" : 2,
          "name" : "Kanye",
          "image" : "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.celebuzz.com%2Fuploads%2F2015%2F01%2F23%2Fkanye-west-smile-frown-150x150.gif&f=1"
        }
      ]
    }


