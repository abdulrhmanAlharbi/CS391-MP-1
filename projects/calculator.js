function myadd() {
    let n1 = Number(document.getElementById("first-input").value);
    let n2 = Number(document.getElementById("second-input").value);

    let res = n1 + n2;
    colorresult(res);
    document.getElementById("result").innerHTML =`${res}`;
}

function mysub() {
    let n1 = Number(document.getElementById("first-input").value);
    let n2 = Number(document.getElementById("second-input").value);

    let res = n1 - n2;
    colorresult(res);
    document.getElementById("result").innerHTML =`${res}`;
}

function mymult() {
    let n1 = Number(document.getElementById("first-input").value);
    let n2 = Number(document.getElementById("second-input").value);

    let res = n1 * n2;
    colorresult(res);
    document.getElementById("result").innerHTML =`${res}`;
}

function mydiv() {
    let n1 = Number(document.getElementById("first-input").value);
    let n2 = Number(document.getElementById("second-input").value);

    let res = n1 / n2;
    colorresult(res);
    document.getElementById("result").innerHTML =`${res}`;
}

function mypow() {
    let n = document.getElementById("first-input").value;
    n = Number(n);

    let p = document.getElementById("second-input").value;
    p = Number(p);

    let res = 1;
    let negative = false;

    if (p < 0) {
        p = p * -1;
        negative = true;
    }

    for (let i = 0; i < p; i++){
        res = res * n;
    }

    if(negative) {
        res = 1/res;
    }

    colorresult(res);
    document.getElementById("result").innerHTML =`${res}`;
}

//if result is negative change its color to red, otherwise keep it yellow
function colorresult(res) {
    let output = document.getElementById("result");

    if (res < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "#dca060";
    }
}

function myclear() {

    document.getElementById("result").style.color ="#dca060";

    document.getElementById("result").innerHTML =``;
    document.getElementById("first-input").value =``;
    document.getElementById("second-input").value =``;
}

