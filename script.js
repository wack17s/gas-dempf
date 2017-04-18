// formuls

// Коэффициент демпфирования в направлении оси y.
function DempferCoef() {
    var m = document.getElementById("frm1").elements[0].value;
    var a = document.getElementById("frm1").elements[1].value;
    var b = document.getElementById("frm1").elements[2].value;
    var h = document.getElementById("frm1").elements[3].value;

    if (!isNaN(m) && !isNaN(a) && !isNaN(b) && !isNaN(h) &&
        m !== "" && a !== ""&& b !== ""&& h !== "") {
        var k = 2 * m * a * a * a * b * b * b / (h * h * h * (a * a + b * b));

        document.getElementById("ans1").innerHTML = k;
        document.getElementById("frm1b").innerHTML = "Пересчитать";
    } else {
        alert("Заполните поля числами");
    }
};

document.getElementById("frm1b").onclick = DempferCoef;

// Коэффициент демпфирования для подвижных узлов, имеющих форму квадрата (a = b).
function DempferCoefSquare() {
    var m = document.getElementById("frm2").elements[0].value;
    var a = document.getElementById("frm2").elements[1].value;
    var h = document.getElementById("frm2").elements[2].value;

    if (!isNaN(m) && !isNaN(a) && !isNaN(h) &&
        m !== "" && a !== ""&& h !== "") {
        var k = m * a * a * a * a / (h * h * h);

        document.getElementById("ans2").innerHTML = k;
        document.getElementById("frm2b").innerHTML = "Пересчитать";
    } else {
        alert("Заполните поля числами");
    }
};

document.getElementById("frm2b").onclick = DempferCoefSquare;

// Коэффициент демпфирования для подвижных узлов, имеющих форму круга радиусом R.
function DempferCoefCircle() {
    var m = document.getElementById("frm3").elements[0].value;
    var R = document.getElementById("frm3").elements[1].value;
    var h = document.getElementById("frm3").elements[2].value;
    var pi = 3.1415926535897;

    if (!isNaN(m) && !isNaN(R) && !isNaN(h) &&
        m !== "" && R !== ""&& h !== "") {
        var k = 3 * m * pi * R * R * R * R / (h * h * h);

        document.getElementById("ans3").innerHTML = k;
        document.getElementById("frm3b").innerHTML = "Пересчитать";
    } else {
        alert("Заполните поля числами");
    }
};

document.getElementById("frm3b").onclick = DempferCoefCircle;

// Коэффициент демпфирования для подвижных узлов, имеющих форму прямоугольника (a >> b).
function DempferCoefRectangle() {
    var m = document.getElementById("frm4").elements[0].value;
    var a = document.getElementById("frm4").elements[1].value;
    var b = document.getElementById("frm4").elements[2].value;
    var h = document.getElementById("frm4").elements[3].value;

    if (!isNaN(m) && !isNaN(a) && !isNaN(b) && !isNaN(h) &&
        m !== "" && a !== ""&& b !== ""&& h !== "") {
        var k = 2 * m * a * a * a * b * b * b / (h * h * h * (a * a + b * b));

        document.getElementById("ans4").innerHTML = k;
        document.getElementById("frm4b").innerHTML = "Пересчитать";
    } else {
        alert("Заполните поля числами");
    }
};

document.getElementById("frm4b").onclick = DempferCoefRectangle;

// Момент демпфирования.
function DempferMoment(F, a) {
    var M = F * a / 2;

    return M;
}
