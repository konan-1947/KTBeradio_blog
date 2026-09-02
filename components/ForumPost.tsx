type ForumPostProps = {
  title: string;
  meta: string;
  birthday?: boolean;
  children: React.ReactNode;
};

export function ForumPost({ title, meta, birthday, children }: ForumPostProps) {
  return (
    <article className={`forum-post${birthday ? " birthday-post" : ""}`}>
      <h2>{title}</h2>
      <div className="post-body">
        <div className="post-meta">Tác giả: {meta}</div>
        <div className="post-copy">{children}</div>
        <div className="post-full-link"><span className="new-icon" aria-hidden="true" />Xem bài viết đầy đủ</div>
        <div className="post-footer">
          <span>Thảo luận trong box <strong>‘Thư viện Media’</strong></span>
          <span>0 Bình luận / 6 Đọc</span>
        </div>
      </div>
    </article>
  );
}
