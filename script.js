// Biến toàn cục cho biểu đồ
let surplusChart = null;
let pieChart = null;

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Thiết lập navigation
    setupNavigation();
    
    // Thiết lập mobile menu
    setupMobileMenu();
    
    // Hiển thị trang mặc định (home) hoặc trang từ hash
    const hash = window.location.hash.substring(1);
    if (hash && ['home', 'simulation', 'knowledge', 'modern', 'about'].includes(hash)) {
        showPage(hash);
    } else {
        showPage('home');
    }
    
    // Tính toán với giá trị mặc định nếu đang ở trang simulation
    setTimeout(() => {
        if (document.getElementById('simulation') && document.getElementById('simulation').classList.contains('active')) {
            calculateSurplusValue();
        }
    }, 200);
});

// Thiết lập navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
}

// Thiết lập mobile menu
function setupMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Đóng menu khi click vào link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// Điều hướng đến trang
function navigateToPage(pageName) {
    // Ẩn tất cả các trang
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Hiển thị trang được chọn
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Ẩn banner nếu không phải trang chủ
        const banner = document.getElementById('banner');
        if (pageName === 'home') {
            if (banner) {
                banner.style.display = 'flex';
                document.body.style.paddingTop = '80px';
            }
        } else {
            if (banner) {
                banner.style.display = 'none';
            }
            // Điều chỉnh padding-top của body
            document.body.style.paddingTop = '80px';
        }
        
        // Cập nhật active state cho menu
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageName) {
                link.classList.add('active');
            }
        });
        
        // Tính toán lại nếu là trang simulation
        if (pageName === 'simulation') {
            setTimeout(() => {
                calculateSurplusValue();
            }, 100);
        }
    }
    
    // Cập nhật URL hash
    window.location.hash = pageName;
}

// Hiển thị trang
function showPage(pageName) {
    navigateToPage(pageName);
}

// Xử lý hash change
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        navigateToPage(hash);
    }
});

// Xử lý hash ban đầu
if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    navigateToPage(hash);
}

// Hàm tính toán giá trị thặng dư
function calculateSurplusValue() {
    // Lấy giá trị từ các input
    const workHours = parseFloat(document.getElementById('workHours').value) || 0;
    const necessaryTime = parseFloat(document.getElementById('necessaryTime').value) || 0;
    const productivity = parseFloat(document.getElementById('productivity').value) || 0;
    const productValue = parseFloat(document.getElementById('productValue').value) || 0;
    const workers = parseFloat(document.getElementById('workers').value) || 0;

    // Kiểm tra giá trị hợp lệ
    if (workHours <= 0 || necessaryTime <= 0 || productivity <= 0 || productValue <= 0 || workers <= 0) {
        alert('Vui lòng nhập các giá trị hợp lệ (lớn hơn 0)');
        return;
    }

    if (necessaryTime >= workHours) {
        alert('Thời gian lao động cần thiết phải nhỏ hơn số giờ lao động trong ngày');
        return;
    }

    // Tính toán các giá trị
    // Thời gian lao động thặng dư
    const surplusTime = workHours - necessaryTime;

    // Tổng sản phẩm tạo ra = số công nhân × số giờ × năng suất
    const totalProducts = workers * workHours * productivity;

    // Tổng giá trị tạo ra = tổng sản phẩm × giá trị mỗi sản phẩm
    const totalValue = totalProducts * productValue;

    // Giá trị sức lao động (v) = số công nhân × thời gian cần thiết × năng suất × giá trị sản phẩm
    // Đây là phần giá trị tương đương với tiền công
    const laborPowerValue = workers * necessaryTime * productivity * productValue;

    // Giá trị thặng dư (m) = số công nhân × thời gian thặng dư × năng suất × giá trị sản phẩm
    const surplusValue = workers * surplusTime * productivity * productValue;

    // Tỷ suất giá trị thặng dư m' = (m / v) × 100%
    const surplusRate = laborPowerValue > 0 ? (surplusValue / laborPowerValue) * 100 : 0;

    // Hiển thị kết quả
    displayResults({
        workHours: workHours,
        necessaryTime: necessaryTime,
        surplusTime: surplusTime,
        productivity: productivity,
        productValue: productValue,
        workers: workers,
        totalProducts: totalProducts,
        totalValue: totalValue,
        laborPowerValue: laborPowerValue,
        surplusValue: surplusValue,
        surplusRate: surplusRate
    });

    // Vẽ biểu đồ
    drawCharts(laborPowerValue, surplusValue, totalValue);
}

