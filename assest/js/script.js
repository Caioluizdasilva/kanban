document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.add-card').forEach(button => {
        button.addEventListener('click', (event) => {
            const column = event.target.closest('.kanban-column');
            const taskTitle = prompt('Enter the title of the new task:');

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
                        <button class="delete-card">Delete</button>
                    </div>
                `;
                column.querySelector('.kanban-cards').innerHTML += cardHTML;
                addDeleteEventListeners();
                addCommentListeners();
            }
        });
    });

    function addDeleteEventListeners() {
        document.querySelectorAll('.delete-card').forEach(button => {
            button.addEventListener('click', (event) => {
                const card = event.target.closest('.kanban-card');
                card.remove();
            });
        });
    }

    function addCommentListeners() {
        document.querySelectorAll('.fa-comment').forEach(commentIcon => {
            commentIcon.addEventListener('click', (event) => {
                const card = event.target.closest('.kanban-card');
                const comment = prompt('Enter your comment:');
                if (comment) {
                    alert(`Comment added: ${comment}`);
                }
            });
        });
    }

    addDeleteEventListeners();
    addCommentListeners();

    document.querySelectorAll('.kanban-card').forEach(card => {
        card.addEventListener('dragstart', e => {
            e.currentTarget.classList.add('dragging');
        });

        card.addEventListener('dragend', e => {
            e.currentTarget.classList.remove('dragging');
        });
    });

    document.querySelectorAll('.kanban-cards').forEach(column => {
        column.addEventListener('dragover', e => {
            e.preventDefault();
            e.currentTarget.classList.add('cards-hover');
        });

        column.addEventListener('dragleave', e => {
            e.currentTarget.classList.remove('cards-hover');
        });

        column.addEventListener('drop', e => {
            e.currentTarget.classList.remove('cards-hover');
            const dragCard = document.querySelector('.kanban-card.dragging');
            e.currentTarget.appendChild(dragCard);
        });
    });
});
