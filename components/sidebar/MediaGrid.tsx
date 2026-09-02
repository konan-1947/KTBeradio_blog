import type { MediaItem } from "@/data/media-items";

export function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <>
      <div className="media-grid">
        {items.map((item) => (
          <a className="media-item" href="#" key={item.id}>
            <div className={`media-thumb ${item.thumbnailClass}`}>
              <span>{item.duration}</span>
            </div>
            <strong>{item.title}</strong>
            <small>{item.subtitle}</small>
          </a>
        ))}
      </div>
      <input className="media-search" placeholder="Tìm Media..." aria-label="Tìm Media" />
    </>
  );
}
