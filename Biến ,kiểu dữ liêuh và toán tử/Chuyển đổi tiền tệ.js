
function run() {
    var kq = document.getElementById('a').value;
    var s1 = document.getElementById('b').value;
    var s2 = document.getElementById('c').value;
    if (s1 == s2) {
        alert(kq);
    }
    if (s1 == 'vnd' && s2 == 'usd') {
        alert(kq/23000 + '$');
    }
    if (s1 =='usd' && s2 == 'vnd') {
        alert(kq*23000 + 'VND');
    }
}