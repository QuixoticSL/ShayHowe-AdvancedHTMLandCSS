$(); //Selecting an object to perform actions on it in jQ

$(document).ready(function(event){ //This is used to wait for the DOM to load before triggering jQ
  // jQuery code 
});

//Selectors in jQ
$('.feature');           // Class selector
$('li strong');          // Descendant selector
$('em, i');              // Multiple selector
$('a[target="_blank"]'); // Attribute selector
$('p:nth-child(2)');     // Pseudo-class selector