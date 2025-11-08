
const NotificationTypes = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
};

const NotificationIcons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
};

function showNotification(message, type = NotificationTypes.INFO, duration = 4000) {
    const container = document.getElementById('notification-container');
    if (!container) return;

    
    const existingNotification = container.querySelector('.notification');
    if (existingNotification) {
        removeNotification(existingNotification);
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = document.createElement('span');
    icon.className = 'notification-icon';
    icon.textContent = NotificationIcons[type];
    
    const messageSpan = document.createElement('span');
    messageSpan.className = 'notification-message';
    messageSpan.textContent = message;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'notification-close';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => removeNotification(notification);
    
    notification.appendChild(icon);
    notification.appendChild(messageSpan);
    notification.appendChild(closeBtn);
    
    container.appendChild(notification);
    
    
    if (duration > 0) {
        setTimeout(() => {
            removeNotification(notification);
        }, duration);
    }
    
    return notification;
}

function removeNotification(notification) {
    notification.classList.add('removing');
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

function showSuccess(message, duration = 4000) {
    return showNotification(message, NotificationTypes.SUCCESS, duration);
}

function showError(message, duration = 5000) {
    return showNotification(message, NotificationTypes.ERROR, duration);
}

function showWarning(message, duration = 4000) {
    return showNotification(message, NotificationTypes.WARNING, duration);
}

function showInfo(message, duration = 4000) {
    return showNotification(message, NotificationTypes.INFO, duration);
}
