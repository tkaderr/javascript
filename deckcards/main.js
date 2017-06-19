function Deck(){
  this.cardDeck = [];
}

Deck.prototype.createDeck = function () {
  var number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suite = ["Spade", "Club", "Diamond", "Heart"];
  for(var i = 0; i<suite.length; i++){
    for(var j = 0; j<number.length; j++){
      var card = new Card(suite[i], number[j]);
      this.cardDeck.push(new Card(suite[i],number[j]));
    }
  }
  return this;
}

Deck.prototype.shuffle = function () {
  for(var i = 0; i<25; i++){
    var rand = Math.floor(Math.random() * 51)+1;
    var temp = this.cardDeck[i];
    this.cardDeck[i]= this.cardDeck[rand];
    this.cardDeck[rand] = temp;
  }
  return this;
}

Deck.prototype.Deal = function() {
  return this.cardDeck.pop();
}

Deck.prototype.Reset = function () {
  var deck = new Deck();
  deck.createDeck();
  return deck;
};


function Card(suite, number) {
  this.number = number;
  this.suite = suite;
}

function Player(name){
this.name = name;
this.hand = [];
}


Player.prototype.draw = function (deck) {
  this.hand.push(deck.Deal());
  return this;
}

Player.prototype.discard = function () {
  return this.hand.pop();
};


var deck = new Deck();
deck.createDeck();
console.log(deck.Deal());
deck.shuffle();
var bob = new Player("Bob");
console.log(bob.name);
console.log(bob.draw(deck).hand);
console.log(bob.discard());
console.log(deck.cardDeck.length);
var newdeck = deck.Reset();
console.log(newdeck.cardDeck.length);
