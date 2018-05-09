describe('calculate widget', function(){

    it('should calculate total cost of phone calls made', function(){
        assert.equal( calculateBtnClicked ('call,call'), 5.5);
    });

    it('should calculate total cost of smses sent', function(){
        assert.equal( calculateBtnClicked ('sms,sms'), 1.5);
    });


        it('should calculate total cost of smses sent and call made', function(){
            assert.equal( calculateBtnClicked ("sms,sms,call,call"), 7);
        });

});
