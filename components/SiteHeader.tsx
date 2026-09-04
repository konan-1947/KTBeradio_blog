import Image from "next/image";
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
          <div className="brand">
            <Image className="brand-logo" src="/ctber-logo-cropped.png" alt="CTBER" width={258} height={70} priority />
          </div>
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
          <a className="active" href="#">Home</a>
          <a href="#">Diễn đàn</a>
          <a href="#">Media</a>
          <a href="#">Thành viên</a>
        </div>
      </nav>
    </header>
  );
}
