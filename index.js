//var katzDeli=[];
var katzDeliline=[];
function takeANumber(katzDeliLine,newName) {
  katzDeliLine.push(newName)
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length===0) {
    return "The line is currently empty."
  } else {
    for (i=0;i<katzDeliLine.length;1++) {
      if (i===0) {
        sentence = `The line is currently: 1. ${katzDeliLine[i]}`
      } else {
        sentence = sentence + `, ${i+1} ${katzDeliLine[i]}`
      }
    }
  }
}
     
  
 