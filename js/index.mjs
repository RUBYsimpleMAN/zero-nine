import { arrOfDigits } from'../data/data.mjs'

function ansiiArray (stringteger) {
  const stringSplittedToArr = `${stringteger}`.split('')  // console.log(stringSplittedToArr)
  const stringtegerLength = stringSplittedToArr.length    // console.log(stringtegerLength)
  const trinityArr = stringSplittedToArr.map( (element) => arrOfDigits[element])
                                                          // console.log(trinityArr)
  const numberHeight = new Array(8).fill('');             // console.log(numberHeight)
  const trinityRetyrnedArr = []
  for (let i=0; i<numberHeight.length; i++) {
    for (let n=0; n<trinityArr.length; n++) {
      trinityRetyrnedArr.push(trinityArr[n][i]);          // console.log(trinityRetyrnedArr)
    }
    trinityRetyrnedArr.push('\n');
  }
  const concatedString = trinityRetyrnedArr.flat().join('');
  console.log(concatedString);
}

ansiiArray('012')
ansiiArray(204)
ansiiArray(305)
ansiiArray(57)
ansiiArray('64')
ansiiArray(38)
ansiiArray(6)
ansiiArray(7)
ansiiArray(8)
