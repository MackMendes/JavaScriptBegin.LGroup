// Retiramos da p�gina HTML os scripts pois, o arquivo respons�vel pelo JavaScript n�o � o html... e sim um JS.

// [] = � a declara��o de um Array (lista);
// {} = � a declara��o de um Objeto
// Vari�vel Global
var objectCidade = [
    { texto: 'S�o Paulo', valor: 'SP' },
    { texto: 'Rio de Janeiro', valor: 'RJ' },
    { texto: 'Minas Gerais', valor: 'MG' }
];


// Fun��o An�nima
(function () {
    // OnLoad � um evento do Navegador, 
    // que � executado no final de rendezar o HTML (depois que a p�gina foi carregada)
    window.onload = ExecutarJavaScriptAposPagina;
})();

// Deixamos a responsabilidade de Executar Fun��es JavaScritp ap�s a p�gina ser carregada, nesse fun��o ExecutarJavaScriptAposPagina();
function ExecutarJavaScriptAposPagina() {
    // Aqui temos uma fun��o (ExecutarJavaScriptAposPagina()) chamando outras...
    AtribuirAno();
    PreencheCidade();
}

// Fun��o Nomeada
function AtribuirAno() {
    // debugger : Palavra reservada do javacript, 
    // para informar ao navegador que ao passar por aqui t�m parar, com o console do navegador aberto.(f12)
    debugger;

    // Manipulando o DOM (Document Object Model) da p�gina. Atrav�s da fun��o getElementById, pegamos o DOM do HTML atrav�s do ID.
    var lblTimeYear = document.getElementById('lblTimeYear');
    // new Date() = Estamos inst�nciando a fun��o Date() do javaScript, e chamando o getFullYear() para retornar o ano
    lblTimeYear.textContent = new Date().getFullYear();
}

// Por convers�o de boas pr�ticas, fun��o que � chamada na p�gina coloca-se o nome do evento no final "Click" 
function onCadastrarClienteClick() {
    if (ValidarCadastroCliente()) {
        alert('Validado!!!');
    }
}

function ValidarCadastroCliente() {
    debugger;
    var isValido = true;
    var nome = document.getElementById('txtNome');
    var cidade = document.getElementById('ddlCidade');
    var ckbAtivo = document.getElementById('ckbAtivo');

    var mensagemErro = '';

    // === : Igualdade de tipo e valor. Essa compara��o n�o faz convers�o de valores para saber o valor. Boa pratica utiliza-lo!
    // == : Igualdade de valor, somente. Ele converte um dos valores com base no outro, e assim faz a verifica��o dos valores.
    // http://stackoverflow.com/questions/359494/does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons
    if (nome.value.trim() === "") {
        mensagemErro = mensagemErro + 'Por favor, informe o Nome \n';
        isValido = false;
    }

    if (cidade.value === "0") {
        mensagemErro = mensagemErro + 'Por favor, selecione a Cidade \n';
        isValido = false;
    }

    if (ckbAtivo.checked === false) {
        mensagemErro = mensagemErro + 'Cliente tem que ser ativo. \n';
        isValido = false;
    }

    if (isValido === false) {
        alert(mensagemErro);
    }

    return isValido;
}

// Fun��o para preenche o Select (DropDownList) de Cidade
function PreencheCidade() {
    var ddlCidade = document.getElementById('ddlCidade');
    var htmlOpction = '<option value="0">--- Selecione ---</option>';

    for (var i = 0; i < objectCidade.length; i++) {
        htmlOpction += '<option value="' + objectCidade[i].valor + '">'
        htmlOpction += objectCidade[i].texto
        htmlOpction += '</option>'
    }

    ddlCidade.innerHTML = htmlOpction;
}