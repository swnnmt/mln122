// Event data for interactive timeline
const eventData = {
    tulip: {
        year: '1637',
        title: 'Bong bóng hoa Tulip',
        description: 'Bong bóng hoa Tulip (Tulip Mania) là một trong những ví dụ đầu tiên về bong bóng đầu cơ trong lịch sử tài chính. Vào thế kỷ 17 tại Hà Lan, giá hoa tulip tăng vọt đến mức một củ tulip có thể đổi được một ngôi nhà. Tuy nhiên, bong bóng này nhanh chóng vỡ, khiến nhiều nhà đầu tư mất trắng.',
        lesson: 'Bài học về tâm lý thị trường và đầu cơ không có cơ sở. Sự kiện này cho thấy giá cả có thể tách rời hoàn toàn khỏi giá trị thực tế khi tâm lý đám đông chi phối thị trường.',
        image : 'MLN/Tulipomania.jpg'
    },
    wallstreet: {
        year: '1929',
        title: 'Sụp đổ Phố Wall',
        description: 'Ngày 24 tháng 10 năm 1929, thị trường chứng khoán Mỹ sụp đổ, mở đầu cho cuộc Đại Suy thoái (Great Depression) kéo dài đến những năm 1930. Chỉ số Dow Jones giảm gần 90% từ đỉnh, hàng triệu người mất việc làm, và nền kinh tế toàn cầu rơi vào khủng hoảng sâu sắc.',
        lesson: 'Dẫn đến sự ra đời của Ủy ban Chứng khoán Mỹ (SEC) và các quy định tài chính mới. Bài học về tầm quan trọng của giám sát thị trường, minh bạch thông tin, và bảo vệ nhà đầu tư nhỏ.',
        image : 'MLN/R.jpg'
    },
    bretton: {
        year: '1971',
        title: 'Hệ thống Bretton Woods sụp đổ',
        description: 'Tổng thống Mỹ Richard Nixon tuyên bố chấm dứt chuyển đổi USD sang vàng, kết thúc hệ thống Bretton Woods được thiết lập sau Thế chiến II. Điều này chấm dứt bản vị vàng và đưa USD trở thành tiền tệ dự trữ chính của thế giới với tỷ giá thả nổi.',
        lesson: 'Mở ra kỷ nguyên của tiền tệ fiat và tỷ giá thả nổi. Bài học về sự linh hoạt cần thiết trong chính sách tiền tệ và tác động của quyết định tài chính quốc gia đến nền kinh tế toàn cầu.',
        image : 'MLN/bretton-woods-la-gi-2.jpg'
    },
    asia: {
        year: '1997',
        title: 'Khủng hoảng tài chính châu Á',
        description: 'Bắt đầu từ Thái Lan với việc phá giá đồng baht, khủng hoảng nhanh chóng lan rộng sang các nước châu Á khác như Indonesia, Hàn Quốc, Malaysia. Nguyên nhân chính là dòng vốn nóng (hot money), chính sách tỷ giá cố định không bền vững, và nợ nước ngoài quá lớn.',
        lesson: 'Tầm quan trọng của quản lý dòng vốn nóng, chính sách tỷ giá linh hoạt, và xây dựng dự trữ ngoại hối. Các quốc gia học cách tăng cường giám sát ngân hàng và quản lý nợ nước ngoài hiệu quả hơn.',
        image : 'MLN/khung hoang tai chinh chau a.webp'
    },
    dotcom: {
        year: '2000',
        title: 'Bong bóng Dot-com',
        description: 'Sự bùng nổ của các công ty internet trong những năm 1990 dẫn đến bong bóng đầu cơ lớn. Nhiều công ty công nghệ được định giá hàng tỷ USD dù chưa có lợi nhuận. Khi bong bóng vỡ vào năm 2000, hàng nghìn công ty phá sản, và thị trường chứng khoán công nghệ mất hàng nghìn tỷ USD giá trị.',
        lesson: 'Bài học về định giá hợp lý và phân tích cơ bản. Nhấn mạnh tầm quan trọng của việc đánh giá giá trị thực tế của công ty thay vì chỉ dựa vào xu hướng và hype. Vẫn còn giá trị cho các nhà đầu tư công nghệ hiện nay (AI, startup, crypto).',
        image : 'MLN/bong bong dotcom.jpg'
    },
    crisis: {
        year: '2008',
        title: 'Khủng hoảng tài chính toàn cầu',
        description: 'Cuộc khủng hoảng tài chính lớn nhất kể từ 1929, bắt đầu từ thị trường nhà đất dưới chuẩn (subprime) ở Mỹ. Ngân hàng Lehman Brothers phá sản, gây ra hiệu ứng domino trên toàn cầu. Hàng triệu người mất nhà, các ngân hàng lớn phải được cứu trợ, và nền kinh tế toàn cầu rơi vào suy thoái.',
        lesson: 'Thúc đẩy các quy định như Dodd-Frank Act để kiểm soát rủi ro "Too Big to Fail". Các ngân hàng phải duy trì tỷ lệ vốn cao hơn, thực hiện stress testing thường xuyên, và quản lý rủi ro chặt chẽ hơn. Bài học về tầm quan trọng của giám sát và quản lý rủi ro hệ thống.',
        image : 'MLN/khung-hoang-tai-chinh toan cau.jpg'
    },
    crypto: {
        year: '2010+',
        title: 'Sự trỗi dậy của tiền điện tử',
        description: 'Bitcoin, được tạo ra vào năm 2009, đã mở ra một chương mới trong lịch sử tài chính. Blockchain và công nghệ phân tán thách thức hệ thống tài chính truyền thống. Tiền điện tử, DeFi (Decentralized Finance), và NFT đã tạo ra các hình thức đầu tư và giao dịch hoàn toàn mới.',
        lesson: 'Blockchain và DeFi thách thức hệ thống tài chính truyền thống. Các ngân hàng trung ương đang nghiên cứu CBDC (Central Bank Digital Currency) và các quy định mới cho tài sản số. Bài học về sự đổi mới công nghệ và tầm quan trọng của việc thích ứng với thay đổi.',
        image : 'MLN/su troi day cua tien dien tu.webp'
    }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMobileMenu();
    initInteractiveTimeline();
    initScrollAnimations();
    initFeedbackForm();
});

