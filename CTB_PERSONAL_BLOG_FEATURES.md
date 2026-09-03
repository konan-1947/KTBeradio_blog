# Đặc tả tính năng CTB Blog cá nhân

## 1. Mục tiêu

CTB được cải tạo thành blog cá nhân để admin và một số người được cấp quyền đăng nội dung. Mọi người có thể đọc nội dung công khai, nhưng quyền viết bài và bình luận phải được kiểm soát theo email.

- Có một tài khoản `admin` duy nhất.
- Chỉ email được admin cấp quyền mới được viết bài.
- Chỉ email được admin cấp quyền mới được bình luận.
- Người không có quyền vẫn được đọc blog công khai.
- Không mở forum tự do cho mọi người ở phiên bản đầu.

## 2. Vai trò người dùng

### Khách

- Xem trang chủ.
- Xem bài viết công khai.
- Tìm kiếm và lọc bài viết.
- Xem ảnh, video, audio hoặc tài liệu được nhúng.
- Không viết bài.
- Không bình luận.

### Người đăng nhập chưa được cấp quyền

- Đăng nhập bằng Google hoặc email/password.
- Đọc nội dung công khai.
- Không viết bài.
- Không bình luận.
- Nhìn thấy thông báo tài khoản chưa được cấp quyền.

### Người được cấp quyền

Quyền viết và quyền bình luận nên tách riêng:

- `can_write`: được tạo bài viết và chỉnh sửa bài của mình.
- `can_comment`: được tạo, sửa và xóa bình luận của mình.

Một người có thể chỉ được bình luận, chỉ được viết bài, hoặc được cả hai quyền.

### Admin duy nhất

- Quản lý toàn bộ bài viết.
- Tạo, sửa, xóa và xuất bản mọi bài viết.
- Quản lý bản nháp.
- Cấp hoặc thu hồi `can_write`.
- Cấp hoặc thu hồi `can_comment`.
- Quản lý danh mục, tag, ảnh và file.
- Duyệt, ẩn hoặc xóa bình luận.
- Xem nhật ký hoạt động.
- Quản lý cài đặt blog.

## 3. Xác thực và cấp quyền

- Đăng nhập Google là lựa chọn ưu tiên.
- Có thể bổ sung email/password.
- Sau khi đăng nhập, hệ thống lấy email đã xác thực từ Supabase Auth.
- Email được chuẩn hóa về chữ thường trước khi kiểm tra.
- Hệ thống tra email trong bảng quyền truy cập.
- Người dùng không được tự cấp quyền cho chính mình.
- Admin là tài khoản duy nhất được thay đổi danh sách quyền.
- Kiểm tra quyền phải được thực thi bằng Supabase RLS, không chỉ bằng điều kiện trong frontend.

## 4. Ma trận quyền

| Loại tài khoản | Đọc | Viết bài | Bình luận |
|---|---:|---:|---:|
| Khách | Có | Không | Không |
| Đăng nhập chưa cấp quyền | Có | Không | Không |
| Chỉ được bình luận | Có | Không | Có |
| Chỉ được viết bài | Có | Có | Không |
| Được viết bài và bình luận | Có | Có | Có |
| Admin | Có | Có | Có |

## 5. Tính năng dành cho người đọc

- Trang chủ hiển thị bài viết mới nhất.
- Bài viết nổi bật do admin chọn.
- Trang chi tiết bài viết.
- Tìm kiếm theo tiêu đề và nội dung.
- Lọc theo danh mục và tag.
- Phân trang.
- Hiển thị tiêu đề, ảnh đại diện, tác giả, ngày đăng và thời gian đọc.
- Chia sẻ bài viết bằng liên kết.
- Trang giới thiệu cá nhân.
- Trang liên hệ.

## 6. Tính năng viết bài

- Tạo bài viết mới.
- Tiêu đề và slug.
- Nội dung rich text hoặc Markdown.
- Đoạn mô tả ngắn.
- Ảnh đại diện.
- Chèn ảnh vào nội dung.
- Chèn video, audio, liên kết ngoài hoặc code block.
- Chọn danh mục.
- Gắn tag.
- Tự động tính thời gian đọc.
- Lưu bản nháp.
- Xem trước.
- Đăng trực tiếp lên blog ngay sau khi tạo hoặc lưu bài.
- Có thể lên lịch đăng nếu hệ thống cần hỗ trợ trong tương lai.

### Trạng thái bài viết

- `draft`: bản nháp.
- `published`: đang hiển thị công khai.
- `archived`: đã lưu trữ.

Người có `can_write = true` được phép đăng trực tiếp bài viết ở trạng thái `published`, không cần admin duyệt. Bản nháp chỉ dùng khi người viết muốn lưu lại để hoàn thiện sau.

## 7. Tính năng bình luận

