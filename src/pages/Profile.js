export class Profile {
    render() {
        const container = document.createElement('div');
        container.className = 'profile-container';
        
        container.innerHTML = `
            <div class="profile-header">
                <h1>Profile & Settings</h1>
                <p class="subtitle">Manage your account settings and preferences</p>
            </div>

            <div class="profile-content">
                <div class="profile-card">
                    <div class="profile-avatar">
                        <div class="avatar-circle">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                        </div>
                        <button class="btn-secondary">Change Photo</button>
                    </div>
                    
                    <div class="profile-form">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input type="text" value="John Doe" class="form-input">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" value="john.doe@example.com" class="form-input">
                        </div>
                        <div class="form-group">
                            <label>Role</label>
                            <input type="text" value="Administrator" class="form-input" disabled>
                        </div>
                        <div class="form-group">
                            <label>Timezone</label>
                            <select class="form-input">
                                <option>UTC-5 (Eastern Time)</option>
                                <option>UTC-8 (Pacific Time)</option>
                                <option>UTC+0 (GMT)</option>
                            </select>
                        </div>
                        <div class="form-actions">
                            <button class="btn-primary">Save Changes</button>
                            <button class="btn-secondary">Cancel</button>
                        </div>
                    </div>
                </div>

                <div class="settings-card">
                    <h2>Preferences</h2>
                    <div class="setting-item">
                        <div>
                            <h3>Email Notifications</h3>
                            <p>Receive email updates about your account activity</p>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" checked>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <div class="setting-item">
                        <div>
                            <h3>Dark Mode</h3>
                            <p>Switch to dark theme</p>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    <div class="setting-item">
                        <div>
                            <h3>Weekly Reports</h3>
                            <p>Get weekly analytics reports via email</p>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" checked>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>

                <div class="settings-card">
                    <h2>Security</h2>
                    <div class="setting-item">
                        <div>
                            <h3>Two-Factor Authentication</h3>
                            <p>Add an extra layer of security to your account</p>
                        </div>
                        <button class="btn-secondary">Enable</button>
                    </div>
                    <div class="setting-item">
                        <div>
                            <h3>Change Password</h3>
                            <p>Update your password regularly</p>
                        </div>
                        <button class="btn-secondary">Change</button>
                    </div>
                </div>
            </div>
        `;

        return container;
    }
}

