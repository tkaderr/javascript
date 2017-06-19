function printarr(arr,check)
{
  if(check=="reversed")
  {
    for(var i=arr.length-1;i>=0;i--)
  {
    console.log(i+"->"+arr[i]);
  }
  }
  else{
  for(var k=0;k<arr.length;k++)
  {
    console.log(k+"->"+arr[k]);
  }
  }
}
