import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';

import Sunset from '../assets/Sunset.avif';
import Cat from '../assets/Cat.avif';
import City from '../assets/City.avif';

const itemData = [
  {
    img: Sunset,
    title: 'Sea side sunset',
  },
  {
    img: Cat,
    title: 'Cat',
  },
  {
    img: City,
    title: 'City Sky Line',
  },
];

function Photos() {
  return (
    <ImageList sx={{ width: '100%' }} cols={1} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Photos;
