document.getElementById('id1').addEventListener('mouseenter', function () {
    const color = '#515151';
    document.getElementById('id1').style.background = color;
    document.getElementById('another').style.background = color;
    document.getElementById('dim').style.filter = "brightness(" + 0.3 + ")";
    document.getElementById('another-dim').style.filter = "brightness(" + 0.3 + ")";
})
document.getElementById('id1').addEventListener('mouseleave', function () {
    document.getElementById('id1').style.background = '';
    document.getElementById('another').style.background = '';
    document.getElementById('dim').style.filter = '';
    document.getElementById('another-dim').style.filter = '';
})

document.getElementById('another').addEventListener('mouseenter', function () {
    const color = '#515151';
    document.getElementById('id1').style.background = color;
    document.getElementById('another').style.background = color;
    document.getElementById('dim').style.filter = "brightness(" + 0.3 + ")";
    document.getElementById('another-dim').style.filter = "brightness(" + 0.3 + ")";
})
document.getElementById('another').addEventListener('mouseleave', function () {
    document.getElementById('id1').style.background = '';
    document.getElementById('another').style.background = '';
    document.getElementById('dim').style.filter = '';
    document.getElementById('another-dim').style.filter = '';
})
