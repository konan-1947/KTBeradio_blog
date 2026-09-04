import type { MemberItem } from "@/data/sidebar-data";
import Link from "next/link";

export function ShareMemberList({ members }: { members: MemberItem[] }) {
  return (
    <div className="member-list">
      {members.map((member, index) => (
        <Link href={`/members/${member.id}`} key={member.id} className="member-row">
          <span className={`avatar avatar-${index + 1}`} />
          <span>
            <strong>{member.name}</strong>
            <small>{member.detail && ` ${member.detail}`}</small>
          </span>
        </Link>
      ))}
    </div>
  );
}
