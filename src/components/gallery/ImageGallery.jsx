import ImageCard from "../imagecard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = () => {
  return (
    <>
      <ul className={css}>
        <li className={css}>
          <ImageCard />
        </li>
      </ul>
    </>
  );
};
export default ImageGallery;
