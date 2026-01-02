import { SalesOverview } from '../components/SalesOverview.js';
import { UserActivityHeatmap } from '../components/UserActivityHeatmap.js';
import { ProjectPipeline } from '../components/ProjectPipeline.js';
import { NotificationsCenter } from '../components/NotificationsCenter.js';

export class Dashboard {
    constructor() {
        this.salesOverview = new SalesOverview();
        this.userActivity = new UserActivityHeatmap();
        this.projectPipeline = new ProjectPipeline();
        this.notifications = new NotificationsCenter();
    }

    render() {
        const container = document.createElement('div');
        container.className = 'dashboard-container';
        
        container.innerHTML = `
            <div class="dashboard-header">
                <h1>Dashboard Overview</h1>
                <p class="subtitle">Welcome back! Here's what's happening today.</p>
            </div>
        `;

        // Create grid layout
        const grid = document.createElement('div');
        grid.className = 'dashboard-grid';

        // Sales Overview Section
        const salesSection = document.createElement('section');
        salesSection.className = 'dashboard-section sales-section';
        salesSection.appendChild(this.salesOverview.render());
        grid.appendChild(salesSection);

        // User Activity Heatmap Section
        const activitySection = document.createElement('section');
        activitySection.className = 'dashboard-section activity-section';
        activitySection.appendChild(this.userActivity.render());
        grid.appendChild(activitySection);

        // Project Pipeline Section
        const pipelineSection = document.createElement('section');
        pipelineSection.className = 'dashboard-section pipeline-section';
        pipelineSection.appendChild(this.projectPipeline.render());
        grid.appendChild(pipelineSection);

        // Notifications Section
        const notificationsSection = document.createElement('section');
        notificationsSection.className = 'dashboard-section notifications-section';
        notificationsSection.appendChild(this.notifications.render());
        grid.appendChild(notificationsSection);

        container.appendChild(grid);

        return container;
    }
}

