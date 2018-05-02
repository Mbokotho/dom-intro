describe('mostProfitable2', function(){

  var Departmentlist = [
{
   name : "Bakery",
   total : 7801,
   day : "Monday"
},{
   name : "Butchery",
   total : 4426,
   day : "Wednesday"
},{
   name : "Bakery",
   total : 9976,
   day : "Tuesday"
},{
   name : "Pharmacy",
   total : 5648,
   day : "Friday"
}];


    it('should take a list of departments objects and return the name of the department with most sales', function(){
        assert.equal( mostProfitable(Departmentlist),'Bakery' );
    });




});
