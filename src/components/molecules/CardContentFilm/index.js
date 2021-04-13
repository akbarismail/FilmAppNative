/* eslint-disable prettier/prettier */
import React from 'react';
import CardDetailContent from './CardDetailContent';
import NoneCardDetailContent from './NoneCardDetailContent';

const CardContentFilm = ({
  isDetailContent,
  desc,
  imgFrom,
  title,
  rate,
  year,
}) => {
  if (isDetailContent) {
    return <CardDetailContent imgFrom={imgFrom} title={title} year={year} />;
  }
  return (
    <NoneCardDetailContent
      desc={desc}
      imgFrom={imgFrom}
      title={title}
      rate={rate}
    />
  );
};

export default CardContentFilm;
