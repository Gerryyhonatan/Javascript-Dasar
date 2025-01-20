// let kubusA = 8
// let kubusB = 3

// function volumeKubusA() {
//     volume = kubusA * kubusA * kubusA
//     return volume
// }

// function volumeKubusB() {
//     volume = kubusB * kubusB * kubusB
//     return volume
// }

// console.log(volumeKubusA() + volumeKubusB())



function volumeKubusTotal(a,b) {
    let total, volumeA, volumeB

    volumeA = a*a*a
    volumeB = b*b*b
    total = volumeA + volumeB
    return total
}

console.log(volumeKubusTotal(8,3))