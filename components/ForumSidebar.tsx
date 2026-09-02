import { mediaItems } from "@/data/media-items";
import { recentMembers } from "@/data/sidebar-data";
import { MediaGrid } from "@/components/sidebar/MediaGrid";
import { ShareMemberList } from "@/components/sidebar/ShareMemberList";
import { OnlineMembers } from "@/components/sidebar/OnlineMembers";
import { ForumStats } from "@/components/sidebar/ForumStats";
import { SidebarPanel } from "@/components/sidebar/SidebarPanel";

export function ForumSidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-login"><span>Đăng nhập | Đăng ký</span></div>
      <SidebarPanel title="Media mới đăng">
        <MediaGrid items={mediaItems} />
      </SidebarPanel>
      <SidebarPanel title="Bạn có gì muốn chia sẻ?">
        <ShareMemberList members={recentMembers} />
      </SidebarPanel>
      <SidebarPanel title="Thành viên đang trực tuyến">
        <OnlineMembers />
      </SidebarPanel>
      <SidebarPanel title="Thống kê diễn đàn">
        <ForumStats />
      </SidebarPanel>
    </aside>
  );
}
