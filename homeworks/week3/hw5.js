const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', (line) => {
  lines.push(line)
})

// 輸入結束，開始針對 lines 做處理
rl.on('close', () => {
  solve(lines)
})
// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  const m = Number(lines[0])
  for (let i = 1; i < m + 1; i++) {
    judge(lines[i])
  }
}

// 每一行會有三個用空白分隔的數字 A, B, K
// A 代表 A 選擇的數字，B 代表 B 選擇的數字，兩者皆保證為正整數
// 要特別注意的是 A 與 B 可能是很大的數字，但保證長度為 512 個位數以內
// K 只會有兩種情況：1 或是 -1，若是 1 代表數字大的獲勝，K 若是 -1 代表數字小的獲勝
function judge(input) {
  const inputArr = input.split(' ')
  const a = BigInt(inputArr[0])
  const b = BigInt(inputArr[1])
  const k = Number(inputArr[2])
  if (a === b) {
    console.log('DRAW')
    return
  }

  if (k === 1) {
    if (a > b) {
      console.log('A')
    } else {
      console.log('B')
    }
  } else {
    if (a > b) {
      console.log('B')
    } else {
      console.log('A')
    }
  }
}
