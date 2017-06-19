function onlynum(arr)
{
  var newarr=[];
  for(var i=0;i<arr.length;i++)
  {
    if(typeof arr[i]=="number")
    {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}





function onlynum(arr)
{
  var len=arr.length;
  for(var i=0;i<len;i++)
  {
    if(typeof arr[i]!=="number")
    {
      arr.splice(i,1);
      len--;
    }
  }
  return arr;
}
