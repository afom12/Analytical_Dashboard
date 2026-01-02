import { mockNotifications } from '../data/mockData.js';

export class NotificationsCenter {
    constructor() {
        this.notifications = mockNotifications();
    }

    render() {
        const container = document.createElement('div');
        container.className = 'card notifications-center';
        
        const unreadCount = this.notifications.filter(n => !n.read).length;

        container.innerHTML = `
            <div class="card-header">
                <h2>Notifications</h2>
                <div class="notifications-actions">
                    <button class="btn-text" id="markAllRead">Mark all as read</button>
                    <button class="btn-icon" title="Settings">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="notifications-list">
                ${this.notifications.map(notification => this.renderNotification(notification)).join('')}
            </div>
            ${unreadCount > 0 ? `
                <div class="notifications-footer">
                    <button class="btn-primary">View All Notifications</button>
                </div>
            ` : ''}
        `;

        // Add click handlers
        container.querySelectorAll('.notification-item').forEach(item => {
            item.addEventListener('click', () => {
                const id = item.getAttribute('data-id');
                this.markAsRead(id);
                item.classList.remove('unread');
            });
        });

        container.querySelector('#markAllRead')?.addEventListener('click', () => {
            this.markAllAsRead();
            container.querySelectorAll('.notification-item').forEach(item => {
                item.classList.remove('unread');
            });
        });

        return container;
    }

    renderNotification(notification) {
        const icons = {
            success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>`,
            info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                     <circle cx="12" cy="12" r="10"/>
                     <line x1="12" y1="16" x2="12" y2="12"/>
                     <line x1="12" y1="8" x2="12.01" y2="8"/>
                   </svg>`,
            warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>`,
            error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="15" y1="9" x2="9" y2="15"/>
                      <line x1="9" y1="9" x2="15" y2="15"/>
                    </svg>`
        };

        return `
            <div class="notification-item ${notification.read ? '' : 'unread'}" data-id="${notification.id}">
                <div class="notification-icon ${notification.type}">
                    ${icons[notification.type] || icons.info}
                </div>
                <div class="notification-content">
                    <div class="notification-title">${notification.title}</div>
                    <div class="notification-message">${notification.message}</div>
                    <div class="notification-time">${notification.time}</div>
                </div>
                ${!notification.read ? '<div class="notification-dot"></div>' : ''}
            </div>
        `;
    }

    markAsRead(id) {
        const notification = this.notifications.find(n => n.id === id);
        if (notification) {
            notification.read = true;
        }
    }

    markAllAsRead() {
        this.notifications.forEach(n => n.read = true);
    }
}

