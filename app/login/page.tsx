import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { LoginForm } from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Đăng nhập | CTBER",
  description: "Đăng nhập vào diễn đàn CTBER.",
};

type LoginPageProps = {
  searchParams: Promise<{ next?: string | string[] }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { next } = await searchParams;
  const nextPath = typeof next === "string" ? next : undefined;

  return (
    <>
      <SiteHeader />
      <main className="login-page">
        <div className="login-breadcrumbs">
          <Link href="/">Trang chủ</Link>
          <span>›</span>
          <span>Đăng nhập</span>
        </div>

        <section className="login-layout" aria-labelledby="login-title">
          <div className="login-intro">
            <p className="login-kicker">Khu phố thân quen</p>
            <h1 id="login-title">Lâu rồi không gặp!</h1>
            <p>
              Đăng nhập để tiếp tục chia sẻ những câu chuyện, bức ảnh và ký ức
              đẹp cùng cộng đồng CTBER.
            </p>
            <div className="login-sticker" aria-hidden="true">
              <span>٩(◕‿◕｡)۶</span>
              <small>Welcome back!</small>
            </div>
          </div>

          <div className="login-card">
            <div className="login-card-heading">
              <span className="login-card-icon" aria-hidden="true">✉</span>
              <div>
                <h2>Đăng nhập</h2>
                <p>Chào mừng bạn trở lại diễn đàn</p>
              </div>
            </div>
            <LoginForm next={nextPath} />
            <Link className="login-back-link" href="/">
              ← Về trang chủ
            </Link>
          </div>
        </section>

        <p className="login-footer-note">
          CTBER · nơi lưu giữ những điều thân thương từ năm 2000
        </p>
      </main>
    </>
  );
}
