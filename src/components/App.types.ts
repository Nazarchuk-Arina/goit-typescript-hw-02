import { Image } from "./ImageGallery/ImageGallery.types";

export type ApiResponse = {
  results: Image[];
  total: number;
};
