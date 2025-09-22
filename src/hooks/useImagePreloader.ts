import { useEffect, useState } from "react";

export function useImagePreloader(imageUrls: string[]): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let completed = 0;

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;

      const onLoadOrError = () => {
        completed++;

        if (completed === imageUrls.length) {
          setLoaded(true);
        }
      };

      img.onload = onLoadOrError;
      img.onerror = onLoadOrError; // ✅ still counts if an image fails
    });
  }, [imageUrls]);

  return loaded;
}
