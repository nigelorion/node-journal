function Entry(text) {
  this.text = text;
}

Entry.prototype.wordCounter = function (text) {
  var words = text.split(' ');
  return words;
};

exports.wordModule = Entry;
