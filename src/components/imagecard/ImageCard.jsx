import css from "./ImageCard.module.css";

const ImageCard = ({ photo }) => {
  return (
    <div className={css.blokimg}>
      <img
        src={`${photo.urls.raw}&w=400&h=300&fit=clamp&fm=webp`}
        srcSet={`${photo.urls.raw}&w=400&h=300&fit=clamp&fm=webp 1x, ${photo.urls.raw}&w=400&h=300&dpr=2&fit=clamp&fm=webp 2x`}
        alt={photo.alt_description}
        className={css.img}
      />
    </div>
  );
};
export default ImageCard;
