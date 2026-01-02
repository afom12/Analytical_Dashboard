import { Chart, registerables } from 'chart.js';
import { mockSalesData } from '../data/mockData.js';

Chart.register(...registerables);

export class SalesOverview {
    constructor() {
        this.chart = null;
    }

    render() {
        const container = document.createElement('div');
        container.className = 'card sales-overview';
        
        const salesData = mockSalesData();
        const totalRevenue = salesData.monthly.reduce((sum, m) => sum + m.revenue, 0);
        const totalOrders = salesData.monthly.reduce((sum, m) => sum + m.orders, 0);
        const growthRate = ((salesData.monthly[salesData.monthly.length - 1].revenue - 
                            salesData.monthly[salesData.monthly.length - 2].revenue) / 
                            salesData.monthly[salesData.monthly.length - 2].revenue * 100).toFixed(1);

        container.innerHTML = `
            <div class="card-header">
                <h2>Sales Overview</h2>
                <select class="period-select">
                    <option>Last 7 days</option>
                    <option selected>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>Last year</option>
                </select>
            </div>
            <div class="sales-stats">
                <div class="stat-card">
                    <div class="stat-label">Total Revenue</div>
                    <div class="stat-value">$${(totalRevenue / 1000).toFixed(1)}K</div>
                    <div class="stat-change positive">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="18 15 12 9 6 15"/>
                        </svg>
                        ${growthRate}%
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Total Orders</div>
                    <div class="stat-value">${totalOrders.toLocaleString()}</div>
                    <div class="stat-change positive">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="18 15 12 9 6 15"/>
                        </svg>
                        12.5%
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Average Order</div>
                    <div class="stat-value">$${(totalRevenue / totalOrders).toFixed(2)}</div>
                    <div class="stat-change negative">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"/>
                        </svg>
                        2.1%
                    </div>
                </div>
            </div>
            <div class="chart-container">
                <canvas id="salesChart"></canvas>
            </div>
        `;

        // Render chart after DOM is ready
        setTimeout(() => {
            this.renderChart(salesData);
        }, 100);

        return container;
    }

    renderChart(data) {
        const ctx = document.getElementById('salesChart');
        if (!ctx) return;

        if (this.chart) {
            this.chart.destroy();
        }

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.monthly.map(m => m.month),
                datasets: [
                    {
                        label: 'Revenue',
                        data: data.monthly.map(m => m.revenue),
                        borderColor: 'rgb(99, 102, 241)',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y',
                    },
                    {
                        label: 'Orders',
                        data: data.monthly.map(m => m.orders),
                        borderColor: 'rgb(236, 72, 153)',
                        backgroundColor: 'rgba(236, 72, 153, 0.1)',
                        tension: 0.4,
                        fill: true,
                        yAxisID: 'y1',
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        ticks: {
                            callback: function(value) {
                                return '$' + (value / 1000).toFixed(0) + 'K';
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                        },
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });
    }
}

