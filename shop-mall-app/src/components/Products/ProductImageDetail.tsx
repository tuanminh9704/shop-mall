interface Image {
  imageUrl: string;
}

interface ProductDetailImageProps {
  imageMain?: string;
  images: Image[];
}

export const ProductDetailImage = ({images, imageMain}: ProductDetailImageProps) => {
  return (
    <div>
      <div className="p-2 border border-gray-200 rounded-lg">
        <img
          src={imageMain}
          alt=""
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="flex gap-2 mt-3 justify-center">
        {images.map((image) => (
          <div className="p-0.5 border border-gray-200 rounded-lg">
            <img
              src={image.imageUrl}
              alt="thumb"
              className="w-13 h-13 rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
