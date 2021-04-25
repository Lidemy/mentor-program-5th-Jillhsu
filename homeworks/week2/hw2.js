// 把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。
function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1, str.length)
}

// console.log(capitalize('hello'));
// console.log(capitalize('nick'))
// // 正確回傳值：Nick
// console.log(capitalize('Nick'))
// // 正確回傳值：Nick
// console.log(capitalize(',hello'))
// // 正確回傳值：,hello