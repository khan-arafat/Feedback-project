const rating=[];
function getValue(param){
    document.getElementById(param).style.backgroundColor="chocolate";
    let val= param;
    rating.push(val);
    let n= rating.length;
    if(n>0){
      document.getElementById(`${rating[n-2]}`).style.backgroundColor="#bbb";
    }
}
function submitnow(){
  if(rating.length==0){
    return;
  }
  document.getElementById('inner-container').style.display="none";
  document.getElementById('inner').textContent=`You have given ${rating.pop()} out of 5`;
}
