export type MemberItem = {
  id: string;
  name: string;
  detail: string;
};

export const recentMembers: MemberItem[] = [
  { id: "i-whsi", name: "I wHsI I cOuLd KiSs YoU", detail: "Bắt đầu vào guồng quay tới đích mới...." },
  { id: "nguyen-diep-ngoc", name: "Nguyễn Diệp Ngọc", detail: "*******************" },
  { id: "jin1997", name: "Jin1997 =))", detail: "" },
  { id: "emgaitientieutu", name: "emgaitientieutu", detail: "Stay" },
  { id: "dao-minh-giang", name: "Đào Minh Giang", detail: "Đẹp đẹp" },
  { id: "vitcon", name: "vitcon", detail: "Lai Nguyen is a young blogger" },
];

export const onlineMembers = "googlebot, Co_bon_la, Haruka_my";

export const forumStats = [
  ["Chủ đề:", "3.050"],
  ["Bài viết:", "19.524"],
  ["Thành viên:", "1.944"],
  ["User Record:", "335"],
  ["Thành viên mới nhất:", "tminh463"],
] as const;
