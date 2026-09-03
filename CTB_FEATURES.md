# Các tính năng có thể có của CTB Blog/Forum

Tài liệu này mô tả các tính năng có thể có của CTB dựa trên giao diện hiện tại, ảnh tham khảo và cấu trúc frontend đang có.

> Lưu ý: một số tính năng được nhìn thấy trực tiếp trên giao diện; một số khác là suy luận hợp lý từ cách một blog/forum như CTB thường hoạt động. Project hiện tại mới chủ yếu là frontend với dữ liệu tĩnh, chưa có backend/database hoàn chỉnh.

> Đặc tả đã thu gọn theo hướng blog cá nhân, chỉ cho phép email được cấp quyền viết bài hoặc bình luận, nằm trong file [CTB_PERSONAL_BLOG_FEATURES.md](./CTB_PERSONAL_BLOG_FEATURES.md).

## 1. Điều hướng chính

- Trang chủ (`Home`)
- Diễn đàn (`Diễn đàn`)
- Khu vực Media (`Media`)
- Danh sách thành viên (`Thành viên`)
- Breadcrumb hoặc đường dẫn điều hướng trong từng khu vực
- Các liên kết phụ như:
  - Hoạt động
  - Có gì mới?
  - Trợ giúp

## 2. Tài khoản và xác thực

- Đăng ký tài khoản
- Đăng nhập
- Đăng xuất
- Đăng nhập bằng Google hoặc các OAuth provider khác
- Quên mật khẩu và đặt lại mật khẩu
- Duy trì phiên đăng nhập
- Trang hồ sơ cá nhân
- Tên hiển thị, avatar và thông tin giới thiệu
- Hiển thị trạng thái online/offline

### Vai trò người dùng

- Khách chưa đăng nhập:
  - Xem bài viết công khai
  - Xem media công khai
  - Tìm kiếm nội dung
- Thành viên:
  - Bình luận
  - Đăng bài hoặc đăng tin nhanh
  - Chỉnh sửa nội dung do mình tạo
  - Quản lý thông tin cá nhân
- Quản trị viên:
  - Quản lý người dùng
  - Duyệt, sửa hoặc xóa bài viết
  - Quản lý bình luận
  - Quản lý media và danh mục
  - Xem thống kê hệ thống

## 3. Trang chủ

- Hiển thị các bài viết mới nhất
- Hiển thị bài viết nổi bật
- Hiển thị tiêu đề, tác giả và thời gian đăng
- Hiển thị một phần nội dung xem trước
- Liên kết đến bài viết đầy đủ
- Hiển thị số lượt đọc và số bình luận
- Sidebar bên phải chứa các khối thông tin:
  - Media mới đăng
  - Thành viên mới hoặc thành viên đang chia sẻ
  - Thành viên đang online
  - Thống kê diễn đàn
- Phân trang danh sách bài viết

## 4. Diễn đàn

### Danh mục và chủ đề

- Danh sách danh mục diễn đàn
- Ví dụ danh mục: `Thư viện Media`
- Danh sách chủ đề trong từng danh mục
- Hiển thị chủ đề mới nhất
- Hiển thị người tạo chủ đề
- Hiển thị thời gian cập nhật gần nhất
- Hiển thị số lượt đọc
- Hiển thị số bình luận
- Sắp xếp theo:
  - Mới nhất
  - Nhiều lượt xem nhất
  - Nhiều bình luận nhất

### Bài viết

- Xem bài viết đầy đủ
- Tiêu đề bài viết
- Nội dung văn bản
- Hình ảnh trong bài viết
- Video hoặc liên kết media được nhúng
- Tác giả và thời gian đăng
- Chỉnh sửa bài viết
- Xóa bài viết
- Ghim bài viết
- Đánh dấu bài viết nổi bật
- Chia sẻ bài viết
- Sao chép liên kết bài viết

### Đăng tin nhanh

- Form đăng tin nhanh từ trang chủ hoặc khu vực diễn đàn
- Nhập tiêu đề
- Nhập nội dung
- Chọn danh mục
- Đính kèm hình ảnh hoặc media
- Lưu bản nháp
- Đăng công khai sau khi gửi

## 5. Bình luận và tương tác

- Bình luận dưới bài viết
- Hiển thị danh sách bình luận
- Trả lời bình luận
- Chỉnh sửa bình luận của mình
- Xóa bình luận của mình
- Báo cáo bình luận vi phạm
- Hiển thị số lượng bình luận
- Theo dõi lượt đọc bài viết
- Thích hoặc reaction cho bài viết
- Theo dõi một chủ đề
- Nhận thông báo khi có bình luận mới

## 6. Khu vực Media

- Danh sách media mới đăng
- Thumbnail cho từng media
- Tiêu đề media
- Mô tả ngắn
- Thời lượng media
- Trang chi tiết media
- Phát video hoặc audio
- Tìm kiếm media
- Lọc media theo danh mục
- Lọc theo thời lượng hoặc ngày đăng
- Đính kèm media vào bài viết
- Lưu URL nguồn hoặc file media
- Tải lên media nếu người dùng có quyền
- Quản lý thumbnail

Các loại media có thể hỗ trợ:

- Video
- Audio
- Hình ảnh
- File tài liệu như DOCX hoặc PDF

## 7. Tìm kiếm

