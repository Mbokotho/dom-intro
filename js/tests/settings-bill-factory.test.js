
describe('Settings widget', function(){
    it('should calculate total cost of phone calls made', function(){
      var Faactory = Settingsfactory();

  var call_cost =  Faactory.Callprice(2.75);


      Faactory.Call_Total(call_cost)


      Faactory.Bill_Type('call');
        Faactory.Bill_Type('call');
        Faactory.Bill_Type('call');

      assert.equal(Faactory.TTTotal(), 8.25);

});

it('should calculate total cost of smses sent', function(){
  var Faactory =  Settingsfactory();
var sms_cost = Faactory.Smsprice(1);
Faactory. Sms_Total(sms_cost);

Faactory.Bill_Type('sms');
Faactory.Bill_Type('sms');

  assert.equal(Faactory.TTTotal(), 2);

});




});
