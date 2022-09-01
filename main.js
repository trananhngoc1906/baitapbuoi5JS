/**
 * GLOBAL
 */
function domID(id) {
  var id = document.getElementById(id);
  return id;
}

/**
 * Bài tập 1
 */
function baiTap1() {
  //input: lay du lieu user nhap vao
  var number1 = domID("number1").value * 1;
  var number2 = domID("number2").value * 1;
  var number3 = domID("number3").value * 1;
  var diemChuan = domID("diemChuan").value * 1;
  var khuVuc = domID("khuVuc").value * 1;
  var doiTuong = domID("doiTuong").value * 1;

  var tongDiem = number1 + number2 + number3 + khuVuc + doiTuong;

  var diem0 = Boolean;

  var ketQua = "";
  //xu ly
  //xet xem co mon nao = 0 khong
  if (number1 == 0 || number2 == 0 || number3 == 0) {
    diem0 = false;
  } else {
    diem0 = true;
  }

  //so sanh tongDiem va diemChuan
  if (tongDiem >= diemChuan && diem0 == true) {
    ketQua = "Bạn đã đậu";
  } else {
    ketQua = "Rất tiếc bạn không nằm trong danh sách trúng tuyển";
  }

  //output
  domID("showKetQuaBT1").innerHTML = ketQua + " với tổng điểm là " + tongDiem;
}

/**
 * Bài tập 2
 */

function baiTap2() {
  //input: nhan du lieu nguoi dung
  var name = domID("name").value;
  var soKw = domID("soKw").value * 1;
  var ketQua = 0;

  //xu ly
  if (350 < soKw) {
    ketQua = 50 * 500 + 50 * 650 + 850 * 100 + 200 * 1100 + (soKw - 350) * 1300;
  } else if (200 < soKw && soKw <= 350) {
    ketQua = 50 * 500 + 50 * 650 + 850 * 100 + (soKw - 200) * 1100;
  } else if (100 < soKw && soKw <= 200) {
    ketQua = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (50 < soKw && soKw <= 100) {
    ketQua = 50 * 500 + (soKw - 50) * 650;
  } else if (0 < soKw && soKw <= 50) {
    ketQua = soKw * 500;
  } else {
    ketQua = 0;
  }

  var numberFormat = new Intl.NumberFormat("Vn-Vn");

  //output
  domID("showKetQuaBT2").innerHTML =
    "Hộ gia đình " +
    name +
    " phải đóng " +
    numberFormat.format(ketQua) +
    " vnd tiền điện.";
}

/**
 * bài tập 3:
 */

function baiTap3() {
  //input: lay du lieu nguoi dung
  var hoVaTen = domID("hoVaTen").value;
  var tongThuNhap = domID("tongThuNhap").value * 1;
  var soNguoiPhuThuoc = domID("soNguoiPhuThuoc").value * 1;

  var thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
  var tienThue = 0;

  //xu ly:
  if (0 <= thuNhapChiuThue && thuNhapChiuThue <= 60) {
    tienThue = (thuNhapChiuThue * 5) / 100;
  } else if (60 < thuNhapChiuThue && thuNhapChiuThue <= 120) {
    tienThue = (thuNhapChiuThue * 10) / 100;
  } else if (120 < thuNhapChiuThue && thuNhapChiuThue <= 210) {
    tienThue = (thuNhapChiuThue * 15) / 100;
  } else if (210 < thuNhapChiuThue && thuNhapChiuThue <= 384) {
    tienThue = (thuNhapChiuThue * 20) / 100;
  } else if (384 < thuNhapChiuThue && thuNhapChiuThue <= 624) {
    tienThue = (thuNhapChiuThue * 25) / 100;
  } else if (624 < thuNhapChiuThue && thuNhapChiuThue <= 960) {
    tienThue = (thuNhapChiuThue * 30) / 100;
  } else if (960 < thuNhapChiuThue) {
    tienThue = (thuNhapChiuThue * 35) / 100;
  } else {
    //th không có số âm không có lương
    tienThue = 0;
  }

  //output
  domID("showKetQuaBT3").innerHTML =
    "Bạn " + hoVaTen + " cần nộp " + tienThue + "tr vnd tiền thuế.";
}

/**
 * Bài tập 4:
 */

//swtich disable input so ket noi

function switchInput() {
  var x = domID("loaiKH").value * 1;
  if (x == 1) {
    domID("soKetNoiThem").disabled = false;
  } else {
    domID("soKetNoiThem").disabled = true;
  }
}

function baiTap4() {
  //input: lay du lieu nguoi dung nhap vao

  var loaiKH = domID("loaiKH").value * 1;
  var soKenhCC = domID("soKenhCC").value * 1;
  var soKetNoiThem = domID("soKetNoiThem").value * 1;

  var ketQua = 0;

  //xu ly

  if (loaiKH == 0) {
    ketQua = 4.5 + 20.5 + 7.5 * soKenhCC;
  } else {
    ketQua = 15 + 75 + 50 * soKenhCC + 5 * soKetNoiThem;
  }

  //output
  domID("showKetQuaBT4").innerHTML = "Số tiền phải trả là: " + ketQua;
}
