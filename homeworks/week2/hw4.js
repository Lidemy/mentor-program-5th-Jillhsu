// 寫出一個函式來「印出」所有的因數
function printFactor(n) {
    for(var i = 0; i <= n / 2; i++) {
        if(n % i === 0) {
            console.log(i)
        }
    }
    console.log(n)
}

// printFactor(10);
// printFactor(7)