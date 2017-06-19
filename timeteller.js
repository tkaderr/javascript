function telltime(Hour,Minute,Period){

  var first;
  var sec;
  var last;

  if(Minute<=30){
    first="just after";
    sec=Hour;
  }
  if(Minute>30){
    sec=Hour+1;
    first= "almost";
  }

  if(Hour==12 && Minute>30){
    sec=1;
  }

  if(Hour==11 && Minute>30 && Period=="PM"){

    last="in the morning";
  }
  else if(Hour==11 && Minute>30 && Period=="AM"){

    last="in the afternoon";
  }
  else if(Period=="AM")
    {
      last="in the morning";
    }
  else{
    last="in the afternoon";
  }

  console.log("It is "+first+ " "+sec+" "+last);
}
