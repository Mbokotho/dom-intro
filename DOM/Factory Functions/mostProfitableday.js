function mostProfitableDay(Departmentlist){
 //console.log(Departmentlist);
var DeptName = "";
var Total = 0;

  for (var i=0;i< Departmentlist.length;i++){
  var currentDept = Departmentlist[i];
    if (Total <= Departmentlist[i].total){
      Total = Departmentlist[i].total;
      DeptName = currentDept.day;
  }
// console.log(DeptName);
}return  DeptName;
  console.log(DeptName);
}
