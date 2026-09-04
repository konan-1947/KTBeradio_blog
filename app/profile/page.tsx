import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { ForumSidebar } from "@/components/ForumSidebar";
import { Breadcrumbs } from "@/components/forum/Breadcrumbs";
import { ProfileForm } from "@/components/ProfileForm";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Hồ sơ cá nhân | CTBER",
  description: "Xem và cập nhật thông tin hồ sơ cá nhân trên CTBER.",
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/profile");
  }

  const displayName =
    user.user_metadata?.full_name ??
    user.user_metadata?.name ??
    user.email?.split("@")[0] ??
    "Thành viên";
  const initial = displayName.charAt(0).toUpperCase();

  return (
    <>
      <SiteHeader />
      <main className="site-frame profile-page">
        <Breadcrumbs />
        <div className="content-grid">
          <section className="profile-content" aria-labelledby="profile-title">
            <div className="profile-heading">
              <p className="profile-kicker">Tài khoản</p>
              <h1 id="profile-title">Hồ sơ cá nhân</h1>
              <p>Quản lý thông tin hiển thị của bạn trên diễn đàn CTBER.</p>
            </div>

            <div className="profile-layout">
              <aside className="profile-summary">
                <div className="profile-avatar" aria-hidden="true">{initial}</div>
                <h2>{displayName}</h2>
                <span className="profile-role">Thành viên CTBER</span>

                <dl>
                  <div>
                    <dt>Email</dt>
                    <dd>{user.email || "Chưa cập nhật"}</dd>
                  </div>
                  <div>
                    <dt>Tham gia từ</dt>
                    <dd>{new Date(user.created_at).toLocaleDateString("vi-VN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}</dd>
                  </div>
                </dl>
              </aside>

              <ProfileForm initialDisplayName={displayName} />
            </div>
          </section>
          <ForumSidebar />
        </div>
      </main>
    </>
  );
}
