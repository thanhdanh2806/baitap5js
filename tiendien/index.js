document.getElementById("btnElecBill").onclick = function() {
  var e = document.getElementById("inputName").value,
    n = Number(document.getElementById("inputKW").value),
    t = 0;
    var kw_1 = 500 ;
    var kw_2 = 650 ;
    var kw_3 = 850 ;
    var kw_4 = 1100;
    var kw_5 = 1300;

    0 < n && n <= 50
    ? (t = n * kw_1)
    : n > 50 && n <= 100
    ? (t = 50 * kw_1 + (n - 50) * kw_2)
    : n > 100 && n <= 200
    ? (t = 50 * kw_1 + 50 * kw_2 + (n - 100) * kw_3)
    : n > 200 && n <= 350
    ? (t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + (n - 200) * kw_4)
    : n > 350
    ? (t = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + (n - 350) * kw_5)
    : alert("Số kw không hợp lệ! Vui lòng nhập lại"),
    (t = new Intl.NumberFormat("vn-VN").format(t)),
    (document.getElementById("txtElecBill").innerHTML =
      "Họ tên: " + e + "; Tiền điện: " + t);
}
