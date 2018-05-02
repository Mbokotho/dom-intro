var grandTotal = function(DepartmentList){
  //console.log(DepartmentList);
var totalSales = 0;

for( var i = 0; i < DepartmentList.length; i++){
 var ListItem =  DepartmentList[i];
console.log(DepartmentList[i]);
  totalSales  += DepartmentList[i].total;
}return totalSales;
  console.log(totalSales);
}
