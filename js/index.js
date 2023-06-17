document.getElementById('id1').addEventListener('mouseenter', function () {
    const color = '#515151';
    document.getElementById('id1').style.background = color;
    document.getElementById('another').style.background = color;
    document.getElementById('dim').style.opacity = 0.1;
    document.getElementById('another-dim').style.opacity = 0.1;
})
document.getElementById('id1').addEventListener('mouseleave', function () {
    const color = '#515151';
    document.getElementById('id1').style.background = '';
    document.getElementById('another').style.background = '';
    document.getElementById('dim').style.opacity = '';
    document.getElementById('another-dim').style.opacity = '';
})

document.getElementById('another').addEventListener('mouseenter', function () {
    const color = '#515151';
    document.getElementById('id1').style.background = color;
    document.getElementById('another').style.background = color;
    document.getElementById('dim').style.opacity = 0.1;
    document.getElementById('another-dim').style.opacity = 0.1;
})
document.getElementById('another').addEventListener('mouseleave', function () {
    const color = '#515151';
    document.getElementById('id1').style.background = '';
    document.getElementById('another').style.background = '';
    document.getElementById('dim').style.opacity = '';
    document.getElementById('another-dim').style.opacity = '';
})