// Navigation smooth scroll
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
    const sections = document.querySelectorAll('.section, .hero-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle) {
        toggle.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
}

// Interactive timeline
function initInteractiveTimeline() {
    const interactiveItems = document.querySelectorAll('.interactive-item');
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.modal-close');

    interactiveItems.forEach(item => {
        item.addEventListener('click', function() {
            const eventKey = this.getAttribute('data-event');
            const event = eventData[eventKey];
            
            if (event) {
                showEventModal(event);
            }
        });
    });

    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

function showEventModal(event) {
    const modal = document.getElementById('eventModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="event-detail">
            <div class="event-detail-year">${event.year}</div>
            <h2 class="event-detail-title">${event.title}</h2>
            <div class="event-detail-image">
                <img src="${event.image}" alt="${event.title}" />
            </div>
            <div class="event-detail-description">
                ${event.description}
            </div>
            <div class="event-detail-lesson">
                <h4>📚 Bài học rút ra:</h4>
                <p>${event.lesson}</p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Scroll animations for timeline items
function initScrollAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Feedback form
function initFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Here you would typically send the data to a server
            // For now, we'll just show an alert
            alert(`Cảm ơn bạn ${name} đã gửi phản hồi!\n\nChúng tôi đã nhận được phản hồi của bạn và sẽ xem xét trong thời gian sớm nhất.`);
            
            // Reset form
            form.reset();
        });
    }
}

// Smooth scroll for hero buttons
document.addEventListener('DOMContentLoaded', function() {
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});
