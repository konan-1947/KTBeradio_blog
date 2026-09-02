const mediaItems = [
  ["[Vietsub+Full Kara]", "Never say never -", "3:56", "media-1"],
  ["Đừng lùi bước (", "Never Gone) - Karik", "3:57", "media-2"],
  ["Suy Sụp - Karik", "[Đôrêmon]", "3:38", "media-3"],
  ["[Karaoke] Mưa -", "Thùy Chi & M4U", "4:42", "media-4"],
  ["Điều Hòa Ngang Qua", "[ Chế ] Con Mưa", "3:54", "media-5"],
  ["[HD] Tình Yêu Hoa", "Gió - Trương Thế", "6:24", "media-6"],
  ["[HD] Hai Ba Năm -", "Phạm Trưởng", "5:30", "media-7"],
  ["Viên Đá Nhớ - Hải", "Băng [ MV HD ]", "9:57", "media-8"],
];

const recentMembers = [
  ["I wHsI I cOuLd KiSs YoU", "Bắt đầu vào guồng quay tới đích mới...."],
  ["Nguyễn Diệp Ngọc", "*******************"],
  ["Jin1997 =))", ""],
  ["emgaitientieutu", "Stay"],
  ["Đào Minh Giang", "Đẹp đẹp"],
  ["vitcon", "Lai Nguyen is a young blogger"],
];

export function ForumSidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-login"><span>Đăng nhập | Đăng ký</span></div>
      <SidebarPanel title="Media mới đăng">
        <div className="media-grid">
          {mediaItems.map(([title, subtitle, duration, thumb]) => (
            <a className="media-item" href="#" key={title}>
              <div className={`media-thumb ${thumb}`}><span>{duration}</span></div>
              <strong>{title}</strong>
              <small>{subtitle}</small>
            </a>
          ))}
        </div>
        <input className="media-search" placeholder="Tìm Media..." aria-label="Tìm Media" />
      </SidebarPanel>
      <SidebarPanel title="Bạn có gì muốn chia sẻ?">
        <div className="member-list">
          {recentMembers.map(([member, detail], index) => (
            <a href="#" key={member} className="member-row">
              <span className={`avatar avatar-${index + 1}`} />
              <span><strong>{member}</strong><small>{detail && ` ${detail}`}</small></span>
            </a>
          ))}
        </div>
      </SidebarPanel>
      <SidebarPanel title="Thành viên đang trực tuyến">
        <div className="online-box"><strong>googlebot, Co_bon_la, Haruka_my</strong><br />Đang trực tuyến: 32 (Thành viên: 2, Khách: 29)</div>
      </SidebarPanel>
      <SidebarPanel title="Thống kê diễn đàn">
        <dl className="stats">
          <dt>Chủ đề:</dt><dd>3.050</dd>
          <dt>Bài viết:</dt><dd>19.524</dd>
          <dt>Thành viên:</dt><dd>1.944</dd>
          <dt>User Record:</dt><dd>335</dd>
          <dt>Thành viên mới nhất:</dt><dd>tminh463</dd>
        </dl>
      </SidebarPanel>
    </aside>
  );
}

function SidebarPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="sidebar-panel"><h3>{title}</h3><div className="sidebar-panel-body">{children}</div></section>;
}
