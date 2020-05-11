const testVar = {}

function superbowlWin(arr) {
  let w = arr.find( r => r.result === "W" )
	  if (w === undefined)
      return undefined
    else
      return w.year
}
