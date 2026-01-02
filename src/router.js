export class Router {
    constructor() {
        this.routes = new Map();
        this.setupPopState();
    }

    addRoute(path, handler) {
        this.routes.set(path, handler);
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        const handler = this.routes.get(path);
        if (handler) {
            handler();
        }
    }

    setupPopState() {
        window.addEventListener('popstate', () => {
            const handler = this.routes.get(window.location.pathname);
            if (handler) {
                handler();
            }
        });
    }
}

