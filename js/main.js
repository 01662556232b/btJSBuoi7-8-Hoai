
var soNguyen = [];
function themSo() {
    var number = Number(document.querySelector("#nhapsonguyen input").value);

    soNguyen.push(number);
    console.log(soNguyen);
    document.getElementById("txtResultform").innerHTML = "Mảng: " + soNguyen;
}
document.querySelector("#nhapsonguyen button").onclick = themSo;
//bài tap 1
function tongChan() {
    var sum = 0;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0) {
            sum += soNguyen[i]
        }
    }
    console.log(sum)
    document.getElementById("txtResult1").innerHTML = "Tổng số dương: " + sum;
}
document.getElementById("btntinhtong").onclick = tongChan;
//bài tap 2
function demSoDuong() {
    var count = 0;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] > 0) {
            count++
        }
    }
    console.log(count);
    document.getElementById("txtResult2").innerHTML = "Số dương: " + count;
}
document.getElementById("btndemsoduong").onclick = demSoDuong;
//bài tap 3
function timmin() {
    var vitri = 0;
    var Min = soNguyen[0];
    for (var i = 0; i < soNguyen.length; i++) {
        if (Min > soNguyen[i]) {

            Min = soNguyen[i];
            vitri = i;

        }
    }
    document.querySelector("#txtResult3").innerHTML = "Số nhỏ nhất: " + Min;
}
document.getElementById("btnsonhonhat").onclick = timmin;

//bài 4
function timsoduongnhonhat() {
    var viTri = 0;
    var min = soNguyen[0];
    for (var i = 0; i < soNguyen.length; i++) {
        if (min > soNguyen[i]) {

            min = soNguyen[i];
            viTri = i;

        }
    }
    document.querySelector("#txtResult4").innerHTML = "Số dương nhỏ nhất: " + min;
}
document.getElementById("btnduongnhonhat").onclick = timsoduongnhonhat;
//bài 5
function timsoduongcuoicung() {

    var numberCuaSuTanCung = -1;
    for (var i = 0; i < soNguyen.length; i++) {
        if (soNguyen[i] % 2 == 0) {
            numberCuaSuTanCung = soNguyen[i];
            numberCuaSuTanCung;
        }

    }
    document.querySelector("#txtResult5").innerHTML = "Số chẵn cuối cùng: " + numberCuaSuTanCung;
}
document.getElementById("btnduongcuoicung").onclick = timsoduongcuoicung;

//bài6
function checkdoicho(a, b) {
    temp = soNguyen[a];
    soNguyen[a] = soNguyen[b];
    soNguyen[b] = temp;


}
function doiCHo() {
    var inputSo1 = document.getElementById("so1").value;
    var inputSo2 = document.getElementById("so2").value;
    checkdoicho(inputSo1, inputSo2);

    document.querySelector('#txtResult6').innerHTML = "Mảng sau khi đổi: " + soNguyen;
}
//bài7
function sapxep() {

    for (var i = 0; i < soNguyen.length - 1; i++) {
        for (var j = 0; j < soNguyen.length; j++) {

            if (soNguyen[j] > soNguyen[j + 1]) {
                checkdoicho(j, j + 1)
            }

        }

    }
    console.log(soNguyen)
    document.querySelector('#txtResult7').innerHTML = "Mảng sau khi sắp xếp: " + soNguyen;
}
document.querySelector("#btnsapxep").onclick = sapxep;

//bài8

function checknt(num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
}
function nguyenTo() {
    var nguyento = -1; // trả về -1 khi không có số nguyên tố
    for (var i = 0; i < soNguyen.length; i++) {
        if (checknt(soNguyen[i])) {
            nguyento = soNguyen[i];
            break;
        }
    }
    document.getElementById('txtResult8').innerHTML = nguyento;
}
document.querySelector("#btnnguyento").onclick = nguyenTo;

//bai9
var soNguyen2 = [];
function themsothuc() {
    var number = Number(document.getElementById("nhapso").value);
    soNguyen2.push(number);
    document.querySelector("#txtResult9").innerHTML = soNguyen2;
}
document.querySelector("#btsothuc").onclick = themsothuc;
function demsonguyen() {
    var count = 0;
    for (var i = 0; i < soNguyen2.length; i++) {
        Number.isInteger(soNguyen2[i]) ? count++ : count;
    }
    document.getElementById('txtResultdemsobai9').innerHTML = count;
}
document.querySelector("#btdemso").onclick = demsonguyen;
//bai10
function sosanh() {
    var countDuong = 0;
    var countAm = 0;
    ketQua = '';
  for (var i = 0; i < soNguyen.length; i++)
  soNguyen[i] > 0 ? countDuong++ : soNguyen[i] < 0 && countAm++;
  if (countDuong > countAm) {
    ketQua ='Số dương > Số âm';
  } else if (countDuong < countAm) {
    ketQua ='Số âm > Số dương';
  }else{
    ketQua ='Số âm = Số dương';
  }
  document.getElementById('txtResult10').innerHTML = ketQua

}
document.querySelector("#btsosanh").onclick = sosanh;