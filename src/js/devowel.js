'use strict';

// Devowel JS
// * Version: 0.0.0
// * Author: Steven Reynolds
// * URL: github.com/stvnrynlds/devowel-js

var VOWELS = ['A','E','I','O','U'];
var devowel = document.querySelector('.devowel');
var words = devowel.innerText.split(" ");
devowel.innerText = "";

_.each(words, function(word){

  var chars = word.split("");
  var wordTag = document.createElement('span');
  wordTag.className = 'word';

  _.each(chars, function(char){

    var charTag = document.createElement('span');
    charTag.className = 'char';

    if (_.contains(VOWELS, char.toUpperCase())) {
      charTag.className += ' vwl';
    }

    charTag.innerText = char;
    wordTag.appendChild(charTag)
  });

  devowel.appendChild(wordTag);
});
