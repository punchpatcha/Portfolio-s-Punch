// src/utils/imageUtils.js

export const getImageSrc = async (basePath, formats) => {
    for (const format of formats) {
      const imagePath = `${basePath}.${format}`;
      const imageExists = await fetch(imagePath, { method: 'HEAD' })
        .then((res) => res.ok)
        .catch(() => false);
      if (imageExists) {
        return imagePath;
      }
    }
    return null; // Return null if no image found
  };
  