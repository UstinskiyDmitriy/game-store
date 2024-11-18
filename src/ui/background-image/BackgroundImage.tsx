import { Link } from "react-router-dom";
import s from "./BackgroundImage.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface BackgroundImageProps {
  image?: string;
  alt?: string;
  id: number;
  nextCard: () => void;
  prevCard: () => void;
}

export default function BackgroundImage({
  image,
  alt,
  id,
  nextCard,
  prevCard,
}: BackgroundImageProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentImage, setCurrentImage] = useState(image);

  useEffect(() => {
    setCurrentImage(image);
    setIsVisible(true);
  }, [image]);

  const handlePrevCard = () => {
    setIsVisible(false);
    setTimeout(() => {
      prevCard();
    }, 300);
  };

  const handleNextCard = () => {
    setIsVisible(false);
    setTimeout(() => {
      nextCard();
    }, 300);
  };

  return (
    <div className={s.overlay}>
      <Link to={`/about/${id}`}>
        <img
          src={currentImage}
          alt={alt}
          className={`${s.background_img} ${isVisible ? s.visible : s.hidden}`}
          loading="lazy"
        />
      </Link>
      <div className={s.arrows}>
        <div>
          <ChevronLeft onClick={handlePrevCard} />
        </div>
        <div>
          <ChevronRight onClick={handleNextCard} />
        </div>
      </div>
    </div>
  );
}
