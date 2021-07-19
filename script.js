

var notaum
var notadois
var notatres

function calcularNota(notaum, notadois, notatres) {
    media = (notaum + notadois + notatres)/3;
    console.log(media);
    if (media>=7) {
        return "aprovado";
    }
}

calcularNota(7,6,10)

