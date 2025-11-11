# Website "Giá trị thặng dư 4.0"

## Giới thiệu

Website học tập sáng tạo mô phỏng giá trị thặng dư (theo học thuyết Karl Marx) trong bối cảnh nền kinh tế hiện đại, phục vụ cho sản phẩm sáng tạo môn Kinh tế chính trị Mác – Lênin.

## Cấu trúc Website

Website được thiết kế dạng Single Page Application (SPA) với 4 màn hình chính:

### 1️⃣ Header & Banner
- **Logo**: "Giá trị thặng dư 4.0"
- **Menu điều hướng**: Trang chủ | Mô phỏng | Kiến thức | Ứng dụng thực tế | Giới thiệu
- **Banner**: Hình ảnh dây chuyền sản xuất hiện đại với tiêu đề chính và nút "Bắt đầu mô phỏng ngay"

### 2️⃣ Trang chủ (Home)
- Giới thiệu khái niệm giá trị thặng dư
- Sơ đồ quá trình sản xuất (Tư bản → Lao động → Hàng hóa → Giá trị thặng dư)
- Nút điều hướng đến các trang khác

### 3️⃣ Mô phỏng (Simulation)
Form nhập liệu với các trường:
- **Số giờ lao động / ngày**: Thời gian công nhân làm việc
- **Thời gian lao động cần thiết**: Số giờ tái sản xuất sức lao động
- **Năng suất lao động**: Sản lượng / giờ
- **Giá trị mỗi sản phẩm (VNĐ)**: Giá trị hàng hóa
- **Số lượng công nhân**: Tổng lao động

Kết quả hiển thị:
- Tổng giá trị tạo ra
- Giá trị sức lao động (v)
- Giá trị thặng dư (m)
- Tỷ suất giá trị thặng dư: m' = (m/v) × 100%
- Biểu đồ cột và biểu đồ tròn trực quan

### 4️⃣ Kiến thức (Knowledge)
Nội dung học thuật về:
- Giá trị, giá trị sử dụng, giá trị trao đổi
- Lao động trừu tượng
- Giá trị thặng dư tuyệt đối và tương đối
- Tỷ suất giá trị thặng dư
- Quá trình sản xuất giá trị thặng dư

### 5️⃣ Ứng dụng thực tế (Modern Economy)
Liên hệ học thuyết Mác với thực tiễn:
- Giá trị thặng dư trong nền kinh tế số
- Ví dụ: Grab, Shopee, Amazon, AI và dữ liệu
- Tác động đến thu nhập và bất bình đẳng
- Gợi ý giải pháp phát triển bền vững

### 6️⃣ Giới thiệu (About)
- Về dự án
- Mục tiêu
- Tính năng

### 7️⃣ Footer
- Thông tin nhóm và lớp học
- Nguồn tham khảo
- Liên hệ / Góp ý

## Cách sử dụng

### Mở website
1. Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge, Safari...)
2. Website sẽ tự động tải và hiển thị trang chủ với banner

### Điều hướng
- Click vào các mục trong menu để chuyển đổi giữa các trang
- Sử dụng nút "Bắt đầu mô phỏng ngay" trong banner để đến trang Mô phỏng
- URL hash sẽ tự động cập nhật (ví dụ: `#simulation`, `#knowledge`)

### Sử dụng công cụ tính toán
1. Điều hướng đến trang **"Mô phỏng"**
2. Nhập các thông số:
   - Số giờ lao động / ngày (ví dụ: 8)
   - Thời gian lao động cần thiết (ví dụ: 4)
   - Năng suất lao động (ví dụ: 10 sản phẩm/giờ)
   - Giá trị mỗi sản phẩm (ví dụ: 50,000 VNĐ)
   - Số lượng công nhân (ví dụ: 100)
3. Nhấn nút **"Tính toán"** để xem kết quả
4. Kết quả sẽ hiển thị:
   - Giá trị thặng dư (m)
   - Tổng giá trị tạo ra
   - Giá trị sức lao động (v)
   - Tỷ suất giá trị thặng dư (m')
   - Biểu đồ cột và tròn minh họa

## Công nghệ sử dụng

- **HTML5** - Cấu trúc website
- **CSS3** - Thiết kế giao diện với màu chủ đạo đỏ (#B22222), trắng, vàng (#FFD700)
- **JavaScript (Vanilla)** - Logic tính toán, navigation và tương tác
- **Chart.js** - Thư viện vẽ biểu đồ (CDN)

## Màu sắc và thiết kế

- **Màu chủ đạo**: Đỏ đậm (#B22222, #8B0000)
- **Màu nhấn**: Vàng (#FFD700)
- **Màu nền**: Trắng và xám nhạt (#f9f9f9)
- **Thiết kế**: Hiện đại, tối giản, dễ đọc, responsive

## Tính năng

✅ Navigation menu với 5 trang chính
✅ Banner động với nút call-to-action
✅ Công cụ tính toán tương tác với form nhập liệu chi tiết
✅ Biểu đồ cột và tròn trực quan (Chart.js)
✅ Nội dung học thuật đầy đủ về giá trị thặng dư
✅ Liên hệ với thực tiễn nền kinh tế số
✅ Responsive design - Tương thích mobile, tablet, desktop
✅ Single Page Application (SPA) - Chuyển đổi mượt mà giữa các trang
✅ Không cần cài đặt - Chạy trực tiếp trên trình duyệt

## Công thức tính toán

### Giá trị thặng dư (m)
```
m = Số công nhân × Thời gian lao động thặng dư × Năng suất × Giá trị sản phẩm
```

### Giá trị sức lao động (v)
```
v = Số công nhân × Thời gian lao động cần thiết × Năng suất × Giá trị sản phẩm
```

### Tỷ suất giá trị thặng dư (m')
```
m' = (m / v) × 100%
```

## Lưu ý

- Website sử dụng Chart.js từ CDN, cần kết nối internet để hiển thị biểu đồ
- Các giá trị tính toán được làm tròn đến số nguyên
- Website hoạt động tốt nhất trên các trình duyệt hiện đại
- Thời gian lao động cần thiết phải nhỏ hơn số giờ lao động trong ngày

## Mục tiêu

Website giúp:
- Sinh viên hiểu sâu về giá trị thặng dư thông qua mô phỏng trực quan
- Giảng viên có công cụ giảng dạy sinh động, dễ sử dụng
- Liên hệ lý thuyết Mác – Lênin với thực tiễn nền kinh tế hiện đại
- Tạo hứng thú học tập thông qua tương tác và trực quan hóa

---

© 2024 - Giá trị thặng dư 4.0. Tất cả quyền được bảo lưu.
