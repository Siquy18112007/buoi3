let chieucao = prompt("Nhập username");
let cannang = prompt("Nhập password");
let bmi= cannang/(chieucao*chieucao);
bmi = Number(bmi);
if (bmi< 18.5) {
console.log ("Gầy");
}else {
    if (bmi >=25)
    console.log("Béo") 
else console.log ("Bình thường")
}