var picArr = new Array("int1.jpg", "int2.jpg", "int3.jpg", "int4.jpg");
var index = 0;

function next() {
    index++;
    if (index == picArr.length) {
        index = 0;
    }
    document.getElementById("img").src = picArr[index];
}

function pre() {
    index--;
    if (index < 0) {
        index = picArr.length - 1;
    }
    document.getElementById("img").src = picArr[index];
}