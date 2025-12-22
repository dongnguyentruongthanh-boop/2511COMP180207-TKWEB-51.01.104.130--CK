
function hienThiTrangChu(status) {
    var displayHome = status ? 'flex' : 'none';
    var displayBlock = status ? 'block' : 'none';
    var displayPayment = status ? 'none' : 'block';

    // Dùng ?. (optional chaining) hoặc check if để không bị lỗi nếu element không có
    if(document.querySelector('.hero-section')) document.querySelector('.hero-section').style.display = displayHome;
    if(document.getElementById('gioi-thieu')) document.getElementById('gioi-thieu').style.display = displayHome;
    if(document.getElementById('combo-tour')) document.getElementById('combo-tour').style.display = displayBlock;
    if(document.getElementById('lien-he')) document.getElementById('lien-he').style.display = displayBlock;
    if(document.getElementById("section-thanhtoan")) document.getElementById("section-thanhtoan").style.display = displayPayment;
}

function clickNav(element, isHome = false) {
    
    
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) links[i].classList.remove('active');
    element.classList.add('active');

    if (isHome) window.scrollTo({ top: 0, behavior: 'smooth' }); 
}


window.onscroll = () => {
    let current = "";
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Nếu không có section nào (ví dụ trang payment), return luôn
    if (sections.length === 0) return; 

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        // Logic active link giữ nguyên
        if (window.scrollY < 100) {
            if (href === "#" || href === "index.html") link.classList.add('active'); // Fix nhẹ logic về home
        } 
        else if (href === "#" + current) {
            link.classList.add('active');
        }
    });
};

   
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
       
        if (window.scrollY < 100) {
            if (href === "#") link.classList.add('active');
        } 
       
        else if (href === "#" + current || (href === "#" && current === "trang-chu")) {
            link.classList.add('active');
        }
    });










function searchTour() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var keys = ["france", "pháp", "japan", "nhật", "hạ long", "vietnam", "vn"];
    
    var found = false;
    for (var i = 0; i < keys.length; i++) {
        if (input.includes(keys[i])) { found = true; break; }
    }

    if (found) {
        document.getElementById("combo-tour").scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Rất tiếc, World Travel chưa có tour này!");
    }
}


function giaLapDangNhap() {
    var tenUser = document.getElementById("userTitle").value;
    if (tenUser.length > 0) {
     
        var myModalEl = document.getElementById('loginModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

        // 2. Thay đổi nút Đăng nhập thành tên User
        var loginBtn = document.getElementById("navLoginBtn");
        loginBtn.innerHTML = '<i class="bi bi-person-circle me-1"></i> ' + tenUser;
        loginBtn.classList.remove("btn-outline-light");
        loginBtn.classList.add("btn-info");
        
        alert("Chào mừng " + tenUser + " đã quay trở lại!");
    } else {
        alert("Vui lòng nhập tên tài khoản!");
    }
}
function giaLapDangKy() {
    var tenUser = document.getElementById("registerTitle").value;
    if (tenUser.length > 0) {
     
        var myModalEl = document.getElementById('Register');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();

        alert("Chào mừng " + tenUser + " đã đăng ký thành công");
   
    }
}
function xacnhanthanhtoan() {
    alert("Thanh toán thành công! Vé đã gửi về email.")
    window.location.href = "index.html";
}