- Chỉ tài khoản có `can_comment = true` mới thấy form bình luận.
- Admin có thể bật/tắt bình luận theo từng bài viết.
- Bình luận được hiển thị ngay sau khi gửi.
- Người dùng chỉ sửa/xóa bình luận của mình.
- Admin được ẩn hoặc xóa mọi bình luận.
- Có thể thêm trả lời bình luận ở phiên bản sau.
- Có thể thêm báo cáo spam và giới hạn tần suất nếu phát sinh lạm dụng.

### Trạng thái bình luận

- `approved`: được hiển thị ngay sau khi gửi.
- `hidden`: bị admin ẩn.
- `deleted`: đã xóa.

## 8. Dashboard admin

- Thống kê bài viết, bản nháp và bình luận mới.
- Danh sách bài viết với bộ lọc theo trạng thái.
- Quản lý danh mục và tag.
- Quản lý bình luận.
- Quản lý ảnh và file đã upload.
- Quản lý email được cấp quyền.
- Xem lịch sử hoạt động.

### Thông tin một email được cấp quyền

- `email`.
- `can_write`.
- `can_comment`.
- `is_active`.
- `granted_by`.
- `created_at`.
- `updated_at`.
- `expires_at` tùy chọn.

Khi thu hồi quyền, bài đã xuất bản không tự động bị xóa. Người dùng chỉ bị chặn các thao tác mới.

## 9. Ảnh, tài liệu và media

- Ảnh và file lưu trong Supabase Storage.
- Database chỉ lưu đường dẫn và metadata.
- Không lưu ảnh dạng Base64 trong database.
- Kiểm tra loại file và kích thước trước khi upload.
- Có thể trích xuất ảnh từ DOCX rồi chèn vào bài viết.
- Có thể lưu file DOCX/PDF gốc riêng để người đọc tải xuống.
- Có thể tạo thumbnail cho ảnh lớn.
- Không xóa file đang được bài viết sử dụng.

## 10. Mô hình dữ liệu đề xuất

### `profiles`

- `id`, liên kết với `auth.users.id`.
- `email`.
- `display_name`.
- `avatar_url`.
- `created_at`.

### `access_permissions`

Bảng cấp quyền theo email hoặc user id:

- `id`.
- `email` hoặc `user_id`.
- `can_write`.
- `can_comment`.
- `is_active`.
- `granted_by`.
- `created_at`.
- `updated_at`.
- `expires_at` tùy chọn.

### `posts`

- `id`.
- `slug`.
- `title`.
- `excerpt`.
- `content`.
- `featured_image`.
- `author_id`.
- `status`.
- `category_id`.
- `allow_comments`.
- `reading_time`.
- `published_at`.
- `created_at`.
- `updated_at`.

### `categories`

- `id`.
- `name`.
- `slug`.
- `description`.

### `tags` và `post_tags`

- `tags`: `id`, `name`, `slug`.
- `post_tags`: `post_id`, `tag_id`.

### `comments`

- `id`.
- `post_id`.
- `author_id`.
- `content`.
- `status`.
- `created_at`.
- `updated_at`.

### `media_files`

- `id`.
- `file_name`.
- `storage_path`.
- `mime_type`.
- `file_size`.
- `uploaded_by`.
- `created_at`.

### `audit_logs`

- `id`.
- `actor_id`.
- `action`.
- `target_type`.
- `target_id`.
- `metadata`.
- `created_at`.

## 11. Quy tắc RLS bắt buộc

- Ai cũng được đọc bài có `status = 'published'`.
- Chỉ admin được cấp hoặc thu hồi quyền.
- Chỉ `can_write = true` mới được tạo bài.
- Người viết chỉ được sửa bài của mình; admin được sửa mọi bài.
- Chỉ `can_comment = true` mới được tạo bình luận.
- Người dùng chỉ được sửa/xóa bình luận của mình.
- Chỉ admin được duyệt, ẩn hoặc xóa bình luận của người khác.
- Chỉ bài `published` được public đọc; bản nháp chỉ hiển thị cho người viết và admin.
- Không đưa `service_role` hoặc `secret key` vào frontend.

## 12. MVP nên triển khai trước

1. Trang chủ và trang chi tiết bài viết.
2. Đăng nhập Google.
3. Một admin duy nhất.
4. Bảng cấp quyền theo email.
5. Hai quyền `can_write` và `can_comment`.
6. Tạo/sửa bản nháp và xuất bản bài viết.
7. Bình luận đăng trực tiếp, admin có thể ẩn hoặc xóa.
8. Upload ảnh vào Supabase Storage.
9. Danh mục và tìm kiếm cơ bản.
10. RLS cho toàn bộ bảng.

## 13. Chưa cần triển khai

- Thành viên online realtime.
- Forum mở cho mọi người tự tạo chủ đề.
- Kết bạn, nhắn tin hoặc follow thành viên.
- Điểm thưởng và huy hiệu.
- Chat realtime.
- Thống kê forum kiểu cũ.
