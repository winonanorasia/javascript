// 1. buatkan contoh reference variable
// tipe data referensi
// jika referensi diubah, maka larik akan berubah
let larik = ["Mawar", "Melati", "Anggrek", "Kamboja"] // array
let referensi = larik
referensi.splice(0, 1) // Mawar dihilangkan
console.log(larik) // Data Mawar di larik ikut hilang

let arr1 = [1,4,5]
let arr2 = arr1
arr2.push(3) //dimasukkan 
console.log(arr1)
console.log(arr2)

// 2. buatkan contoh destructive 4
const number = ['one', 'two', 'three'];
const [red, green, blue] = number;
console.log(red);
console.log(green);
console.log(blue);

// 3. reverse array [1, 3, 4, 7, 2, 9]
let arrs = [1, 3, 4, 7, 2, 9]
//927431
let l = 0
let n = arrs.length - 1

while (l < n){
    let temp = arrs[l]
    arrs[l] = arrs[n]
    arrs[n] = temp

    l++
    n--
}
console.log(arrs)

// 4. buatkan pengecekan tipe data :
// [1, "Web", true, {name: "John"}, null] => [number, string, boolean, object, null]
let data = [1,"Web",true, {name: "Jhon"}, null];
let dataBaru = [];
for (let item of data){
    dataBaru.push(typeof(item));
}
console.log(dataBaru)
//console.log(typeof null)

// 5 buatkan pattern
// *
// **
// ***
// ****
// *****
for (let i = 0; i < 5; i++) {
    let result = ''
    for (let j =0 ; j <= i; j++) {
        result += '*'
    }
    console.log(result);
}
