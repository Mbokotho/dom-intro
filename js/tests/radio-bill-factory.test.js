
describe('Radiobill widget', function(){
    it('should calculate total cost of phone calls made', function(){
      var Factory = Radiobillfactory();

      Factory.bill_Type('call');

      assert.equal(Factory.TTotal(), 2.75);

});
it('should calculate total cost of smses sent', function(){
  var Factory = Radiobillfactory();

  Factory.bill_Type('sms');

  assert.equal(Factory.TTotal(), 0.75);

});

});
