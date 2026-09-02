import { forumStats } from "@/data/sidebar-data";
import { Fragment } from "react";

export function ForumStats() {
  return (
    <dl className="stats">
      {forumStats.map(([label, value]) => (
        <Fragment key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
