// BT1
// let arr = [1, 2, 3, 4, 6, 2];
// let b = 2;
//
// function deleteNumb(arr, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
//     return arr;
// }
// let newa = deleteNumb(arr, b);
// console.log(newa);
// BT2
// let a = +prompt("Nhap diem Toan: ")
// let b = +prompt("Nhap diem TA: ")
// let c = +prompt("Nhap diem Van: ")
// function diemtrungbinh(){
//     result = (a + b + c)/3
//     if( result >= 8){
//         console.log("Tốt")
//     }
//     if( result >= 5 && result < 8){
//         console.log("Trung bình")
//     }
//     if( result < 5)
//         console.log("Không đạt")
//
// }
// diemtrungbinh();
// BT3
// class Customer {
//     constructor(name, age, point) {
//         this.name = name;
//         this.age = age;
//         this.point = point;
//     }
//
//     calculateDiscount() {
//         if (this.point > 100) {
//             return 0.05;
//         } else {
//             return 0;
//         }
//     }
// }
// let customer1 = new Customer("Thong", 25, 120);
// let customer2 = new Customer("Phong", 30, 90);
// let discount1 = customer1.calculateDiscount();
// let discount2 = customer2.calculateDiscount();
// console.log(`Khuyến mại cho ${customer1.name}: ${discount1 * 100}%`);
// console.log(`Khuyến mại cho ${customer2.name}: ${discount2 * 100}%`);
//BT4
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     calP() {
//         return 2 * (this.width + this.height);
//     }
//     calS() {
//         return this.width * this.height;
//     }
//     draw() {
//         let canvas = document.getElementById("myCanvas");
//         let ctx = canvas.getContext("2d");
//         ctx.fillStyle = "red";
//         ctx.fillRect(10,10,this.width, this.height);
//     }
// }
//
// let width = 1000;
// let height = 1000;
// let rectangle = new Rectangle(1000,2000);
//
// console.log("Chu vi của hình chữ nhật là:", rectangle.calP());
// console.log("Diện tích của hình chữ nhật là:", rectangle.calS());
// rectangle.draw();

//BT5
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function numb(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            count++;
        }
    }
    return count;
}
const numbers = [2, 5, 7, 8, 11, 13, 17, 20];
console.log("Mảng có", numb(numbers), "số nguyên tố.");