- Tìm kiếm bài viết theo tiêu đề
- Tìm kiếm theo nội dung
- Tìm kiếm theo tên tác giả
- Tìm kiếm media
- Lọc theo danh mục
- Lọc theo khoảng thời gian
- Hiển thị kết quả phân trang
- Hiển thị thông báo khi không có kết quả

## 8. Thành viên

- Danh sách thành viên
- Tìm kiếm thành viên
- Trang hồ sơ thành viên
- Avatar và tên hiển thị
- Bài viết của thành viên
- Bình luận của thành viên
- Ngày tham gia
- Trạng thái online/offline
- Danh sách thành viên mới nhất
- Danh sách thành viên đang hoạt động
- Theo dõi hoặc kết nối với thành viên khác

## 9. Thống kê diễn đàn

Giao diện CTB hiện có khu vực thống kê như:

- Tổng số chủ đề
- Tổng số bài viết
- Tổng số thành viên
- User record cao nhất
- Thành viên mới nhất
- Số thành viên đang trực tuyến
- Số khách đang truy cập
- Lượt xem bài viết
- Lượt bình luận

## 10. Quản trị và kiểm duyệt

- Dashboard quản trị
- Quản lý bài viết
- Quản lý danh mục
- Quản lý media
- Quản lý thành viên
- Phân quyền admin/moderator/member
- Duyệt bài trước khi công khai
- Ẩn hoặc xóa bài viết vi phạm
- Khóa tài khoản
- Xử lý báo cáo
- Quản lý bài viết bị báo cáo
- Nhật ký hoạt động quản trị

## 11. Thông báo

- Thông báo khi bài viết được duyệt
- Thông báo khi có bình luận mới
- Thông báo khi có người trả lời bình luận
- Thông báo khi bài viết bị xóa hoặc ẩn
- Đánh dấu đã đọc/chưa đọc
- Danh sách thông báo cá nhân

## 12. Nội dung và trình soạn thảo

- Soạn thảo văn bản có định dạng
- Tiêu đề và heading
- In đậm, in nghiêng, gạch chân
- Danh sách có thứ tự và không thứ tự
- Chèn liên kết
- Chèn hình ảnh
- Chèn video hoặc audio
- Chèn code block
- Chèn trích dẫn
- Xem trước bài viết
- Lưu nội dung dạng Markdown hoặc HTML
- Tự động tạo slug từ tiêu đề
- Tự động tính thời gian đọc

## 13. Mô hình dữ liệu đề xuất

Để hỗ trợ các tính năng trên, CTB có thể có các entity chính sau:

### `users`

- `id`
- `email`
- `display_name`
- `avatar_url`
- `role`
- `created_at`
- `last_seen_at`

### `categories`

- `id`
- `name`
- `slug`
- `description`
- `type`: forum, blog hoặc media
- `created_at`

### `posts`

- `id`
- `slug`
- `title`
- `content`
- `excerpt`
- `author_id`
- `category_id`
- `featured_image`
- `status`: draft, pending, published, archived
- `is_featured`
- `view_count`
- `created_at`
- `updated_at`

### `comments`

- `id`
- `post_id`
- `author_id`
- `parent_id` nếu hỗ trợ trả lời bình luận
- `content`
- `status`
- `created_at`
- `updated_at`

### `media`

- `id`
- `title`
- `description`
- `media_type`
- `file_path` hoặc `external_url`
- `thumbnail_path`
- `duration`
- `uploaded_by`
- `view_count`
- `created_at`

### `post_media`

Bảng liên kết nhiều-nhiều giữa bài viết và media:

- `post_id`
- `media_id`
- `display_order`

### `reactions`

- `id`
- `post_id` hoặc `comment_id`
- `user_id`
- `type`
- `created_at`

### `notifications`

- `id`
- `user_id`
- `type`
- `message`
- `target_url`
- `is_read`
- `created_at`

## 14. Mapping với frontend hiện tại

Frontend hiện tại đang mô phỏng một phần dữ liệu bằng các TypeScript object:

- `ForumPostData`: dữ liệu bài viết forum
- `MediaItem`: dữ liệu media ở sidebar
- `MemberItem`: thành viên mới hoặc thành viên đang chia sẻ
- `onlineMembers`: chuỗi tên thành viên online
- `forumStats`: các số liệu thống kê forum

Các dữ liệu này hiện nằm trong các file:

- `data/forum-posts.ts`
- `data/media-items.ts`
- `data/sidebar-data.ts`

Để biến CTB thành blog/forum hoạt động thật, các mảng dữ liệu tĩnh trên có thể được thay bằng dữ liệu lấy từ Supabase, kèm theo RLS để kiểm soát quyền đọc và ghi.

## 15. Phân chia mức độ ưu tiên

### MVP nên có

- Trang chủ
- Danh mục forum
- Danh sách và chi tiết bài viết
- Đăng nhập/đăng ký
- Đăng bài
- Bình luận
- Tìm kiếm cơ bản
- Khu vực media
- Trang hồ sơ thành viên
- Phân quyền admin

### Có thể phát triển sau

- Đăng nhập Google
- Reaction và theo dõi chủ đề
- Thông báo realtime
- Upload media
- Duyệt bài
- Báo cáo nội dung
- Tìm kiếm nâng cao
- Thống kê chi tiết
- Hệ thống huy hiệu hoặc điểm thành viên
- PWA và thông báo trình duyệt
