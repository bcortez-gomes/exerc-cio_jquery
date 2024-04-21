const form = document.getElementById('form-tarefas');
const tarefaSemana = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaTarefaSemana();
    atualizaLista();
})

function adicionaTarefaSemana() {
    const inputTarefaSemana = document.getElementById('nova-tarefa-adicionada');

    if (tarefaSemana.includes(inputTarefaSemana.value)) {
        alert(`A tarefa: ${inputTarefaSemana.value}, já está disponível na sua lista.`);
    } else {
        tarefaSemana.push(inputTarefaSemana.value);

        let linha = '<li>';
        linha += `${inputTarefaSemana.value}`;
        linha += '</li>';

        linhas += linha;
}

const listaDeTarefas = document.querySelector('ul');
listaDeTarefas.innerHTML = linhas;

inputTarefaSemana.value = '';
}

function atualizaLista() {
    const listaDeTarefas = document.querySelector('ul');
    listaDeTarefas.innerHTML = linhas;
}

const checkNaLista = document.querySelector('ul');

checkNaLista.addEventListener('click', function(e){
    if(e.target.classList.contains('checked')){
        e.target.classList.remove('Checked');
    } else {
        e.target.classList.add('checked');
    }
})