import css from "./ImagePreview.module.css";

const ModalImagePreview = ({ image }) => {
  return (
    <div className={css.modalBlock} onClick={(e) => e.stopPropagation()}>
      <img
        src={`${image.urls.raw}&w=400&h=300&fit=clamp&fm=webp`}
        srcSet={`${image.urls.raw}&w=400&h=300&fit=clamp&fm=webp 1x, ${image.urls.raw}&w=400&h=300&dpr=2&fit=clamp&fm=webp 2x`}
        alt={image.description}
        className={css.img}
      />
    </div>
  );
};
export default ModalImagePreview;
