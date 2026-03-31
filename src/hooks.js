import { useEffect, useMemo, useState } from 'react';
import { defaultImages } from './data/defaultImages';

const STORAGE_KEY = 'walker-photography-images';

export function useGalleryStore() {
  const [images, setImages] = useState(() => {
    const fromStorage = localStorage.getItem(STORAGE_KEY);
    if (!fromStorage) {
      return defaultImages;
    }

    try {
      const parsed = JSON.parse(fromStorage);
      return Array.isArray(parsed) ? parsed : defaultImages;
    } catch {
      return defaultImages;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
  }, [images]);

  const featuredImages = useMemo(() => images.filter((img) => img.featured), [images]);

  function upsertImage(nextImage) {
    setImages((prev) => {
      const hasExisting = prev.some((item) => item.id === nextImage.id);

      if (hasExisting) {
        return prev.map((item) => (item.id === nextImage.id ? nextImage : item));
      }

      return [nextImage, ...prev];
    });
  }

  function removeImage(imageId) {
    setImages((prev) => prev.filter((img) => img.id !== imageId));
  }

  function setDownloadable(imageId, downloadable) {
    setImages((prev) =>
      prev.map((img) => (img.id === imageId ? { ...img, downloadable } : img))
    );
  }

  return {
    images,
    featuredImages,
    upsertImage,
    removeImage,
    setDownloadable,
  };
}
