import { forumPosts } from "@/data/forum-posts";
import { recentMembers } from "@/data/sidebar-data";

export type MemberProfile = {
  id: string;
  name: string;
  detail: string;
  bio: string;
};

const additionalMembers: MemberProfile[] = [
  {
    id: "fuliver123",
    name: "fuliver123",
    detail: "Đã chia sẻ 1 bài viết",
    bio: "Thành viên chia sẻ những nội dung media cùng CTBER.",
  },
];

export const memberProfiles: MemberProfile[] = [
  ...recentMembers.map((member) => ({
    ...member,
    bio: member.detail || "Thành viên của cộng đồng CTBER.",
  })),
  ...additionalMembers,
];

export function getMemberProfile(id: string) {
  return memberProfiles.find((member) => member.id === id) ?? null;
}

export function getMemberPosts(id: string) {
  return forumPosts.filter((post) => post.authorId === id);
}
