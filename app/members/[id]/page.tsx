import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ForumSidebar } from "@/components/ForumSidebar";
import { Breadcrumbs } from "@/components/forum/Breadcrumbs";
import { ForumPost } from "@/components/ForumPost";
import { getMemberPosts, getMemberProfile } from "@/data/member-profiles";

type MemberPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: MemberPageProps): Promise<Metadata> {
  const { id } = await params;
  const member = getMemberProfile(id);

  return {
    title: member ? `${member.name} | Thành viên CTBER` : "Thành viên | CTBER",
  };
}

export default async function MemberProfilePage({ params }: MemberPageProps) {
  const { id } = await params;
  const member = getMemberProfile(id);

  if (!member) {
    notFound();
  }

  const posts = getMemberPosts(member.id);

  return (
    <>
      <SiteHeader />
      <main className="site-frame">
        <Breadcrumbs />
        <div className="content-grid">
          <section className="member-profile" aria-labelledby="member-profile-title">
            <Link href="/members" className="member-back-link">← Danh sách thành viên</Link>
            <div className="member-profile-card">
              <div className="member-profile-avatar">{member.name.charAt(0).toUpperCase()}</div>
              <div>
                <p className="member-profile-kicker">Hồ sơ thành viên</p>
                <h1 id="member-profile-title">{member.name}</h1>
                <p className="member-profile-detail">{member.detail || "Thành viên CTBER"}</p>
              </div>
            </div>
            <p className="member-profile-bio">{member.bio}</p>

            <div className="member-post-heading">
              <span>Bài viết của thành viên</span>
              <strong>{posts.length}</strong>
            </div>
            {posts.length > 0 ? (
              posts.map((post) => <ForumPost key={post.id} post={post} />)
            ) : (
              <p className="member-empty">Thành viên này chưa có bài viết hiển thị.</p>
            )}
          </section>
          <ForumSidebar />
        </div>
      </main>
    </>
  );
}
