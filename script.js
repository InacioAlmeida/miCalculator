function insert(num) {
    var historico = document.getElementById('telinha').innerHTML;
    document.getElementById('telinha').innerHTML = historico + num;
}

function clean() {
    document.getElementById('telinha').innerHTML = "";
}

function backspace() {
    var historico = document.getElementById('telinha').innerHTML;
    document.getElementById('telinha').innerHTML = historico.substring(0, historico.length - 1);
}

function calcular() {
    var historico = document.getElementById('telinha').innerHTML;
    if (historico.length > 0) {

        var expressaoCorrigida = historico.replaceAll('÷', '/').replaceAll('x', '*').replaceAll(',', '.').replaceAll('%', '/100');

        document.getElementById('telinha').innerHTML = eval(expressaoCorrigida);

    }

}