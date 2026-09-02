import type { MemberItem } from "@/data/sidebar-data";

export function ShareMemberList({ members }: { members: MemberItem[] }) {
  return (
    <div className="member-list">
      {members.map((member, index) => (
        <a href="#" key={member.id} className="member-row">
          <span className={`avatar avatar-${index + 1}`} />
          <span>
            <strong>{member.name}</strong>
            <small>{member.detail && ` ${member.detail}`}</small>
          </span>
        </a>
      ))}
    </div>
  );
}
