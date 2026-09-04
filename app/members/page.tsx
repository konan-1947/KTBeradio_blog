import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ForumSidebar } from "@/components/ForumSidebar";
import { Breadcrumbs } from "@/components/forum/Breadcrumbs";
import { memberProfiles } from "@/data/member-profiles";

export const metadata: Metadata = {
  title: "Thành viên | CTBER",
  description: "Danh sách thành viên của cộng đồng CTBER.",
};

export default function MembersPage() {
  return (
    <>
      <SiteHeader />
      <main className="site-frame">
        <Breadcrumbs />
        <div className="content-grid">
          <section className="member-page" aria-labelledby="members-title">
            <h1 id="members-title" className="forum-heading">Thành viên CTBER</h1>
            <div className="member-directory">
              {memberProfiles.map((member) => (
                <Link href={`/members/${member.id}`} key={member.id} className="member-card">
                  <span className="member-card-avatar">{member.name.charAt(0).toUpperCase()}</span>
                  <span className="member-card-copy">
                    <strong>{member.name}</strong>
                    <small>{member.detail || "Thành viên CTBER"}</small>
                  </span>
                </Link>
              ))}
            </div>
          </section>
          <ForumSidebar />
        </div>
      </main>
    </>
  );
}
