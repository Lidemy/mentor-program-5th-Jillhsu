``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 2 行，設定變數 i 是 0，檢查 i 是否 < arr.length，是，繼續執行，開始進入第一圈迴圈
2. 執行第 3 行，判斷 arr[i] 是否小於等於 60，是的話回傳 'invalid' 且執行完畢
3. 第一圈迴圈結束，跑回第一行，i++，i 變成 1，檢查是否 < arr.length，是，繼續執行迴圈（回到第 2 行），否則跳出迴圈
4. 跳出迴圈後，執行第 5 行，設定變數 i 是 2，檢查 i 是否 < arr.length，是，繼續執行，開始進入第一圈迴圈
5. 執行第 7 行，判斷 arr[i] 是否不等於 arr[i-1] + arr[i-2]，是的話回傳 'invalid' 且執行完畢
6. 第一圈迴圈結束，跑回第一行，i++，i 變成 1，檢查是否 < arr.length，是，繼續執行迴圈（回到第 5 行），否則跳出迴圈
7. 回傳 'valid' 且執行完畢