// Seleciona o botão de adicionar tarefa no HTML e guarda na variável btnAdicionarTarefa
const btnAdicionarTarefa = document.querySelector('.app__button--add-task')

// Seleciona o formulário de adicionar tarefa e guarda na variável formAdicionarTarefa
const formAdicionarTarefa = document.querySelector('.app__form-add-task')

// Seleciona a textarea onde o usuário escreve a tarefa e guarda na variável textarea
const textarea = document.querySelector('.app__form-textarea')

// Cria um array vazio chamado tarefas que vai armazenar todas as tarefas adicionadas
const tarefas = []

function criarElementoTarefa (tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `  <svg>
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    </svg>`

    const paragrafo = document.createElement('p')
    paragrafo.textContent = tarefa.descricao

    const botao = document.createElement('button')
    const imagemBotao = document.createElement('img')
    imagemBotao.setAttribute('src' , '/imagens/edit.png')
    
    botao.append(imagemBotao)

    li.append(svg)
    li.append(paragrafo)
    li.append(botao)
}


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
