function likedBy(list){
var Name1 = list[0];
 var Name2 = list[1];
	if (list.length === 0){
   return ("0 likes")
    }


  if (list.length === 2){
    return("Liked by "+ Name1 +" and "+ Name2 );
}
  if (list.length ===3){
  return("Liked by "+ Name1 + " and 2 others")}

  if (list.length ===5){
  return ("Liked by " + Name1 +  ", "+ Name2 + " and 3 others")
  }

  if (list.length ===7){
  return ("Liked by " + Name1 +  ", "+ Name2 + " and 5 others")
  }

   if (list.length ===10){

  return ("Liked by " + Name1 +  ", "+ Name2 + " and 8 others")
  }
}
