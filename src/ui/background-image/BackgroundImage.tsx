import { Link } from "react-router-dom";
import s from "./BackgroundImage.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BackgroundImageProps {
  image?: string;
  alt?: string;
  id: number;
  nextCard: ()=> void;
  prevCard: ()=> void;
}

export default function BackgroundImage({ image, alt, id,nextCard,prevCard }: BackgroundImageProps) {
 
  return (
    <div className={s.overlay}>
      <Link to={`/about/${id}`}>
      <img src={image} alt={alt} className={s.background_img} loading="lazy"/>
      </Link>
      <div className={s.arrows}>
      <div><ChevronLeft  onClick={prevCard} /></div>
      <div><ChevronRight onClick={nextCard}/></div>
      </div>
     
    </div>
  );
}
