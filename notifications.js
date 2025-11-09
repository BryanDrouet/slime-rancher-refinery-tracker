
const NotificationTypes = {
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info'
};

const NotificationIcons = {
    success: '🟢',
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
    
    let icon;
    if (type === NotificationTypes.SUCCESS) {
        icon = document.createElement('img');
        icon.className = 'notification-icon';
        icon.src = 'assets/resources/icon_check.png';
        icon.alt = 'Succès';
        icon.style.width = '20px';
        icon.style.height = '20px';
        icon.style.verticalAlign = 'middle';
    } else {
        icon = document.createElement('span');
        icon.className = 'notification-icon';
        icon.textContent = NotificationIcons[type];
    }
    
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

function showConfirmDialog(options) {
    const {
        title = 'Confirmation',
        message = 'Êtes-vous sûr ?',
        confirmText = 'Confirmer',
        cancelText = 'Annuler',
        isDanger = false,
        icon = '❓'
    } = options;

    return new Promise((resolve) => {
        const overlay = document.createElement('div');
        overlay.className = 'confirmation-dialog-overlay';
        
        const dialog = document.createElement('div');
        dialog.className = 'confirmation-dialog';
        
        dialog.innerHTML = `
            <div class="confirmation-dialog-header">
                <div class="confirmation-dialog-icon">${icon}</div>
                <div class="confirmation-dialog-title">${title}</div>
            </div>
            <div class="confirmation-dialog-message">${message}</div>
            <div class="confirmation-dialog-buttons">
                <button class="confirmation-dialog-button cancel">${cancelText}</button>
                <button class="confirmation-dialog-button confirm ${isDanger ? 'danger' : ''}">${confirmText}</button>
            </div>
        `;
        
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        
        let isClosing = false;
        
        const removeDialog = () => {
            if (isClosing) return;
            isClosing = true;
            
            overlay.style.animation = 'fadeOut 0.2s ease-out';
            dialog.style.animation = 'scaleOut 0.2s ease-out';
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 200);
        };
        
        const cancelBtn = dialog.querySelector('.cancel');
        const confirmBtn = dialog.querySelector('.confirm');
        
        cancelBtn.addEventListener('click', () => {
            removeDialog();
            resolve(false);
        });
        
        confirmBtn.addEventListener('click', () => {
            removeDialog();
            resolve(true);
        });
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                removeDialog();
                resolve(false);
            }
        });
        
        document.addEventListener('keydown', function escapeHandler(e) {
            if (e.key === 'Escape') {
                document.removeEventListener('keydown', escapeHandler);
                removeDialog();
                resolve(false);
            }
        });
    });
}
