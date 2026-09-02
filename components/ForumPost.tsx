import type { ForumPostData } from "@/data/forum-posts";
import { PostFooter } from "@/components/forum/PostFooter";

export function ForumPost({ post }: { post: ForumPostData }) {
  const isBirthday = post.variant === "birthday";

  return (
    <article className={`forum-post${isBirthday ? " birthday-post" : ""}`}>
      <h2>{post.title}</h2>
      <div className="post-body">
        <div className="post-meta">Tác giả: {post.meta}</div>
        <div className="post-copy">
          {isBirthday ? (
            <div className="birthday-card" role="img" aria-label="Bánh sinh nhật nhiều màu sắc" />
          ) : (
            <p>{post.body}</p>
          )}
        </div>
        <div className="post-full-link"><span className="new-icon" aria-hidden="true" />Xem bài viết đầy đủ</div>
        <PostFooter />
      </div>
    </article>
  );
}
