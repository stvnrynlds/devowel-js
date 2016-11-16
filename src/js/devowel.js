'use strict';

// Devowel JS
// * Version: 0.0.0
// * Author: Steven Reynolds
// * URL: github.com/stvnrynlds/devowel-js

var VOWELS = ['A','E','I','O','U'];
var instances = document.querySelectorAll('.devowel');

instances.forEach(function(instance){

  var words = instance.innerText.split(' ');
  instance.innerText = '';

  words.forEach(function(word){

    var chars = word.split('');
    var wordEl = document.createElement('span');
    wordEl.className = 'word';

    chars.forEach(function(char){

      var charEl = document.createElement('span');
      var charUpper = char.toUpperCase();
      var isVowel = VOWELS.indexOf(charUpper) > -1;

      charEl.className = isVowel ? 'char vwl' : 'char';
      charEl.innerText = char;
      wordEl.appendChild(charEl)

    });

    instance.appendChild(wordEl);

  });

});
