import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

export default function ImageGallery({
  images,
  openModal,
}: ImageGalleryProps): JSX.Element {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id} onClick={() => openModal(image)}>
          <ImageCard
            alt_description={image.alt_description || "No description"}
            urls={image.urls}
          />
        </li>
      ))}
    </ul>
  );
}
