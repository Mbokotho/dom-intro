
describe('Settings widget', function(){
    it('should calculate total cost of phone calls made', function(){
      var ffaactory = Settingsfactory();


         ffaactory.Callprice(2);
      ffaactory.Bill_Type('call');
        ffaactory.Bill_Type('call');
          ffaactory.Bill_Type('call');
            ffaactory.Bill_Type('call');

        assert.equal(ffaactory.TTTotal(), 8);

});

it('should calculate total cost of smses sent', function(){
  var ffaactory =  Settingsfactory()

   ffaactory.Smsprice(0.75);
ffaactory.Bill_Type('sms');
ffaactory.Bill_Type('sms');

  assert.equal(ffaactory.TTTotal(),1.5);
});

it('should calculate total cost of smses sent and calls made', function(){
  var ffaactory =  Settingsfactory()

   ffaactory.Smsprice(0.75);
ffaactory.Bill_Type('sms');
ffaactory.Bill_Type('sms');
ffaactory.Callprice(2);
ffaactory.Bill_Type('call');
ffaactory.Bill_Type('call');
 ffaactory.Bill_Type('call');
   ffaactory.Bill_Type('call');

  assert.equal(ffaactory.TTTotal(),9.5);
});

it('should return given amount that is charged for an sms', function(){
  var ffaactory =  Settingsfactory()

   ffaactory.Smsprice(0.75);
   ffaactory.Bill_Type('sms')



  assert.equal(ffaactory.Sms_Total(),0.75);
});

it('should return given amount that is charged for a call', function(){
  var ffaactory =  Settingsfactory()

   ffaactory.Callprice(2.75);
   ffaactory.Bill_Type('call')



  assert.equal(ffaactory.Call_Total(),2.75);
});





});
