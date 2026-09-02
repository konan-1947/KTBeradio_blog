export function SidebarPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="sidebar-panel">
      <h3>{title}</h3>
      <div className="sidebar-panel-body">{children}</div>
    </section>
  );
}
