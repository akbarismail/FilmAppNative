/* eslint-disable prettier/prettier */
import React from 'react';
import CardTopMenu from './CardTopMenu';
import Other from './Other';

const CardFilm = ({ isTopMenu, desc, imgFrom, rate, title, year, onPress }) => {
  if (isTopMenu) {
    return (
      <CardTopMenu
        desc={desc}
        imgFrom={imgFrom}
        rate={rate}
        title={title}
        year={year}
        onPress={onPress}
      />
    );
  }
  return (
    <Other imgFrom={imgFrom} rate={rate} title={title} onPress={onPress} />
  );
};

export default CardFilm;
