var lampadaQuebrada = false;
var lampada = document.getElementById("lampada");
console.log(lampada)
var interruptor = document.getElementById("interruptor");
var troca = document.getElementById("trocalampada");

function mudaLampada(estado) {
    if (estado == 1) {
        imgLampada = "assets/lampada-apagada.png";
        imgInterruptor = "assets/switch-off.png";
        interruptor.setAttribute("onclick", "mudaLampada(2)");
    }
    if (estado == 2) {
        imgLampada = "assets/lampada-acesa.png";
        imgInterruptor = "assets/switch-on.png";
        interruptor.setAttribute("onclick", "mudaLampada(1)");
    }
    if (estado == 3) {
        imgLampada = "assets/lampada-quebrada.png";
        troca.style.display = "flex";
    }

    interruptor.src = imgInterruptor;

    if (!lampadaQuebrada) {

        lampada.src = imgLampada;
        if (estado == 3) {
            lampadaQuebrada = true;
        }
    }
}

function trocaLampada() {
    imgLampada = "assets/lampada-apagada.png";
    lampada.src = imgLampada;
    interruptor.setAttribute("onclick", "mudaLampada(2)");
    troca.style.display = "none";
    lampadaQuebrada = false;
}