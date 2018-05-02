var  mostProfitable = function(Departmentlist){
var DeptName = "";
var Total = 0;

  for (var i=0;i< Departmentlist.length;i++){
  var currentDept = Departmentlist[i];
    if (Total <= Departmentlist[i].total){
      Total = Departmentlist[i].total;
      DeptName = currentDept.name;
  }

}return  DeptName;
  console.log(DeptName);
}
