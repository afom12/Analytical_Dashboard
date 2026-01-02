# Analytics Dashboard

A sleek, modern analytics dashboard with real-time-style charts and comprehensive admin panel features.

## Features

- 📊 **Sales Overview** - Interactive charts with revenue and order tracking
- 🔥 **User Activity Heatmap** - Visual representation of user activity patterns
- 📋 **Project Pipeline Board** - Kanban-style project management with drag-and-drop
- 🔔 **Notifications Center** - Real-time notification system
- 👤 **Profile & Settings** - User profile management and preferences

## Tech Stack

- **Vanilla JavaScript** (ES6+)
- **Chart.js** - For data visualization
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with CSS variables

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/afom12/Analytical_Dashboard.git
cd Analytical_Dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navigation.js
│   │   ├── SalesOverview.js
│   │   ├── UserActivityHeatmap.js
│   │   ├── ProjectPipeline.js
│   │   └── NotificationsCenter.js
│   ├── pages/           # Page components
│   │   ├── Dashboard.js
│   │   └── Profile.js
│   ├── data/            # Mock data generators
│   │   └── mockData.js
│   ├── styles/          # Stylesheets
│   │   └── main.css
│   ├── app.js           # Main application logic
│   ├── router.js        # Client-side routing
│   └── main.js          # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Features Breakdown

### Sales Overview
- Revenue and order statistics
- Interactive line charts
- Period selection (7 days, 30 days, 90 days, year)
- Growth indicators

### User Activity Heatmap
- 7-day activity visualization
- 24-hour activity patterns
- Color-coded intensity levels
- Peak hour identification

### Project Pipeline Board
- Kanban-style board with 5 columns (Backlog, To Do, In Progress, Review, Done)
- Drag-and-drop functionality
- Project cards with priority indicators
- Assignee avatars and due dates

### Notifications Center
- Real-time notifications
- Multiple notification types (success, info, warning, error)
- Mark as read functionality
- Unread indicators

### Profile & Settings
- User profile management
- Preference toggles
- Security settings
- Theme customization options

## Customization

The dashboard uses CSS variables for easy theming. Modify the variables in `src/styles/main.css`:

```css
:root {
    --primary: #6366f1;
    --secondary: #8b5cf6;
    --success: #10b981;
    /* ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created with ❤️ for modern web applications

