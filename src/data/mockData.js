// Mock data generators for the dashboard

export function mockSalesData() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthly = months.map((month, index) => ({
        month,
        revenue: Math.floor(Math.random() * 50000) + 30000 + (index * 2000),
        orders: Math.floor(Math.random() * 200) + 150 + (index * 10)
    }));

    return { monthly };
}

export function mockActivityData() {
    // 7 days x 24 hours
    const data = [];
    for (let day = 0; day < 7; day++) {
        const dayData = [];
        for (let hour = 0; hour < 24; hour++) {
            // Peak hours: 9-17 (business hours)
            let baseActivity = 5;
            if (hour >= 9 && hour <= 17) {
                baseActivity = 30 + Math.random() * 40;
            } else if (hour >= 7 && hour <= 22) {
                baseActivity = 10 + Math.random() * 15;
            }
            dayData.push(Math.floor(baseActivity));
        }
        data.push(dayData);
    }
    return data;
}

export function mockPipelineData() {
    const projects = [
        { id: 1001, title: 'Website Redesign', description: 'Complete UI/UX overhaul', assignee: 'Alice', assigneeColor: '#ef4444', priority: 'high', dueDate: 'Dec 15' },
        { id: 1002, title: 'Mobile App Update', description: 'iOS and Android compatibility', assignee: 'Bob', assigneeColor: '#3b82f6', priority: 'medium', dueDate: 'Dec 20' },
        { id: 1003, title: 'API Integration', description: 'Third-party service integration', assignee: 'Charlie', assigneeColor: '#10b981', priority: 'high', dueDate: 'Dec 12' },
        { id: 1004, title: 'Database Migration', description: 'Move to new infrastructure', assignee: 'Diana', assigneeColor: '#f59e0b', priority: 'medium', dueDate: 'Dec 18' },
        { id: 1005, title: 'Security Audit', description: 'Comprehensive security review', assignee: 'Eve', assigneeColor: '#8b5cf6', priority: 'high', dueDate: 'Dec 10' },
        { id: 1006, title: 'Performance Optimization', description: 'Improve load times', assignee: 'Frank', assigneeColor: '#ec4899', priority: 'low', dueDate: 'Dec 25' },
        { id: 1007, title: 'Feature: Dark Mode', description: 'Add dark theme support', assignee: 'Grace', assigneeColor: '#14b8a6', priority: 'low', dueDate: 'Dec 30' },
        { id: 1008, title: 'Documentation Update', description: 'Update user guides', assignee: 'Henry', assigneeColor: '#6366f1', priority: 'low', dueDate: 'Dec 22' },
        { id: 1009, title: 'Bug Fixes', description: 'Critical issues resolution', assignee: 'Ivy', assigneeColor: '#f97316', priority: 'high', dueDate: 'Dec 8' },
        { id: 1010, title: 'Analytics Dashboard', description: 'New reporting features', assignee: 'Jack', assigneeColor: '#06b6d4', priority: 'medium', dueDate: 'Dec 28' }
    ];

    return {
        backlog: [projects[5], projects[6], projects[7]],
        todo: [projects[0], projects[1]],
        inprogress: [projects[2], projects[3], projects[9]],
        review: [projects[4]],
        done: [projects[8]]
    };
}

export function mockNotifications() {
    return [
        {
            id: 1,
            type: 'success',
            title: 'Project Completed',
            message: 'Website Redesign project has been completed successfully',
            time: '2 minutes ago',
            read: false
        },
        {
            id: 2,
            type: 'info',
            title: 'New Task Assigned',
            message: 'You have been assigned to Mobile App Update project',
            time: '1 hour ago',
            read: false
        },
        {
            id: 3,
            type: 'warning',
            title: 'Deadline Approaching',
            message: 'API Integration project deadline is in 2 days',
            time: '3 hours ago',
            read: false
        },
        {
            id: 4,
            type: 'info',
            title: 'Team Meeting',
            message: 'Sprint planning meeting scheduled for tomorrow at 10 AM',
            time: '5 hours ago',
            read: true
        },
        {
            id: 5,
            type: 'success',
            title: 'Payment Received',
            message: 'Invoice #1234 has been paid',
            time: '1 day ago',
            read: true
        },
        {
            id: 6,
            type: 'error',
            title: 'System Alert',
            message: 'High server load detected on production',
            time: '2 days ago',
            read: true
        }
    ];
}

