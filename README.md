# Lab: React Hooks Cơ Bản - Bảng Quản Lý Công Việc Chi Tiết

Bài tập này yêu cầu bạn sử dụng `useState` để xử lý form nhiều trường dữ liệu, thao tác với mảng và tính toán thống kê cơ bản.

## 📝 Yêu cầu bài tập

Hoàn thiện các tính năng sau dựa trên bộ khung giao diện có sẵn:
1. **Form thêm công việc:** 
   - Lấy dữ liệu từ ô nhập "Tên công việc" và dropdown "Mức độ ưu tiên" (Cao, Trung bình, Thấp).
   - Khi nhấn "Thêm", tạo một công việc mới đưa vào danh sách. Không cho phép thêm nếu tên công việc bị bỏ trống.
2. **Hiển thị danh sách:** Render danh sách công việc. Những công việc đã hoàn thành cần được làm mờ hoặc gạch ngang chữ.
3. **Thao tác trên từng công việc:**
   - Nút "Đổi trạng thái": Chuyển đổi qua lại giữa "Chưa làm" và "Hoàn thành".
   - Nút "Xóa": Xóa công việc tương ứng khỏi mảng.
4. **Khu vực thống kê (Thực hiện render động):**
   - Hiển thị "Tổng số công việc".
   - Hiển thị "Số công việc đã hoàn thành".
   - Hiển thị "Số công việc chưa làm".
5. **Xóa hàng loạt:** Nút "Xóa các mục đã xong" sẽ lọc và loại bỏ toàn bộ các công việc có trạng thái đã hoàn thành.
