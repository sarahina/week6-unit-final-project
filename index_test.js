let expect = chai.expect;

// Testing line 111 method 
describe('War Game', function () {
  describe('#newDeck', function () {
    it('should have 52 cards', function () {
      let game = new Game()
      game.newDeck()
      let cards = game.cards;
      expect(cards).to.be.an('array');
      expect(cards.length).to.equal(52);
    });
  });

  // Testing line 130 method
  describe('#shuffle', function () {
    it('are these cards shuffled?', function () {
      let game = new Game()
      game.newDeck()
      game.shuffle()
      let cards = game.cards;
      expect(cards).to.be.a('array');
      expect(cards.length).to.equal(52);
    });
  });
});
