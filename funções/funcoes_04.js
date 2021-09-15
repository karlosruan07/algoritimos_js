
function fatorial(x) {
    let fat = 1
    for (let cont = x; cont > 1; cont--) {
        fat *= cont
    }
    return console.log(fat)
}

fatorial(5)
