import React from "react";
import s from "./Cards.module.scss";
import CardsItem from "./CardsItem";

interface CardsProps {}

export type TCard = {
  count: number;
  stuffing: string;
  stuffing_full: string;
  servings: number;
  mouses: number;
  weight: number;
  additionally?: string;
};

const cards: TCard[] = [
  {
    count: 10,
    stuffing: "с фуа-гра",
    stuffing_full: "Печень утки разварная с артишоками.",
    servings: 10,
    mouses: 1,
    weight: 0.5,
  },
  {
    count: 10,
    stuffing: "с рыбой",
    stuffing_full: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    servings: 40,
    mouses: 2,
    weight: 2,
  },
  {
    count: 10,
    stuffing: "с курой",
    stuffing_full: "Филе из цыплят с трюфелями в бульоне.",
    servings: 100,
    mouses: 5,
    weight: 5,
    additionally: "заказчик доволен",
  },
];

const Cards: React.FC<CardsProps> = () => {
  return (
    <div className={s.cards}>
      {cards.map((item, i) => (
        <CardsItem key={i} item={item} />
      ))}
    </div>
  );
};

export default Cards;
