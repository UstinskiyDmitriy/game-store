export interface TCardData {
  id: number;
  image: string;
  about_header_img: string;
  title: string;
  year: string;
  ganre: string[];
  isonline?: string;
  site?: string;
  platforms?: string[];
  developer?: string;
  description?: string;
  rate?: number;
  steam?: string;
  price?: string | number;
}