// Hàm hiển thị kết quả
function displayResults(data) {
    const resultsDiv = document.getElementById('simulationResults');
    
    // Format số với dấu phẩy ngăn cách hàng nghìn
    const formatNumber = (num) => {
        return new Intl.NumberFormat('vi-VN').format(Math.round(num));
    };

    const formatCurrency = (num) => {
        return formatNumber(num) + ' VNĐ';
    };

    resultsDiv.innerHTML = `
        <div class="result-item primary">
            <div>Giá trị thặng dư (m): <span>${formatCurrency(data.surplusValue)}</span></div>
        </div>
        <div class="result-item secondary">
            <span class="result-label">Tổng giá trị tạo ra:</span>
            <span>${formatCurrency(data.totalValue)}</span>
        </div>
        <div class="result-item info">
            <span class="result-label">Giá trị sức lao động (v):</span>
            <span>${formatCurrency(data.laborPowerValue)}</span>
        </div>
        <div class="result-item secondary">
            <span class="result-label">Tỷ suất giá trị thặng dư (m'):</span>
            <span>${data.surplusRate.toFixed(2)}%</span>
        </div>
        <div class="result-item info">
            <span class="result-label">Thời gian lao động cần thiết:</span>
            <span>${data.necessaryTime.toFixed(1)} giờ</span>
        </div>
        <div class="result-item info">
            <span class="result-label">Thời gian lao động thặng dư:</span>
            <span>${data.surplusTime.toFixed(1)} giờ</span>
        </div>
        <div class="result-item info">
            <span class="result-label">Tổng sản phẩm tạo ra:</span>
            <span>${formatNumber(data.totalProducts)} sản phẩm</span>
        </div>
    `;
}

// Hàm vẽ biểu đồ cột
function drawCharts(laborPowerValue, surplusValue, totalValue) {
    // Biểu đồ cột
    const ctxBar = document.getElementById('surplusChart');
    if (!ctxBar) return;

    // Hủy biểu đồ cũ nếu có
    if (surplusChart) {
        surplusChart.destroy();
    }

    // Tạo biểu đồ cột mới
    surplusChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Tổng giá trị tạo ra', 'Giá trị sức lao động (v)', 'Giá trị thặng dư (m)'],
            datasets: [{
                label: 'Giá trị (VNĐ)',
                data: [totalValue, laborPowerValue, surplusValue],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.8)',   // Xanh dương cho tổng giá trị
                    'rgba(245, 158, 11, 0.8)',  // Vàng cam cho giá trị sức lao động
                    'rgba(30, 64, 175, 0.8)'    // Xanh dương đậm cho giá trị thặng dư
                ],
                borderColor: [
                    'rgba(37, 99, 235, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(30, 64, 175, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = new Intl.NumberFormat('vi-VN').format(Math.round(context.parsed.y));
                            return value + ' VNĐ';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            if (value >= 1000000000) {
                                return (value / 1000000000).toFixed(1) + ' tỷ';
                            } else if (value >= 1000000) {
                                return (value / 1000000).toFixed(1) + ' triệu';
                            } else if (value >= 1000) {
                                return (value / 1000).toFixed(1) + ' nghìn';
                            }
                            return value;
                        }
                    },
                    title: {
                        display: true,
                        text: 'Giá trị (VNĐ)',
                        color: '#2563eb',
                        font: {
                            weight: 'bold'
                        }
                    }
                },
                x: {
                    ticks: {
                        color: '#333',
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        }
    });

    // Biểu đồ tròn
    const ctxPie = document.getElementById('pieChart');
    if (!ctxPie) return;

    // Hủy biểu đồ cũ nếu có
    if (pieChart) {
        pieChart.destroy();
    }

    // Tạo biểu đồ tròn mới
    pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Giá trị sức lao động (v)', 'Giá trị thặng dư (m)'],
            datasets: [{
                data: [laborPowerValue, surplusValue],
                backgroundColor: [
                    'rgba(245, 158, 11, 0.8)',  // Vàng cam cho giá trị sức lao động
                    'rgba(37, 99, 235, 0.8)'   // Xanh dương cho giá trị thặng dư
                ],
                borderColor: [
                    'rgba(245, 158, 11, 1)',
                    'rgba(37, 99, 235, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        color: '#333'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = new Intl.NumberFormat('vi-VN').format(Math.round(context.parsed));
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return label + ': ' + value + ' VNĐ (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Export function để sử dụng trong HTML
window.navigateToPage = navigateToPage;
window.calculateSurplusValue = calculateSurplusValue;
