function bdaycount(nums)
{
  var counter=nums;
  while(counter>=0)
    {
      if (counter>30)
        {
          console.log("Sad");
        }
      else if (counter<=30 && counter>5)
        {
          console.log("Happy");
        }
      else if (counter<=5 && counter>1)
        {
        console.log("Excited");
        }
      else
        {
        console.log("Bday");
        }
    counter=counter-1;
    }
}
