import ReactModal from "react-modal";
import { Image } from "../ImageGallery/ImageGallery.types";

export type ImageModalProps = {
  image: Image | null;
  isOpen: boolean;
  onRequestClose: () => void;
  style?: ReactModal.Styles;
};
