import { forumPosts } from "@/data/forum-posts";
import { Breadcrumbs } from "@/components/forum/Breadcrumbs";
import { ForumHeading } from "@/components/forum/ForumHeading";
import { ForumPost } from "@/components/ForumPost";
import { ForumSidebar } from "@/components/ForumSidebar";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="site-frame">
        <Breadcrumbs />
        <div className="content-grid">
          <section className="post-list" aria-label="Bài viết diễn đàn">
            <ForumHeading />
            <div className="section-label">Đăng tin nhanh</div>
            {forumPosts.map((post) => (
              <ForumPost key={post.id} post={post} />
            ))}
          </section>
          <ForumSidebar />
        </div>
      </main>
    </>
  );
}
