import ImageCard from "../imagecard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onClick }) => {
  return (
    <div className={css.gallery}>
      <ul className={css.list}>
        {photos.map((photo) => {
          return (
            <li
              className={css.item}
              key={photo.id}
              onClick={() => {
                onClick(photo);
              }}
            >
              <ImageCard photo={photo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ImageGallery;
