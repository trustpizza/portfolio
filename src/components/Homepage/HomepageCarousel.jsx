import placeholder from '../../assets/placeholder.jpg'; // Adjust the path as needed

const Gallery = ({ images = [] }) => {
  const rotationPattern = [5, -5, 5, -5]; // Rotation pattern
  const minImages = 10;

  // Pad the images array with placeholders if it's shorter than minImages
  const paddedImages = [...images];
  while (paddedImages.length < minImages) {
    paddedImages.push(placeholder);
  }

  return (
    <div className="mt-16 sm:mt-20 overflow-x-auto">
      <div className="carousel carousel-center rounded-box max-w-screen-sm lg:max-w-screen-md">
        {paddedImages.map((image, index) => {
          // Calculate the rotation value using the rotation pattern
          const rotationValue = rotationPattern[index % rotationPattern.length];

          // Determine the class name based on the rotation value
          const rotationClass = rotationValue < 0 ? `-rotate-${Math.abs(rotationValue)}` : `rotate-${rotationValue}`;

          return (
            <div
              key={index}
              className={`m-4 carousel-item w-72 relative aspect-9/10 sm:w-56 rounded-xl`}
            >
              <img src={image} alt={`Gallery Image ${index + 1}`} className={`rounded-md object-cover w-full h-full ${rotationClass} `} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;