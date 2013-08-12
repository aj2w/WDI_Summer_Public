if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}

var guitar = {
  name: "Fender Esquire",
  numberOfStrings: 6,
  volume: 5,
  setName: function(name) {
    this.name = name;
  },

  breakString: function() {
    this.numberOfStrings = this.numberOfStrings - 1;
  },

  restring: function() {
    this.numberOfStrings = 6;
    this.volume = 5;
  },

  playRock: function() {
    this.volume = 11;
    if (this.numberOfStrings < 1) {
      this.volume = 0;
    }
  },

  playBasicRhythm: function() {
    return 'jug jigga jug jigga jug';
  },

  playHighStrings: function() {
    return 'meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley meedley MEEEEEEEEEEEEEEEE. \'And the dragon comes in the NIIIiiiiIIIiiiiIIIIIIIIiiiiiiiiiiiIIIIIIIIiiiIIGGHH\'';
  },

};