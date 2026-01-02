export class Navigation {
    constructor() {
        this.currentPath = window.location.pathname || '/';
    }

    init() {
        // Navigation will be handled by router
    }

    render() {
        const nav = document.createElement('nav');
        nav.className = 'main-nav';
        
        nav.innerHTML = `
            <div class="nav-container">
                <div class="nav-brand">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 3v18h18M7 16l4-4 4 4 6-6"/>
                    </svg>
                    <span>Analytics Dashboard</span>
                </div>
                <ul class="nav-menu">
                    <li>
                        <a href="/" class="nav-link ${this.currentPath === '/' ? 'active' : ''}" data-path="/">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                <polyline points="9 22 9 12 15 12 15 22"/>
                            </svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/profile" class="nav-link ${this.currentPath === '/profile' ? 'active' : ''}" data-path="/profile">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            Profile & Settings
                        </a>
                    </li>
                </ul>
            </div>
        `;

        // Add click handlers
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const path = link.getAttribute('data-path');
                window.dispatchEvent(new CustomEvent('navigate', { detail: { path } }));
            });
        });

        return nav;
    }
}

