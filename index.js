const superbowlWin = (recordArray) => {
    let win = recordArray.find(record => record.result === "W")
    if (win) {
        return win.year
    }    
}