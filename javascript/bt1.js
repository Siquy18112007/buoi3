let giasanpham = prompt ("Giá sản phẩm"), soluong = prompt ("Số lượng");
let tong = giasanpham*soluong
tong -= tong*0.1
tong += tong*0.5
console.log ("Giá sản phẩm",giasanpham,",Số lượng",soluong);
console.log (tong)