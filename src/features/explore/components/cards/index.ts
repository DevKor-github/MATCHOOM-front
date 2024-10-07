import PrimaryCard from './PrimaryCard';
import RectangleCard from './RectangleCard';

export interface CardType {
  title: string;
  description: string;
  guide: string;
  imageSrc: string;
}

export const Card = Object.assign(PrimaryCard, {
  Rectangle: RectangleCard,
});
