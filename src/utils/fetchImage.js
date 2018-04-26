export const fetchImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = () => resolve(true);
    image.onerror = reject;
  });
