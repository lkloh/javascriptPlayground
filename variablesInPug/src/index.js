
import _ from 'lodash';
//const pug = require('pug');

// function getTemplateStr() {
// 	const compiledFunction = pug.compileFile('template.pug');
// 	return compiledFunction();
// }

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello';
  return element;
}



document.body.appendChild(component());

