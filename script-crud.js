// Seleciona o botão de adicionar tarefa no HTML e guarda na variável btnAdicionarTarefa
const btnAdicionarTarefa = document.querySelector('.app__button--add-task')

// Seleciona o formulário de adicionar tarefa e guarda na variável formAdicionarTarefa
const formAdicionarTarefa = document.querySelector('.app__form-add-task')

// Seleciona a textarea onde o usuário escreve a tarefa e guarda na variável textarea
const textarea = document.querySelector('.app__form-textarea')

// Cria um array vazio chamado tarefas que vai armazenar todas as tarefas adicionadas
const tarefas = []

// Adiciona um evento de clique ao botão "Adicionar Tarefa"
btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
})

// Adiciona um evento ao formulário que é acionado quando ele é enviado
formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const tarefa = {     // Cria um objeto tarefa com a propriedade descricao, que recebe o valor da textarea
        descricao: textarea.value
    }

    tarefas.push(tarefa) // Adiciona o objeto tarefa ao array tarefas

    localStorage.setItem('tarefas', JSON.stringify(tarefas)) // Salva o array tarefas no localStorage do navegador, transformando ele em uma string JSON
})
