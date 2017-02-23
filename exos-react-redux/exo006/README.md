EXO 6
=====

But
-----

- Maitriser React
- Construire une UI complète qu'on branchera sur Redux ensuite

Consignes
-----

Implémenter une hiérarchie complète de components, de manière à produire une interface simplifiée d'un "Trello-like".
 
Le component racine devra s'appeler TrelloBoard, et devra pouvoir être utilisé avec les props suivantes :


    const boardProps = {
      name : "My board",
      columns : [{
        id : 1,
        name : "Later",
        tasks : [{
          id: 1,
          text : "Buy plane tickets"
        },
        {
          id: 2,
          text : "Call mom"
        }]
      }, {
        id : 2,
        name : "Today",
        tasks : [{
          id: 3,
          text : "Send email to Lucy"
        },
        {
          id: 4,
          text : "Buy groceries"
        },
        {
          id: 5,
          text : "Go to the gym"
        }]
      }],
      onDeleteTask : (id) => {
        console.log(`Deleting task ${id}`);
      },
      onDeleteColumn : (id) => {
        console.log(`Deleting column ${id}`);
      },
      onTaskAdd : (text, columnId) => {
        console.log(`Adding a task in column ${columnId} : ${text}`);
      },
      onColumnAdd : (name) => {
        console.log(`Adding a column : ${name}`);
      }
    };
    return <TrelloBoard {...boardProps}/>;
    
    
Vous êtes libre d'organiser les sous-components comme vous le voulez.

Le HTML produit doit suivre la structure jointe (screenshot).

Attention un détail qui n'est pas visible dans le screenshot : quand on click sur le bouton "Add" en bas d'une colonne, le HTML du bouton devra être remplacé par le HTML suivant :
    
    <form>
      <input type="text" placeholder="Add a task"/>
    </form>


Pour le CSS, copiez-coller le CSS suivant :


    /* http://meyerweb.com/eric/tools/css/reset/
       v2.0 | 20110126
       License: none (public domain)
    */
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    
    * {
      box-sizing: border-box;
      font-family: Verdana, sans-serif !important;
      cursor:default;
    }
    
    .board {
      display:flex;
      flex-flow:column;
    }
    .board > h1 {
      background: #7a98a2;
      padding: 10px 5px;
      font-size : 2em;
      color: white;
      font-weight:bold;
      text-transform: uppercase;
    }
    .board .columns {
      padding: 10px;
      display:flex;
    }
    
    .column {
      align-self: flex-start;
      border-radius: 5px;
      margin: 10px;
      padding-bottom: 10px;
      background: lightblue;
      width: 200px;
      position:relative;
      box-shadow: 3px 10px 29px -5px rgba(0,0,0,0.25);
    }
    
    .column > .delete {
      position:absolute;
      top:1px;
      right:4px;
      color:#aaa;
      cursor: pointer;
      font-size: 0.8em;
      display:none;
      font-weight:bold;
    }
    .column:hover > .delete {
      display:block;
    }
    .column > h1 {
      font-weight: bold;
      text-align: center;
      margin: 10px;
    }
    
    .column-add {
      align-self: flex-start;
      border-radius: 5px;
      margin: 0 10px 10px;
      width: 200px;
      padding:10px;
    }
    .column-add input {
      width:100%;
      border-radius: 10px;
      border: 4px solid lightblue;
      padding: 10px;
      outline : none;
      font-size: 1em;
      font-style: italic;
      cursor:text;
    }
    
    
    
    .task {
      border-radius: 10px;
      padding: 10px;
      margin:10px;
      background : white;
      position:relative;
    }
    
    .task > .delete {
      position:absolute;
      top:1px;
      right:4px;
      color:#ccc;
      cursor: pointer;
      font-size: 0.8em;
      display:none;
      font-weight:bold;
    }
    .task:hover .delete {
      display: block;
    }
    
    
    .task-add {
      margin: 60px 10px 10px;
      display:flex;
      flex-flow:column;
    }
    .task-add input {
      border-radius: 10px;
      padding: 10px;
      outline : none;
      border : 0;
      font-size: 1em;
      width:100%;
      font-style: italic;
      cursor:text;
    }
    
    .task-add button {
      margin-top: 10px;
      border-radius: 10px;
      font-size: 1em;
      cursor:pointer;
      text-transform: uppercase;
      background: cornflowerblue;
      color:white;
      outline:0;
      border:0;
    }
    
    
    



    
