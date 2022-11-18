// let a = prompt("Son kiriting 1-soni kiriting")
// let b = prompt("Son kiriting 2-soni kiriting")

// if(a > b){
//     alert(`a harfi katta b dan ${a > b}`)
// }else if(a == b){
//     alert(`Bu ikkala son teng ${a == b}`)
// }else if(a < b){
//     alert(`b harfi katta a dan ${a < b}`)
// }else{
//     alert("Notogri")
// }

// let c = prompt("Son kiriting 1-soni kiriting")
// let d = prompt("Son kiriting 2-soni kiriting")

// if(c * d){
//     alert(`${c * d}`)
// }

// vazifa-1
let name = prompt("Ismingizni kiriting")
let age = prompt(`${name} aka yoshingizni kiriting`)

if(age >= 18){
    alert(`${name} aka tabriklaymiz siz prava oldingiz :)`)
}else{
    let result = 18 - age
    alert(`${name} aka sizga hali ${result} yil bor :(`)
}
// vazifa-2
let a = prompt("Istagan soningizni kiriting")
let b = prompt("Istagan ikkinchi soningizni kiriting")
let c = prompt("Istagan uchinchi soningizni kiriting")

if(a > b && a > c){
    alert(`${a} A harfi hammasidan kotta`)
}else if(a > b && b < c){
    alert(`${b} B harfi hammasidan kotta`)
}else if(a > c && b > c){
    alert(`${c} C harfi hammasidan katta`)
}else if(a == b && b == c){
    alert(`${a}  ${b}  ${c}  Siz kiritgan barcha sonlar teng`)
}else{
    alert("Siz kiritgan son yoki belgi serverda mavjud emas :(")
}