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

//Selecting an element which was referred inside of the original selector
$('div').click(function(event){ 
  $(this);
});

//Traversing
//First we need to make a selection where we will traverse relatively
$('div').not('.type, .collection');
//Selecting all 'div' elements that DON'T have a class of .type and .collection

//We can also chain together traversing
$('div').not('.type, .collection').parent();
//Here we select only the parent element of the elements that DON'T have 
//.type and .collection

//Getting and setting information
// Gets the value of the alt attribute
$('img').attr('alt');

// Sets the value of the alt attribute
$('img').attr('alt', 'Wild kangaroo');

//Attribute manipulation
$('li:even').addClass('even-item');//Used to add a class to all even items in a list
$('p').removeClass(); //Used to remove all classes from any paragraphs
$('abbr').attr('title', 'Hello World'); //Used to set all abbr attributes to Hello World
