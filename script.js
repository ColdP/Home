// 时间与日期
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options);
    
    document.getElementById('time').textContent = `${hours}:${minutes}`;
    document.getElementById('date').textContent = dateStr;
}

setInterval(updateTime, 1000);
updateTime();

// 每日一言 API
async function fetchQuote() {
    try {
        const response = await fetch('http://v3.wufazhuce.com:8000/api/channel/one/0/0');
        const data = await response.json();
        const quote = data.data.content_list[0].forward;
        document.getElementById('quote').textContent = quote;
    } catch (error) {
        console.error('获取一言失败:', error);
        document.getElementById('quote').textContent = '无法加载每日一言';
    }
}

fetchQuote();

// Google 搜索
function searchGoogle() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

// UA 检测设备类型
document.addEventListener('DOMContentLoaded', function () {
    const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    document.body.classList.add(isMobile ? 'mobile' : 'desktop');
});
