import s from "./ImageModal.module.css";
import Modal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";

export default function ImageModal({
  image,
  isOpen,
  onRequestClose,
  style,
}: ImageModalProps): JSX.Element | null {
  if (!image) return null;
  return (
    <Modal
      appElement={document.getElementById("root") as HTMLElement}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={style}
    >
      <div className={s.wrapper}>
        <div className={s.modal}>
          <img
            src={image.urls.regular}
            alt={image.alt_description || "Image"}
          />
          <ul className={s.list}>
            <li>
              <p>Author: {image.user.name}</p>
            </li>
            <li>
              <p>Added: {image.created_at.slice(0, 10)}</p>
            </li>
            <li>
              <p>Likes: {image.likes}</p>
            </li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
