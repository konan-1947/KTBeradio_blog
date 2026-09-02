export type MediaItem = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  thumbnailClass: string;
};

export const mediaItems: MediaItem[] = [
  { id: "media-1", title: "[Vietsub+Full Kara]", subtitle: "Never say never -", duration: "3:56", thumbnailClass: "media-1" },
  { id: "media-2", title: "Đừng lùi bước (", subtitle: "Never Gone) - Karik", duration: "3:57", thumbnailClass: "media-2" },
  { id: "media-3", title: "Suy Sụp - Karik", subtitle: "[Đôrêmon]", duration: "3:38", thumbnailClass: "media-3" },
  { id: "media-4", title: "[Karaoke] Mưa -", subtitle: "Thùy Chi & M4U", duration: "4:42", thumbnailClass: "media-4" },
  { id: "media-5", title: "Điều Hòa Ngang Qua", subtitle: "[ Chế ] Con Mưa", duration: "3:54", thumbnailClass: "media-5" },
  { id: "media-6", title: "[HD] Tình Yêu Hoa", subtitle: "Gió - Trương Thế", duration: "6:24", thumbnailClass: "media-6" },
  { id: "media-7", title: "[HD] Hai Ba Năm -", subtitle: "Phạm Trưởng", duration: "5:30", thumbnailClass: "media-7" },
  { id: "media-8", title: "Viên Đá Nhớ - Hải", subtitle: "Băng [ MV HD ]", duration: "9:57", thumbnailClass: "media-8" },
];
