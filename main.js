const form = document.getElementById('form-atividade');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha () {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputTelefoneAtividade = document.getElementById('numero-atividade');

    if (nomes.includes(inputNomeAtividade.value)) {
        alert(`O Telefone de: ${inputNomeAtividade.value} já foi inserido`);
    } else {
        nomes.push(inputNomeAtividade.value);
        telefones.push(parseFloat(inputTelefoneAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputTelefoneAtividade.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputTelefoneAtividade.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}