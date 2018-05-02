describe('mostProfitableday', function(){

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


    it('should take a list of departments objects and return the day that the most prifit was made', function(){
        assert.equal( mostProfitable(Departmentlist),'Bakery' );
    });




});
