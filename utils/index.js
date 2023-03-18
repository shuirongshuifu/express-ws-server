// 获取当下的年月日时分秒
module.exports = function getNowTime() {
    var today = new Date();
    var y = today.getFullYear();
    var m = today.getMonth();
    var d = today.getDate();
    var h = today.getHours();
    var i = today.getMinutes();
    var s = today.getSeconds();// 在小于10的数字钱前加一个'0'
    m = m + 1;
    d = d < 10 ? "0" + d : d
    m = m < 10 ? "0" + m : m
    i = i < 10 ? "0" + i : i
    s = s < 10 ? "0" + s : s
    return (y + "-" + m + "-" + d + " " + h + ":" + i + ":" + s)
}