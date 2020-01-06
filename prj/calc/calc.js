

function btnplus()
{
    a = parseFloat(document.getElementById("txt1").value);
    b = parseFloat(document.getElementById("txt2").value);
    out = document.getElementById("out");
    out.innerHTML= a + b;
}

function btnsolve()
{
    out2 = document.getElementById("out2");
    txt = document.getElementById("txt3").value;
    if (/^[0123456789+*/]/.test(txt)) {
        out2.innerHTML = eval(document.getElementById("txt3").value);
    }
   
}
