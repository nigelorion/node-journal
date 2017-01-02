var Entry = require('./../js/script.js').wordModule;

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var counter = new Entry();
    var userInput = $("#texthere").val();
    var count = counter.wordCounter(userInput);
    console.log(count);
    var vowels = counter.Vowel(userInput);
    console.log(vowels);
    var consonants = counter.Consonant(userInput);
    console.log(consonants);
    var teaser = counter.getTeaser(userInput);
    console.log(teaser);
  });
});
