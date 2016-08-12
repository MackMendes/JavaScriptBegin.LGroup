// Array: Lista em JavaScript
var listCidades = [
    { texto: "S�o Paulo", valor: "SP" }, // Esse � um objeto em Javascript
    { texto: "Rio de Janeiro", valor: "RJ" },
    { texto: "Bahia", valor: "BA" }
];

function PreencheCidades() {
    var ddlCidade = document.getElementById('ddlCidade');
    ddlCidade.innerHTML = "<option value=''>-- Selecione --</option>";
    for (var i = 0; i < listCidades.length; i++) {
        ddlCidade.innerHTML += "<option value='" + listCidades[i].valor +
            "'>" + listCidades[i].texto + "</option>";
    }
}

function ColocarAnoNaPagina() {
    // Palavra reservada do JS para depura��o da ferramenta do Navegador
    // debugger;
    // document.getElementById, retorna um DOM desta Label
    var lblAno = document.getElementById('lblTimeYear');
    lblAno.textContent = "2016";
}
// Fun��o Anonima do JS
window.onload = function () { ColocarAnoNaPagina(); PreencheCidades(); }