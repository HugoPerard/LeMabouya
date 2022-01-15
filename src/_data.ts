import canapeImage from 'public/assets/canape.jpg';
import cuisineImage from 'public/assets/cuisine.jpg';
import doucheImage from 'public/assets/douche.jpg';
import equipementsImage from 'public/assets/equipements.jpg';
import litImage from 'public/assets/lit.jpg';
import planImage from 'public/assets/plan.png';
import residenceImage from 'public/assets/residence.png';
import salleDeBainImage from 'public/assets/salle-de-bain.jpg';
import teleImage from 'public/assets/tele.jpg';

export const images = [
  {
    id: '01',
    src: residenceImage,
    desc: 'Une résidence avec piscine à quelques pas de la plage',
    alt: 'Photo de la résidence',
  },
  {
    id: '02',
    src: planImage,
    desc: "Une représentation virtuelle de l'appartement et son agencement",
    alt: 'Représentation virtuelle',
  },
  {
    id: '03',
    src: litImage,
    desc: 'Un lit 140x200 pour se reposer après des journées ensoleillées',
    alt: 'Le coin nuit',
  },
  {
    id: '04',
    src: teleImage,
    desc:
      'Une télévision est disponible si vous souhaitez suivre vos programmes favoris',
    alt: 'Télévision',
  },
  {
    id: '05',
    src: canapeImage,
    desc:
      'Un canapé pouvant servir de deuxième couchage, et le balcon pour manger en profitant du soleil',
    alt: 'Canapé',
  },
  {
    id: '06',
    src: cuisineImage,
    desc:
      "La cuisine équipée, notamment d'un four, d'une plaque de cuisson, d'une machine à laver, d'un micro-onde, d'un grille-pain et d'une cafetière",
    alt: 'La cuisine équipée',
  },
  {
    id: '07',
    src: doucheImage,
    desc: "La salle de bain équipée d'une douche et de toilettes",
    alt: 'La douche',
  },
  {
    id: '08',
    src: salleDeBainImage,
    desc:
      'Un grand meuble de salle de bain avec des rangements et un grand miroir',
    alt: 'La salle de bain',
  },
  {
    id: '09',
    src: equipementsImage,
    desc:
      'Des équipements sont mis à votre disposition pour pouvoir profiter au maximum pendant votre séjour',
    alt: 'Les équipements',
  },
];

export type ElementType<
  T extends ReadonlyArray<unknown>
> = T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type ProductImage = ElementType<typeof images>;
