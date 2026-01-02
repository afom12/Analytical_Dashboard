import { mockActivityData } from '../data/mockData.js';

export class UserActivityHeatmap {
    constructor() {
        this.activityData = mockActivityData();
    }

    render() {
        const container = document.createElement('div');
        container.className = 'card activity-heatmap';
        
        const hours = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
                       '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        container.innerHTML = `
            <div class="card-header">
                <h2>User Activity Heatmap</h2>
                <div class="activity-legend">
                    <span>Less</span>
                    <div class="legend-colors">
                        <div class="legend-color" style="background: #ebedf0"></div>
                        <div class="legend-color" style="background: #c6e48b"></div>
                        <div class="legend-color" style="background: #7bc96f"></div>
                        <div class="legend-color" style="background: #239a3b"></div>
                        <div class="legend-color" style="background: #196127"></div>
                    </div>
                    <span>More</span>
                </div>
            </div>
            <div class="heatmap-container">
                <div class="heatmap-grid">
                    ${days.map((day, dayIdx) => `
                        <div class="heatmap-row">
                            <div class="heatmap-day-label">${day}</div>
                            <div class="heatmap-cells">
                                ${hours.map((hour, hourIdx) => {
                                    const activity = this.activityData[dayIdx]?.[hourIdx] || 0;
                                    const intensity = this.getIntensity(activity);
                                    return `<div class="heatmap-cell intensity-${intensity}" 
                                                title="${day} ${hour}:00 - ${activity} users"
                                                style="background-color: ${this.getColor(intensity)}">
                                            </div>`;
                                }).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="heatmap-hour-labels">
                    ${hours.filter((_, i) => i % 4 === 0).map(hour => 
                        `<div class="hour-label">${hour}</div>`
                    ).join('')}
                </div>
            </div>
            <div class="activity-summary">
                <div class="summary-item">
                    <span class="summary-label">Peak Hour</span>
                    <span class="summary-value">14:00 (${this.getPeakActivity()} users)</span>
                </div>
                <div class="summary-item">
                    <span class="summary-label">Total Active Users</span>
                    <span class="summary-value">${this.getTotalActiveUsers().toLocaleString()}</span>
                </div>
            </div>
        `;

        return container;
    }

    getIntensity(activity) {
        if (activity === 0) return 0;
        if (activity < 10) return 1;
        if (activity < 25) return 2;
        if (activity < 50) return 3;
        return 4;
    }

    getColor(intensity) {
        const colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
        return colors[intensity] || colors[0];
    }

    getPeakActivity() {
        let max = 0;
        this.activityData.forEach(day => {
            day.forEach(hour => {
                if (hour > max) max = hour;
            });
        });
        return max;
    }

    getTotalActiveUsers() {
        return this.activityData.reduce((sum, day) => 
            sum + day.reduce((daySum, hour) => daySum + hour, 0), 0
        );
    }
}

