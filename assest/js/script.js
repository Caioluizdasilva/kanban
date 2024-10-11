document.addEventListener('DOMContentLoaded', () => {
    // Função para adicionar nova tarefa
    document.querySelectorAll('.add-card').forEach(button => {
        button.addEventListener('click', (event) => {
            const column = event.target.closest('.kanban-column');
            const taskTitle = prompt('Digite o título da nova tarefa:');

            if (taskTitle) {
                const cardHTML = `
                    <div class="kanban-card" draggable="true">
                        <div class="badge medium">
                            <span>Medium priority</span>
                        </div>
                        <p class="card-title">${taskTitle}</p>
                        <div class="card-infos">
                            <div class="card-icons">
                                <p>
                                    <i class="fa-regular fa-comment"></i> 0
                                </p>
                                <p>
                                    <i class="fa-solid fa-paperclip"></i> 0
                                </p>
                            </div>
                            <div class="user">
                                <img src="assest/images/avatar.avif" alt="Avatar">
                            </div>
                        </div>
                        <button class="delete-card">Excluir</button>
                    </div>
                `;
                column.querySelector('.kanban-cards').innerHTML += cardHTML;
                addDeleteEventListeners();
                addCommentListeners();
            }
        });
    });

    // Função para adicionar evento de exclusão
    function addDeleteEventListeners() {
        document.querySelectorAll('.delete-card').forEach(button => {
            button.addEventListener('click', (event) => {
                const card = event.target.closest('.kanban-card');
                card.remove();
            });
        });
    }


    // Adicionar os eventos aos cards já existentes
    addDeleteEventListeners();
    addCommentListeners();
});
