describe('settings widget', function(){
    it('should calculate total cost of phone calls made baased on price given', function(){

      
      var Faactory =Settingsfactory();

      var callCost = Faactory.Callprice(2.75);


      Faactory.Bill_Type('call');



      assert.equal(Faactory.TTTotal(), 2.75);

});
it('should calculate total cost of smses sent based on price given', function(){
  var Faactory =Settingsfactory();

  var smsCost = Faactory. Smsprice(0.75);

  Faactory.Bill_Type('sms');



  assert.equal(Faactory.TTTotal(), 0.75);

});

});
