import { Link } from "react-router-dom";
import s from "./BackgroundImage.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react"; // Импортируем useState и useEffect

interface BackgroundImageProps {
  image?: string;
  alt?: string;
  id: number;
  nextCard: () => void;
  prevCard: () => void;
}

export default function BackgroundImage({ image, alt, id, nextCard, prevCard }: BackgroundImageProps) {
  const [isVisible, setIsVisible] = useState(true); // Добавляем состояние видимости
  const [currentImage, setCurrentImage] = useState(image); // Сохраняем текущий image в state

  useEffect(() => {
    setCurrentImage(image); // Обновляем currentImage при изменении image
    setIsVisible(true); // Делаем изображение видимым при смене
  }, [image]);

  const handlePrevCard = () => {
    setIsVisible(false); // Делаем изображение невидимым
    setTimeout(() => {
      prevCard(); // Вызываем функцию для смены картинки
      // setIsVisible(true); // Делаем изображение видимым (теперь в useEffect)
    }, 300); // Задержка в 300мс (равна времени transition)
  };

  const handleNextCard = () => {
    setIsVisible(false); // Делаем изображение невидимым
    setTimeout(() => {
      nextCard(); // Вызываем функцию для смены картинки
      // setIsVisible(true); // Делаем изображение видимым (теперь в useEffect)
    }, 300); // Задержка в 300мс (равна времени transition)
  };

  return (
    <div className={s.overlay}>
      <Link to={`/about/${id}`}>
        <img
          src={currentImage}
          alt={alt}
          className={`${s.background_img} ${isVisible ? s.visible : s.hidden}`} // Добавляем классы visible/hidden
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