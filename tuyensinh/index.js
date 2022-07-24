document.getElementById("btnResult").onclick = function() {
    var e = document.getElementById("inputScore1").value
      , n = Number(document.getElementById("selLocation").value)
      , t = Number(document.getElementById("selUser").value)
      , u = Number(document.getElementById("inputScore2").value)
      , c = Number(document.getElementById("inputScore3").value)
      , l = Number(document.getElementById("inputScore4").value)
      , m = !0;
    if (m &= checkScore(u) && checkScore(c) && checkScore(l)) {
        var o = u + c + l + (n + t);
        document.getElementById("txtResult").innerHTML = o >= e ? "Bạn đã đậu. Tổng điểm: " + o : "Bạn đã rớt. Tổng điểm: " + o;
    } else
        document.getElementById("txtResult").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
}
function checkScore(e) {
    return !(e <= 0);
}