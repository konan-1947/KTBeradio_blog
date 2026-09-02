import { onlineMembers } from "@/data/sidebar-data";

export function OnlineMembers() {
  return (
    <div className="online-box">
      <strong>{onlineMembers}</strong>
      <br />
      Đang trực tuyến: 32 (Thành viên: 2, Khách: 29)
    </div>
  );
}
