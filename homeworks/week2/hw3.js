// 「印出」反轉之後的樣子
function reverse(str) {
    var result = ""
    for(var i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    console.log(result)
}

// reverse('hello');
// reverse('yoyoyo')
// // 正確輸出：oyoyoy
// reverse('1abc2')
// // 正確輸出：2cba1
// reverse('1,2,3,2,1')
// // 正確輸出：1,2,3,2,1