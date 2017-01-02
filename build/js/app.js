(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(text) {
  this.text = text;
}

Entry.prototype.wordCounter = function (text) {
  var space = text.trim();
  var words = space.split(' ');
  console.log(words);
  return "Words : " + words.length;
};

Entry.prototype.Vowel = function (text) {
  var vowels = text.match(/[aeiou]/gi);

  return "Vowels : " + vowels.length;

};

Entry.prototype.Consonant = function (text) {
  var consonants = text.match(/[qwrtyplkjhgfdszxcvbnm]/gi);

  return "Consonants : " + consonants.length;

};

Entry.prototype.getTeaser = function (text) {
  var space = text.trim();
  var tease = space.split(".");
  var teaser = tease[0];
  var teasewords = teaser.split(' ');
  // console.log(teaser);
  // console.log(teasewords);
  var tease8 = teasewords.slice(0,8).join(" ");
  if (teasewords.length <= 8) {
    return "Teaser is : " + teaser;
  } else {
    return "Teaser is too long " + tease8;
  }
};



exports.wordModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/script.js":1}]},{},[2]);
