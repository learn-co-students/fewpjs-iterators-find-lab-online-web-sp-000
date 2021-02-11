function superbowlWin(record){
  let year = record.find(element => element.result === "W")
  if (year != undefined)
    {return year.year} else{
      return undefined
    }

}
