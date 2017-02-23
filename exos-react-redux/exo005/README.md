EXO 5
=====

But
-----

- Maitriser ref et componentDidMount
- Savoir intégrer des libraries JS classiques

Consignes
-----

Rajouter un component DatePicker qui affichera juste un datepicker.

Utiliser jQuery UI pour ça : http://jqueryui.com/datepicker/

Note : jQuery UI est installable via npm, et il faut install jquery avant également

    npm install --save jquery jquery-ui

Pour les utiliser, les imports sont un peu bizarres parce que jqueryUI n'est pas bien packagé en module :

    import $ from 'jquery';
    import 'jquery-ui/ui/widgets/datepicker';
    import 'jquery-ui/themes/base/core.css';
    import 'jquery-ui/themes/base/theme.css';
    import 'jquery-ui/themes/base/datepicker.css';

Usage 
    
    $( ...un element DOM... ).datepicker();