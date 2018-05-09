describe('Textbill widget', function(){
    it('should calculate total cost of phone calls made', function(){
      var factory = Textbillfactory();

      factory.bill_type('call');
      factory.bill_type('call');


      assert.equal(factory.tTotal(), 5.50);

});
it('should calculate total cost of smses sent', function(){
  var factory = Textbillfactory();

  factory.bill_type('sms');
factory.bill_type('sms');
  assert.equal(factory.tTotal(), 1.5);

});

it('should calculate total cost of smses sent and calls made', function(){
  var factory = Textbillfactory();

  factory.bill_type('sms');
factory.bill_type('sms');
factory.bill_type('sms');
factory.bill_type('call');
factory.bill_type('call');
  assert.equal(factory.tTotal(), 7.75);

});

});
