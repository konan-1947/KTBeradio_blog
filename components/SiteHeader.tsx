import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="header-inner">
          <div className="brand">
            <Image className="brand-logo" src="/ctber-logo-cropped.png" alt="CTBER" width={258} height={70} priority />
          </div>
          <div className="header-tools">
            <button className="login-button">Đăng nhập</button>
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
