describe('mostProfitable', function(){

   Departmentlist = [{"name":"Butchery","total":6001},{"name":"Bakery","total":7801},{"name":"Fresh fruits","total":4519}];


    it('should take a list of departments objects and return the name of the department with most sales', function(){
        assert.equal( mostProfitable(Departmentlist),'Bakery' );
    });




});
