const makeImage = (imageData) => {
  const image = document.createElement('img');
  image.src = imageData;
  image.height = 100;
  image.width = 100;
  return image;
};

export default makeImage;
