function superbowlWin(record){
  const result = record.find(r=>r.result === "W")
  if(result){
    return result.year
  }else{
    return result
  }
}