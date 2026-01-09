// Update current time
function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent =
        now.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
}

// Test API endpoint
async function testApi() {
    try {
        const response = await fetch('/api/hello');
        const data = await response.json();

        const apiResponse = document.getElementById('apiResponse');
        apiResponse.innerHTML = `
            <h3><i class="fas fa-check-circle"></i> API Response:</h3>
            <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
        apiResponse.classList.add('show');
    } catch (error) {
        const apiResponse = document.getElementById('apiResponse');
        apiResponse.innerHTML = `
            <h3><i class="fas fa-exclamation-circle"></i> API Error:</h3>
            <p>${error.message}</p>
        `;
        apiResponse.classList.add('show');
    }
}

// Check health endpoint
async function checkHealth() {
    try {
        const response = await fetch('/api/health');
        const data = await response.json();

        const apiResponse = document.getElementById('apiResponse');
        apiResponse.innerHTML = `
            <h3><i class="fas fa-heartbeat"></i> Health Check:</h3>
            <pre>${JSON.stringify(data, null, 2)}</pre>
            <p><strong>Status:</strong> <span class="status up">${data.status}</span></p>
        `;
        apiResponse.classList.add('show');
    } catch (error) {
        const apiResponse = document.getElementById('apiResponse');
        apiResponse.innerHTML = `
            <h3><i class="fas fa-exclamation-circle"></i> Health Check Failed:</h3>
            <p>${error.message}</p>
        `;
        apiResponse.classList.add('show');
    }
}

// Get system info
async function getSystemInfo() {
    try {
        const response = await fetch('/api/hello');
        const data = await response.json();

        const systemInfo = document.getElementById('systemInfo');
        systemInfo.innerHTML = `
            <div class="info-item">
                <span class="label">API Status:</span>
                <span class="status up">WORKING</span>
            </div>
            <div class="info-item">
                <span class="label">Last Response:</span>
                <span class="value">${data.time}</span>
            </div>
            <div class="info-item">
                <span class="label">User Agent:</span>
                <span class="value">${navigator.userAgent.substring(0, 50)}...</span>
            </div>
            <div class="info-item">
                <span class="label">Platform:</span>
                <span class="value">${navigator.platform}</span>
            </div>
        `;
    } catch (error) {
        console.error('Error fetching system info:', error);
    }
}

// Refresh page
function refreshPage() {
    location.reload();
}

// Update timestamp from server
async function updateTimestamp() {
    try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        document.getElementById('timestamp').textContent =
            `Server Time: ${data.time}`;
    } catch (error) {
        document.getElementById('timestamp').textContent =
            'Server Time: Unable to fetch';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    getSystemInfo();
    updateTimestamp();

    // Update time every second
    setInterval(updateTime, 1000);

    // Update timestamp every 30 seconds
    setInterval(updateTimestamp, 30000);
});