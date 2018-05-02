var mostProfitableDepartment = function(DeptList){

  var departmentMap = {};
  var departmentName = ' ';
  var Total = 0;
  for(var i=0; i< DeptList.length; i++){
    var currentMap = DeptList[i];

    if(departmentMap[currentMap.name] === undefined){
      departmentMap[currentMap.name] = 0;
    }

      departmentMap[currentMap.name] += currentMap.total;
    }




for(var  name in departmentMap){
    if(departmentMap[name] > Total){
      Total = departmentMap[name];
      departmentName = name;

      console.log(departmentName);
    }
  }
  return departmentName;
}
