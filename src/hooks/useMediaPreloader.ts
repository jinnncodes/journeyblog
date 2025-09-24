import { useEffect, useState } from "react";

export type MediaItem = { type: "image" | "video"; src: string };

export function useMediaPreloader(media: MediaItem[]): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!media || media.length === 0) {
      setLoaded(true);
      return;
    }

    let completed = 0;

    media.forEach((item) => {
      if (item.type === "image") {
        const img = new Image();
        img.src = item.src;

        const onLoadOrError = () => {
          completed++;
          if (completed === media.length) setLoaded(true);
        };

        img.onload = onLoadOrError;
        img.onerror = onLoadOrError;
      } else if (item.type === "video") {
        const video = document.createElement("video");
        video.src = item.src;

        const onLoadOrError = () => {
          completed++;
          if (completed === media.length) setLoaded(true);
        };

        // preload metadata only
        video.onloadedmetadata = onLoadOrError;
        video.onerror = onLoadOrError;
      }
    });
  }, [media]);

  return loaded;
}
