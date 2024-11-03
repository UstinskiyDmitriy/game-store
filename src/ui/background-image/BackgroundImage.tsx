import s from "./BackgroundImage.module.css";

interface BackgroundImageProps {
  image?: string;
  alt?: string;
}

export default function BackgroundImage({ image, alt }: BackgroundImageProps) {
  return (
    <div className={s.overlay}>
      <img src={image} alt={alt} className={s.background_img} />
    </div>
  );
}
