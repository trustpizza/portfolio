import placeholder from '../../assets/placeholder.jpg';

const Gallery = ({ images = [] }) => {
  const rotationPattern = [5, -5, 5, -5];
  const minImages = 10;

  const paddedImages = [...images];
  while (paddedImages.length < minImages) {
    paddedImages.push(placeholder);
  }

  return (
    <div className="mt-16 sm:mt-20 overflow-x-auto">
      <div className="carousel sm:carousel-center rounded-box max-w-screen-sm lg:max-w-screen-md">
        {paddedImages.map((image, index) => {
          const rotationValue = rotationPattern[index % rotationPattern.length];
          const rotationClass = rotationValue < 0 ? `-rotate-${Math.abs(rotationValue)}` : `rotate-${rotationValue}`;

          // Explicitly include all possible rotation classes in the template literal
          return (
            <div
              key={index}
              className={`m-4 carousel-item w-72 relative aspect-9/10 sm:w-56 rounded-xl rotate-5 -rotate-5`} // Tailwind will find these!
            >
              <img src={image} alt={`Gallery Image ${index + 1}`} className={`rounded-md object-cover w-full h-full ${rotationClass}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;