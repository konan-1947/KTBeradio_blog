import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { AuthButton } from "@/components/AuthButton";

export async function SiteHeader() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userName =
    user?.user_metadata?.full_name ??
    user?.user_metadata?.name ??
    user?.email?.split("@")[0] ??
    null;

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-inner">
          <Link href="/" className="brand">
            <Image className="brand-logo" src="/ctber-logo-cropped.png" alt="CTBER" width={258} height={70} priority />
          </Link>
          <div className="header-tools">
            <AuthButton userName={userName} />
            <label className="search-box">
              <span className="sr-only">Tìm kiếm</span>
              <input placeholder="Tìm kiếm..." />
            </label>
          </div>
        </div>
      </div>
      <nav className="main-nav" aria-label="Điều hướng chính">
        <div className="nav-inner">
          <Link className="active" href="/">Home</Link>
          <a href="#">Diễn đàn</a>
          <a href="#">Media</a>
          <Link href="/members">Thành viên</Link>
        </div>
      </nav>
    </header>
  );
}
