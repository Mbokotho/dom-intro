describe('calculate widget', function(){

    it('should calculate total cost of phone calls made', function(){
        assert.equal( calculateBtnClicked ('call'), 2.75);
    });

    it('should calculate total cost of smses sent', function(){
        assert.equal( calculateBtnClicked ('sms,sms'), 1.5);
    });


});
