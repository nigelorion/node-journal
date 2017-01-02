function Entry(text) {
  this.text = text;
}

Entry.prototype.wordCounter = function (text) {
  var space = text.trim();
  var words = space.split(' ');
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
  var tease8 = teasewords.slice(0,8).join(" ");
  if (teasewords.length <= 8) {
    return "Teaser is : " + teaser;
  } else {
    return "Teaser is too long " + tease8;
  }
};

exports.wordModule = Entry;
