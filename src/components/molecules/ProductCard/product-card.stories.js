import React from 'react';
import { storiesOf } from '@storybook/react';

import ProductCard from './product-card';

import Placeholders from '../../../helpers/dummy/placeholders';

const IMG_URL = Placeholders.image(280, 180);

const props = {
  title: 'Title',
  price: 1000,
  imageUrl: IMG_URL,
};

storiesOf('Molecules/ProductCard', module)
  .add('default', () => (
    <ProductCard
      imageUrl={props.imageUrl}
      price={props.price}
      title={props.title}
    />
  ))
  .add('with unit', () => (
    <ProductCard
      imageUrl={props.imageUrl}
      price={props.price}
      title={props.title}
      unit="UNIT"
    />
  ));
