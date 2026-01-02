import { mockPipelineData } from '../data/mockData.js';

export class ProjectPipeline {
    constructor() {
        this.pipelineData = mockPipelineData();
    }

    render() {
        const container = document.createElement('div');
        container.className = 'card pipeline-board';
        
        const columns = [
            { id: 'backlog', title: 'Backlog', color: '#94a3b8' },
            { id: 'todo', title: 'To Do', color: '#3b82f6' },
            { id: 'inprogress', title: 'In Progress', color: '#f59e0b' },
            { id: 'review', title: 'Review', color: '#8b5cf6' },
            { id: 'done', title: 'Done', color: '#10b981' }
        ];

        container.innerHTML = `
            <div class="card-header">
                <h2>Project Pipeline</h2>
                <button class="btn-icon" title="Add Project">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                </button>
            </div>
            <div class="pipeline-columns">
                ${columns.map(column => {
                    const projects = this.pipelineData[column.id] || [];
                    return `
                        <div class="pipeline-column">
                            <div class="column-header" style="border-left-color: ${column.color}">
                                <h3>${column.title}</h3>
                                <span class="column-count">${projects.length}</span>
                            </div>
                            <div class="column-content" data-column="${column.id}">
                                ${projects.map(project => this.renderProjectCard(project)).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        // Add drag and drop functionality
        this.addDragAndDrop(container);

        return container;
    }

    renderProjectCard(project) {
        const priorityColors = {
            high: '#ef4444',
            medium: '#f59e0b',
            low: '#10b981'
        };

        return `
            <div class="project-card" draggable="true" data-project-id="${project.id}">
                <div class="project-header">
                    <span class="project-priority" style="background-color: ${priorityColors[project.priority]}"></span>
                    <span class="project-id">#${project.id}</span>
                </div>
                <h4 class="project-title">${project.title}</h4>
                <p class="project-description">${project.description}</p>
                <div class="project-footer">
                    <div class="project-assignee">
                        <div class="avatar-small" style="background-color: ${project.assigneeColor}">
                            ${project.assignee.charAt(0)}
                        </div>
                        <span>${project.assignee}</span>
                    </div>
                    <div class="project-meta">
                        <span class="project-date">${project.dueDate}</span>
                    </div>
                </div>
            </div>
        `;
    }

    addDragAndDrop(container) {
        let draggedElement = null;

        container.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('dragstart', (e) => {
                draggedElement = card;
                card.style.opacity = '0.5';
            });

            card.addEventListener('dragend', (e) => {
                card.style.opacity = '1';
                draggedElement = null;
            });
        });

        container.querySelectorAll('.column-content').forEach(column => {
            column.addEventListener('dragover', (e) => {
                e.preventDefault();
                column.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
            });

            column.addEventListener('dragleave', (e) => {
                column.style.backgroundColor = '';
            });

            column.addEventListener('drop', (e) => {
                e.preventDefault();
                column.style.backgroundColor = '';
                if (draggedElement) {
                    column.appendChild(draggedElement);
                }
            });
        });
    }
}

