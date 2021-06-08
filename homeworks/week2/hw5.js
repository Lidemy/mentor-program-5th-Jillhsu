// join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。
function join(arr, concatStr) {
    var result = ""
    for(var i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            result += arr[i]
        } else {
            result += arr[i] + concatStr
        }
    }
    return result
}
// repeat 的話就是回傳重複 n 次之後的字串。
function repeat(str, times) {
    var result = ""
    for(var i = 0; i < times; i++) {
        result += str
    }
    return result
}

// console.log(join(['a'], '!'));
// console.log(repeat('a', 5));

// console.log(repeat('a', 5)) // 正確回傳值：aaaaa
// console.log(repeat('yoyo', 2)) // 正確回傳值：yoyoyoyo


console.log(join([1, 2, 3], ''))
// //，正確回傳值：123
console.log(join(["a", "b", "c"], "!"))
// //，正確回傳值：a!b!c
console.log(join(["a", 1, "b", 2, "c", 3], ','))
// //，正確回傳值：a,1,b,2,c,3