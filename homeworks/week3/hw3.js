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
  const n = Number(lines[0])
  for (let i = 1; i < n + 1; i++) {
    // numArr.push(Number(lines[i]))
    if (isPrimeNumber(Number(lines[i]))) {
      console.log('Prime')
    } else {
      console.log('Composite')
    }
  }
}

function isPrimeNumber(n) {
  if (n % 2 === 0) {
    return n === 2
  } else if (n > 2) {
    for (let i = 3; i < n; i += 2) {
      if (n % i === 0) {
        return false
      }
    }

    return true
  } else {
    return false
  }
}
