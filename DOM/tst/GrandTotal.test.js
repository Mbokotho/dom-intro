describe('grandTotal', function(){

   DepartmentList = [{"name":"Butchery","total":6001},{"name":"Bakery","total":7801},{"name":"Fresh fruits","total":4519}];
    it('should take a list of departments objects and return the total sales for all departments', function(){
        assert.equal( grandTotal (DepartmentList), 18321);
    });




});
