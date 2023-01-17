import React from "react";
import { TCard } from ".";
import s from "./Cards.module.scss";

interface CardsItemProps {
  item: TCard;
}

const CardsItem: React.FC<CardsItemProps> = ({ item }) => {
  const {
    count,
    stuffing,
    stuffing_full,
    mouses,
    servings,
    additionally,
    weight,
  } = item;
  return (
    <div className={s.card_wrapper}>
      <div className={s.card_content_wrapper}>
        <div className={s.card_content}>
          <div className={s.card_desc}>Сказочное заморское яство</div>
          <h2 className={s.card_title}>Нямушка</h2>
          <div className={s.card_subtitle}>{stuffing}</div>
          <div className={s.card_features}>
            {servings} <span>порций</span>
          </div>
          <div className={s.card_features}>
            {mouses} <span>мышей в подарок</span>
          </div>
          <div className={s.card_features}>
            <span>{additionally}</span>
          </div>
          <div className={s.card_weight}>
            {weight} <span>кг</span>
          </div>
        </div>
      </div>
      <div className={s.card_footer}>
        Чего сидишь? Порадуй котэ, <span>купи.</span>
      </div>
    </div>
  );
};

export default CardsItem;
