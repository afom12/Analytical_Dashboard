import { Router } from './router.js';
import { Navigation } from './components/Navigation.js';
import { Dashboard } from './pages/Dashboard.js';
import { Profile } from './pages/Profile.js';

export class App {
    constructor() {
        this.router = new Router();
        this.navigation = new Navigation();
        this.currentPath = window.location.pathname || '/';
    }

    init() {
        // Set up routes
        this.router.addRoute('/', () => this.renderDashboard());
        this.router.addRoute('/profile', () => this.renderProfile());
        
        // Listen for navigation events
        window.addEventListener('navigate', (e) => {
            const path = e.detail.path;
            this.currentPath = path;
            this.router.navigate(path);
        });
        
        // Render initial page
        this.router.navigate(this.currentPath);
    }

    renderDashboard() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        
        this.navigation.currentPath = '/';
        app.appendChild(this.navigation.render());
        
        const dashboard = new Dashboard();
        app.appendChild(dashboard.render());
    }

    renderProfile() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        
        this.navigation.currentPath = '/profile';
        app.appendChild(this.navigation.render());
        
        const profile = new Profile();
        app.appendChild(profile.render());
    }
}

