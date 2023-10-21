let x;
let sum_x = Number();
for (i = 2; i <= 100; i++) {
    x = Math.floor((i + 1)**2.6);
    sum_x += x;
}
console.log(sum_x);

let y;
let fix;
let sum_y = Number();
for (i = 1; i <= 50; i++) {
    y = Math.floor((i + 1)**3.05);
    fix = y.toFixed()
    sum_y += y;
}
console.log(sum_y);

let z;
let sum_z = Number();
for (i= 2; i <=50; i++) {
    z = (i + 1)**3;
    sum_z += z;
}
console.log(sum_z);
