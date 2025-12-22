
const tourData = {
    "france": {
        title: " Tour Khám Phá Paris Mộng Mơ ",
        image: "../pictures/france.jpg",
        price: "15.900.000đ",
        date: "15/01/2026",
        start: "Sân bay Tân Sơn Nhất",
        duration: "5 Ngày 4 Đêm",
        description: "Hành trình khám phá 'Kinh đô ánh sáng' với những điểm đến biểu tượng và thơ mộng nhất nước Pháp.",
        experiences: `
            <li class="list-group-item py-3">
                <h5 class="fw-bold"><i class="bi bi-camera-fill text-info me-2"></i> Thăm tháp Eiffel & Bảo tàng Louvre</h5>
            </li>
            <li class="list-group-item py-3">
                <h5 class="fw-bold"><i class="bi bi-cup-hot-fill text-info me-2"></i> Trải nghiệm văn hóa Cafe vỉa hè</h5>
            </li>
            <li class="list-group-item py-3">
                <h5 class="fw-bold"><i class="bi bi-water text-info me-2"></i> Du thuyền trên sông Seine</h5>
            </li>`
    },
    "japan": {
        title: "Khám Phá Xứ Sở Hoa Anh Đào",
        image: "../pictures/japan.jpg",
        price: "22.500.000đ",
        date: "20/03/2026",
        start: "Sân bay Nội Bài",
        duration: "6 Ngày 5 Đêm",
        description: "Hành trình đưa bạn đến với vẻ đẹp tĩnh lặng của núi Phú Sĩ và sự hiện đại bậc nhất của Tokyo.",
        experiences: `
            <li class="list-group-item py-3">
                <h5 class="fw-bold"><i class="bi bi-flower1 text-info me-2"></i> Ngắm hoa Anh Đào tại công viên Ueno</h5>
            </li>
            <li class="list-group-item py-3">
                <h5 class="fw-bold"><i class="bi bi-snow text-info me-2"></i> Chinh phục núi Phú Sĩ</h5>
            </li>
            <li class="list-group-item py-3">
                <h5 class="fw-bold"><i class="bi bi-lightning-charge-fill text-info me-2"></i> Trải nghiệm tàu Shinkansen</h5>
            </li>`
    },
    "halong": {
        title: "Vịnh Hạ Long Luxury",
        image: "../pictures/vinhhalong.jpg",
        price: "3.200.000đ",
        date: "Hàng ngày",
        start: "Cảng Tuần Châu",
        duration: "2 Ngày 1 Đêm",
        description: "Tận hưởng kỳ nghỉ sang trọng trên du thuyền 5 sao giữa lòng kỳ quan thiên nhiên thế giới.",
        experiences: `
            <li class="list-group-item py-3">
                <h5 class="fw-bold"><i class="bi bi-ship text-info me-2"></i> Nghỉ dưỡng du thuyền 5 sao</h5>
            </li>
            <li class="list-group-item py-3">
                <h5 class="fw-bold"><i class="bi bi-water text-info me-2"></i> Khám phá Hang Sửng Sốt</h5>
            </li>
            <li class="list-group-item py-3">
                <h5 class="fw-bold"><i class="bi bi-brightness-high-fill text-info me-2"></i> Ngắm bình minh trên Vịnh</h5>
            </li>`
    }
};


const urlParams = new URLSearchParams(window.location.search);
const tourId = urlParams.get('id');


if (tourId && tourData[tourId]) {
    const tour = tourData[tourId];

   
    document.getElementById('tour-title').innerText = tour.title;
    document.getElementById('tour-img').src = tour.image;
    document.getElementById('tour-price').innerText = "Giá tour: " + tour.price;
    document.getElementById('tour-date').innerText = tour.date;
    document.getElementById('tour-start').innerText = tour.start;
    document.getElementById('tour-duration').innerText = tour.duration;
    document.getElementById('tour-desc').innerText = tour.description;
    document.getElementById('tour-exp').innerHTML = tour.experiences;
} else {
    
    console.error("Không tìm thấy dữ liệu tour!");
}

